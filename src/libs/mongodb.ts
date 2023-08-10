import { error } from "console";
import mongoose from "mongoose";

const {MONGODB_URI} = process.env

// se crea este if para que no aparezca error en la parte de la conexion, lo que hace el if es validar que la variable MONGODB_URI exista, si no exite lanza un error
if (!MONGODB_URI){
    throw new Error('MONGODB_URI debe estar definido')
}

// se usa moongoose para hacer la conexion a la base de datos de mongoDB
export const connectDB = async () =>{

    try{
        const { connection } = await mongoose.connect(MONGODB_URI);
        // aqui se crea la conexion hecha en el archivo env.local en donde esta la direccion de la DB
        if (connection.readyState === 1){
            console.log("MongoDB is connected")
            // aqui lo que se busca es que el ready state muestre el estado 1 significa que esta conectado, esto es lo que mostraria por consola
            return Promise.resolve(true)
        }
    } catch (error){
        console.log(error)
        return Promise.reject(false)
    }
 
}