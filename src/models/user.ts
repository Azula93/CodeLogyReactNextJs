import { Schema, model, models } from "mongoose"; 

// estos "Schema" son como los datos que se requiere para un usuario, son validadciones aunque no reemplazan las validadciones del backend serian una especie de "capa de proteccion extra"
const userSchema = new Schema({
    email: {
        type:String,
        unique: true,
        required:[ true,"El email es requerido"],
        match:[
            /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "El email no es valido"
        ]
    },

    password:{
        type:String,
        required:[ true,"La contraseña es requerida"],
        select: false,
        // el select hace que la contraseña no se devuelva al fronted por temas de seguridad
        // match:[/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/, "La contraseña no es valida"]
    },

    fullname: {
        type:String,
        required:[ true,"El nombre es requerido"],
        minLength: [3, "Tu nombre debe contener minimo 3 letras"],
        maxLength: [50, "Tu nombre debe contener maximo 50 letras"],
    }
});

const User = models.User || model("User", userSchema);

export default User 