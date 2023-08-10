"use client";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Signup() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      // esta es la respuesta del backen
      const signupResponse = await axios.post("/api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
      });
      console.log(signupResponse);

      // esta es la respuesta de nextauth
      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/login");

    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center">

      <form onSubmit={handleSubmit} className="bg-white px-8 py-10 w-3/12 rounded shadow-md text-black ">

        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

        <h1 className="text-4xl font-bold mb-7">Registro</h1>

        <label className="text-slate-400">Nombre Completo:</label>
        <input
          type="text"
          placeholder="Nombre Completo"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
        />

        <label className="text-slate-400">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
        />

        <label className="text-slate-400">Contraseña:</label>
        <input
          type="password"
          placeholder="Contraseña"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
        />

        <button className="w-full py-3 rounded bg-indigo-500 text-white hover:bg-indigo-dark focus:outline-none my-1">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Signup;