import React from 'react';
import Navbar from '../components/navbar';

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Selamat datang di Homepage</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus euismod justo, sit amet molestie
              velit fringilla id. Sed id ipsum volutpat, ultricies enim in, tempor nisi.
            </p>
          </div>
          <div>
            <img src="/path-to-your-image.jpg" alt="Deskripsi gambar" className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Section Lain</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus euismod justo, sit amet molestie
            velit fringilla id. Sed id ipsum volutpat, ultricies enim in, tempor nisi.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
