import { NextResponse } from "next/server";
import User from "@/models/user";
import {connectDB} from "../../../../libs/mongodb"
import bcrypt from "bcryptjs";

// aqui se reciben los datos que seingresan en el formulario

export async function POST(request: Request){

    const {fullname,email, password} = await request.json() 
    // aqui se toman los datos que vienen del forntend
    console.log(fullname, email, password)

    // este if valida la contraseña
    if (!password || password.length <6) return NextResponse.json({
        message: 'la contraseña debe tener al menos 6 caracteres'
    }, {
        status: 400
    })


    // el try hace la validacion de los datos, si hay un error o estan vacios pasa al el catch y muesta el mensaje de error
    try {
        await connectDB()
        // aqui se valida si el email ya esta creado
    const userFound = await User.findOne({ email})

    if (userFound) return NextResponse.json({
        message: 'el email ya esta registrado'
    },{
        status: 400 
    });

    // encripta la contraseña
   const hashedPassword = await bcrypt.hash(password,12)

    // se crea un nuevo usuario
    const user = new User({
        fullname,
        email,
        password:hashedPassword
    })
    const saveUser = await user.save()
    console.log(saveUser)

    // aqui se le muestra al usuario que los datos estan guardados
    return NextResponse.json({
        _id: saveUser._id,
        email: saveUser.email,
        fullname: saveUser.fullname
    });

    } catch (error) {
        // este error se muestra si los datos ingresados son incorrectos
        console.log(error);
        if(error instanceof Error) {
            return NextResponse.json({
                message: error.message
            }, {
                status: 400
            })
    }
}}
