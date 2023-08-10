// este middleware lo que hace es proteger rutas es decir que no se puede ingresar si el usuario no esta autenticado

export {default} from "next-auth/middleware";

export const config = {
    // estas son las rutas protegidas
    matcher: ['/dashboard/:path*']
}