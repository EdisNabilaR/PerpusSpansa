import React from "react";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
 
  const totalAnggota = 120;
  const totalBuku = 500;
  const bukuDipinjam = 80;
  const bukuDikembalikan = 420;

  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Total Anggota</h2>
            <p className="text-xl">{totalAnggota}</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Total Buku</h2>
            <p className="text-xl">{totalBuku}</p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Buku Dipinjam</h2>
            <p className="text-xl">{bukuDipinjam}</p>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Buku Dikembalikan</h2>
            <p className="text-xl">{bukuDikembalikan}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
