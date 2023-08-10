"use client"
import { useState } from "react";
import {BsList, BsX} from "react-icons/bs"
import Link from "next/link";

const MenuToogle = () =>{
    const [menuOpen, setmenuOpen] = useState(false);
    const toggleMenu = () => setmenuOpen(!menuOpen);

    return(
        <div>

        
        <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24">
        <BsList className='h-8 w-8 text-[#8C30F5]' />
        </div>

            <div className={menuOpen ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-slate-400 p-10 ease-in-out duration-500" : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500 " }></div>


        <div className="flex w-full items-center justify-end">
            <div onClick={toggleMenu} className="cursor-pointer" > 
                <BsX className='h-8 w-8 text-[#8C30F5]'/>
            </div>
        </div>
        {/* mobile Menu links */}
        <div className="flex-col py-4">
            <ul>
                <li onClick={() => setmenuOpen(false)} className="py-4 hover:underline hover:decoration-[#f1e4ff]">
                    <Link href='/'>Inicio</Link>
                </li>

                <li onClick={() => setmenuOpen(false)} className="py-4 hover:underline hover:decoration-[#f1e4ff]">
                <Link href='/register'>Registro</Link>
                </li>

                <li onClick={() => setmenuOpen(false)} className="flex items-center py-4 text-[#f1e4ff]">
                <Link className="cursor-pointer px-4 py-1 rounded-full bg-[#8C30F5]text-[#8C30F5] hover:text-[#f1e4ff] ease-in-out duration-300" href='/login'>Login</Link>
                </li>
            </ul>
        </div>
        </div>
    ) }
  

  export default MenuToogle