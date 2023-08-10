import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import { error } from "console";
import bcrypt from "bcryptjs"

// nextauth lo que permite es auorizar o dar ingreso por medio de validaciones de email, password etc, lo ideal seria dar ingreso a un usuario por medio de gmail u otra app para mayor seguridad

const handler = NextAuth({
    providers:[
      CredentialsProvider({ 
        name: "credentials",
        credentials:{
            email:{
            label: "Email", type: "email", placeholder: "email@email.com"},
            
            password: {label: "pass", type: "password", placeholder: "*****"}
          }, 
          async authorize(credentials,req){

            await connectDB()

            const userFound = await User.findOne({email: credentials?.email}).select("+password");
            if (!userFound) throw new Error("Usuario no encontrado");

          //  aqui con bcrypt se compara la contraseña ingresada con la que esta en la base de datos
            const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password)

            if (!passwordMatch) throw new Error("Contraseña no valida");

            return userFound

          },
      }),
    ], 
    callbacks:{
      // aqui en los callbacks toma los datos y los pasa al frontend
      jwt({account, token, user, profile,session}){
        if (user) token.user = user;
        return token;
      },
      session({session,token}){
        session.user = token.user as any;
        return session;
      },
    }, 
    pages:{
      signIn: '/login',
    }
    
  })
  
  export { handler as GET, handler as POST }