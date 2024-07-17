import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  const [totalBuku, setTotalBuku] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total buku
        const bukuRes = await axios.get("http://localhost:3000/book");
        setTotalBuku(bukuRes.data.total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Total Buku</h2>
            <p className="text-xl">{totalBuku}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
