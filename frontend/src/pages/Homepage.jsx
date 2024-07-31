<<<<<<< HEAD
// src/pages/Homepage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaPen, FaBible, FaEllipsisH } from 'react-icons/fa'; // Import icons
import SearchBar from '../components/SearchBar';
import Navbar from "../components/Navbar";
import headerImage from '../assets/pic-1.jpg';
import Footer from '../components/Footer';

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Add useNavigate hook

=======
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import PostCard from '../components/PostCard';
import Navbar from "../components/Navbar";
import headerImage from '../assets/pic-1.jpg';

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
  const handleSearch = (query) => {
    alert(`Search for: ${query}`);
  };

<<<<<<< HEAD
  const handleMoreClick = () => {
    navigate('/book'); // Navigate to BookPage
  };

  return (
=======
  const handleMoreClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    /* Header Image and SearchBar */
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative">
        <img src={headerImage} alt="Header" className="w-full h-64 object-cover" />
<<<<<<< HEAD
      </div>
      <div className="flex justify-center my-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="p-4">
        <h2 id="welcome" className="text-2xl font-bold mb-4 text-center">Pintasan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          <Link to="/genre/Fiction" className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center h-12 text-center text-gray-800 no-underline hover:bg-gray-200 transition-colors">
            <FaBook size={20} className="mr-2" />
            <h3 className="text-lg">Buku Fiksi</h3>
          </Link>
          <Link to="/genre/Non-fiction" className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center h-12 text-center text-gray-800 no-underline hover:bg-gray-200 transition-colors">
            <FaPen size={20} className="mr-2" />
            <h3 className="text-lg">Non-Fiksi</h3>
          </Link>
          <Link to="/genre/Religion" className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center h-12 text-center text-gray-800 no-underline hover:bg-gray-200 transition-colors">
            <FaBible size={20} className="mr-2" />
            <h3 className="text-lg">Agama</h3>
          </Link>
          <button className="bg-blue-500 text-white rounded-md flex items-center justify-center h-12 text-center no-underline hover:bg-blue-600 transition-colors" onClick={handleMoreClick}>
            <FaEllipsisH size={20} className="mr-2" />
            <h3 className="text-lg">More</h3>
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-8 px-4 flex-grow">
        <section className="mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Selamat Datang di Homepage</h2>
            <p className="text-gray-600 leading-relaxed text-center">
              Selamat datang di website kami! Kami berkomitmen untuk memberikan pengalaman terbaik dalam mencari dan membaca buku. Jelajahi berbagai genre dan temukan buku-buku menarik yang dapat memperkaya pengetahuan Anda.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Moto Perpustakaan</h2>
            <p className="text-gray-600 leading-relaxed text-center">
              Dengan membaca kita tahu dan semakin paham.
            </p>
          </div>
        </section>
      </div>

      {/* Move Footer outside of the container */}
      <Footer />
=======
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>


      {/* NavigationBar */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Pintasan</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/genre/Fiction" className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center w-40 h-16 text-center text-gray-800 no-underline hover:bg-gray-200 transition-colors">
            <h3 className="text-lg">Buku Fiksi</h3>
          </Link>
          <Link to="/genre/Non-fiction" className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center w-40 h-16 text-center text-gray-800 no-underline hover:bg-gray-200 transition-colors">
            <h3 className="text-lg">Non-Fiksi</h3>
          </Link>
          <Link to="/genre/Religion" className="bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center w-40 h-16 text-center text-gray-800 no-underline hover:bg-gray-200 transition-colors">
            <h3 className="text-lg">Agama</h3>
          </Link>
          <button className="bg-blue-500 text-white rounded-md flex items-center justify-center w-40 h-16 text-center no-underline hover:bg-blue-600 transition-colors" onClick={handleMoreClick}>
            <h3 className="text-lg">More</h3>
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg relative">
              <button className="absolute top-2 right-2 text-xl" onClick={handleCloseModal}>X</button>
              <h2 className="text-2xl font-bold mb-4">Additional Categories</h2>
              <ul className="list-none p-0">
              <li className="mb-2"><Link to="/genre/Matematika" className="text-blue-500 hover:underline">Matematika</Link></li>
                <li className="mb-2"><Link to="/genre/Bahasa-Indonesia" className="text-blue-500 hover:underline">Bahasa Indonesia</Link></li>
                <li className="mb-2"><Link to="/genre/IPA" className="text-blue-500 hover:underline">Ilmu Pengetahuan Alam (IPA)</Link></li>
                <li className="mb-2"><Link to="/genre/IPS" className="text-blue-500 hover:underline">Ilmu Pengetahuan Sosial (IPS)</Link></li>
                <li className="mb-2"><Link to="/genre/Pendidikan-Agama" className="text-blue-500 hover:underline">Pendidikan Agama</Link></li>
                <li className="mb-2"><Link to="/genre/Healthy-Living" className="text-blue-500 hover:underline">Healthy Living</Link></li>
                <li className="mb-2"><Link to="/genre/Sosial" className="text-blue-500 hover:underline">Sosial</Link></li>
                <li className="mb-2"><Link to="/genre/Pendidikan-Kewarganegaraan" className="text-blue-500 hover:underline">Pendidikan Kewarganegaraan</Link></li>
                <li className="mb-2"><Link to="/genre/Cerita-Rakyat-Kaltim" className="text-blue-500 hover:underline">Cerita Rakyat Kaltim</Link></li>
                <li className="mb-2"><Link to="/genre/Seni-Budaya" className="text-blue-500 hover:underline">Seni Budaya</Link></li>
                <li className="mb-2"><Link to="/genre/Prakarya" className="text-blue-500 hover:underline">Prakarya</Link></li>
                <li className="mb-2"><Link to="/genre/Ensiklopedia-Umum" className="text-blue-500 hover:underline">Ensiklopedia Umum</Link></li>
            </ul>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto mt-8 px-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Selamat datang di Homepage</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus euismod justo, sit amet molestie
              velit fringilla id. Sed id ipsum volutpat, ultricies enim in, tempor nisi.
            </p>
          </div>
          <div>
            {/* <img src={headerImage} alt="Header" className="rounded-lg shadow-lg" />
            <img src="assets/logo.jpg" alt="Ini gambar" className="rounded-lg shadow-lg" /> */}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Section Lain</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus euismod justo, sit amet molestie velit fringilla id. Sed id ipsum volutpat, ultricies enim in, tempor nisi.
          </p>
        </section>
      </div>
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
    </div>
  );
};

export default Homepage;
