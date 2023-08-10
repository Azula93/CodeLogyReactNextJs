'use client'
import Link from "next/link";
import Image from "next/image";
import {BsList, BsX, BsYoutube, BsInstagram} from "react-icons/bs"
import { getServerSession } from "next-auth";
import { useState } from "react";

const styles = {
    navLinks: 'ml-10 uppercase border-b border-white hover:border-[#f1e4ff] text-xl',
}



 function Header(){

//    const session = await getServerSession();
        const [menuOpen, setmenuOpen] = useState(false);
        const toggleMenu = () => setmenuOpen(!menuOpen);

    return(
        <header className="">
            <nav className="w-full h-24 shadow-xl bg-white">
                {/*desktop menu */}
                <div className='flex items-center justify-between h-full px-4 w-full'>
                    <Link href="/">
                    <Image 
                    src='/assets/img/LOGOCODELOGY.png'
                    alt="logo"
                    width={205}
                    height={75}
                    className="cursor-pointer" />
                    </Link>

                    <div className="text-black hidden sm:flex">
                        <ul className="hidden sm:flex">
                            <li className={styles.navLinks}> <Link href='/'>Inicio</Link> 
                            </li>

                            <li className={styles.navLinks}>
                            <Link href='/register'>Registro</Link>
                            </li>

                            <li className="flex items-center space-x-5 text-[#f1e4ff] ml-10">
                            <Link className=" cursor-pointer border border-[#f1e4ff] px-4 py-1 rounded-full bg-[#f1e4ff] text-[#8C30F5] hover:bg-[#8C30F5] hover:text-[#f1e4ff] ease-in-out duration-300" href='/login'>Login</Link>
                            </li>
                        </ul>
                    </div>

                     {/* Mobile Menu */}
                   
                 <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24">
                        <BsList className='h-8 w-8 text-[#8C30F5]' />
                    </div>
                </div>
                <div className={
                    menuOpen ?
                    "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-slate-400 p-10 ease-in-out duration-500" :
                    "fixed left-[-100%] top-0 p-10 ease-in-out duration-500 " }>

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


                        {/* Social media links */}
                        <div className="flex flex-row justify-around pt-10 items-center">
                            <Link href="#"> 
                                <BsYoutube size={30} className ='cursor-pointer hover:text-[#8C30F5] ease-in-out duration-300' />
                            </Link>

                            <Link href='#'>
                            <BsInstagram size={30} className ='cursor-pointer hover:text-[#8C30F5] ease-in-out duration-300' />
                            </Link>

                        </div>
                    </div>


               

                
            </nav>
        </header>
    )
};

export default Header;