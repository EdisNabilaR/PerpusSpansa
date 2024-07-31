// src/pages/BookPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import your Navbar component here
import headerImage from '../assets/pic-1.jpg'; // Update with the path to your header image
import { FaBook, FaUsers, FaBrain, FaPaintBrush, FaCalculator, FaLanguage, FaFlask, FaGlobe, FaBookOpen, FaHeart, FaPeopleCarry, FaFrown, FaTheaterMasks, FaTasks, FaAtlas, FaUser } from 'react-icons/fa'; // Import icons
import Footer from '../components/Footer';

const genres = [
  { name: 'Kesusastraan', path: '/genre/Kesusastraan', icon: <FaBook /> },
  { name: 'Ilmu-ilmu Sosial', path: '/genre/Ilmu-ilmu-Sosial', icon: <FaUsers /> },
  { name: 'Ilmu-ilmu Terapan', path: '/genre/Ilmu-ilmu-Terapan', icon: <FaBrain /> },
  { name: 'Kesenian, Hiburan, dan Olahraga', path: '/genre/Kesenian-Hiburan-dan-Olahraga', icon: <FaPaintBrush /> },
  { name: 'Matematika', path: '/genre/Matematika', icon: <FaCalculator /> },
  { name: 'Bahasa Indonesia', path: '/genre/Bahasa-Indonesia', icon: <FaLanguage /> },
  { name: 'Ilmu Pengetahuan Alam (IPA)', path: '/genre/IPA', icon: <FaFlask /> },
  { name: 'Ilmu Pengetahuan Sosial (IPS)', path: '/genre/IPS', icon: <FaGlobe /> },
  { name: 'Pendidikan Agama', path: '/genre/Pendidikan-Agama', icon: <FaBookOpen /> },
  { name: 'Healthy Living', path: '/genre/Healthy-Living', icon: <FaHeart /> },
  { name: 'Sosial', path: '/genre/Sosial', icon: <FaPeopleCarry /> },
  { name: 'Pendidikan Kewarganegaraan', path: '/genre/Pendidikan-Kewarganegaraan', icon: <FaUser /> },
  { name: 'Cerita Rakyat Kaltim', path: '/genre/Cerita-Rakyat-Kaltim', icon: <FaFrown /> },
  { name: 'Seni Budaya', path: '/genre/Seni-Budaya', icon: <FaTheaterMasks /> },
  { name: 'Prakarya', path: '/genre/Prakarya', icon: <FaTasks /> },
  { name: 'Ensiklopedia Umum', path: '/genre/Ensiklopedia-Umum', icon: <FaAtlas /> },
  { name: 'Buku Fiksi', path: '/genre/Fiction', icon: <FaBookOpen /> },
];

const BookPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Include the Navbar here */}
      <header className="relative">
        <img src={headerImage} alt="Header" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-6">
          <h1 className="text-4xl font-bold mb-2">Book Genres</h1>
          <p className="text-lg">Explore our diverse collection of book genres</p>
        </div>
      </header>
      <main className="flex-grow p-6 bg-gray-100">
        <section className="container mx-auto px-4">
          <h4 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            Pilih subjek yang menarik bagi Anda
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {genres.map((genre) => (
              <Link
                key={genre.name}
                to={genre.path}
                className="bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center p-6 text-center text-gray-800 no-underline hover:bg-gray-50 transition-colors w-60 md:w-72 lg:w-80"
              >
                <div className="text-4xl mb-4">{genre.icon}</div>
                <h3 className="text-lg font-semibold">{genre.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookPage;
