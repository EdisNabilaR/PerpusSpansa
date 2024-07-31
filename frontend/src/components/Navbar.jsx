import React, { useState } from 'react';
<<<<<<< HEAD
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink dari react-scroll
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const Links = [
    { name: "Beranda", link: "/" }, // Ganti link dengan ID untuk react-scroll
    { name: "Informasi", link: "/information" }, // Link ke halaman lain tetap menggunakan react-router-dom
    { name: "Buku", link: "/book" },
    { name: "Sign In", link: "/login" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-lg cursor-pointer flex items-center gap-1'>
          <img src={logo} alt="Logo Perpustakaan" className='h-8 w-8' />
          <span className='text-white'>PERPUSTAKAAN CAHAYA SMP NEGERI 1 BALIKPAPAN</span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute text-white right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
              {link.link.startsWith('/') ? (
                <Link to={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</Link>
              ) : (
                <ScrollLink
                  to={link.link}
                  smooth={true}
                  duration={500}
                  className='text-white hover:text-blue-400 duration-500'
                >
                  {link.name}
                </ScrollLink>
              )}
=======
import { Link } from 'react-router-dom';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import headerImage from '../assets/pic-1.jpg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: 'Beranda', link: '/dash' },
    { name: 'Informasi', link: '/' },
    { name: 'Buku', link: '/' },
    { name: 'Sign In', link: '/login' },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10 bg-black">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-lg text-white flex items-center gap-1">
          <img src={headerImage} alt="Logo Perpustakaan" className="h-8 w-8" />
          <span>PERPUSTAKAAN CAHAYA SMP NEGERI 1 BALIKPAPAN</span>
        </div>
        <div onClick={() => setOpen(!open)} className="text-white cursor-pointer md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link to={link.link} className="text-white hover:text-blue-400 duration-500">{link.name}</Link>
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
<<<<<<< HEAD



// import React, { useState } from 'react';
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.jpg';

// const Navbar = () => {
//   const Links = [
//     { name: "Beranda", link: "/" }, // Home is now the root
//     { name: "Informasi", link: "/information" },
//     { name: "Buku", link: "/book" },
//     { name: "Sign In", link: "/login" },
//   ];

//   const [open, setOpen] = useState(false);

//   return (
//     <div className='shadow-md w-full fixed top-0 left-0 z-10'>
//       <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
//         {/* logo section */}
//         <div className='font-bold text-lg cursor-pointer flex items-center gap-1'>
//           <img src={logo} alt="Logo Perpustakaan" className='h-8 w-8' />
//           <span className='text-white'>PERPUSTAKAAN CAHAYA SMP NEGERI 1 BALIKPAPAN</span>
//         </div>
//         {/* Menu icon */}
//         <div onClick={() => setOpen(!open)} className='absolute text-white right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
//           {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//         </div>
//         {/* link items */}
//         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
//           {Links.map((link) => (
//             <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
//               <Link to={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
=======
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
