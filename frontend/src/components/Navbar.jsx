import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    let Links =[
        {name:"Beranda",link:"/dash"},
        {name:"Informasi",link:"/"},
        {name:"Buku",link:"/"},
        {name:"Sign In",link:"/login"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-lg cursor-pointer flex items-center gap-1'>
              <img src="/src/assets/logo.jpg" alt="Logo Perpustakaan" className='h-8 w-8' /> {/* Ganti className sesuai kebutuhan */}
              <span className='text-white'>PERPUSTAKAAN CAHAYA SMP NEGERI 1 BALIKPAPAN</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute text-white right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Navbar;