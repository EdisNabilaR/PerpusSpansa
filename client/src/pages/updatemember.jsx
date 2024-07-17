import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const UpdateMember = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const [formData, setFormData] = useState({
    nis: "",
    nama: "",
    nomortelepon: "",
    alamat: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/member/${id}`)
      .then(res => {
        const member = res.data.data;
        setFormData({
          nis: member.nis,
          nama: member.nama,
          nomortelepon: member.nomortelepon,
          alamat: member.alamat
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/updatemember/${id}`, formData);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="nis" className="block text-sm font-medium text-gray-700">NIS</label>
        <input
          type="text"
          id="nis"
          name="nis"
          value={formData.nis}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nomortelepon" className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
        <input
          type="text"
          id="nomortelepon"
          name="nomortelepon"
          value={formData.nomortelepon}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
          pattern="[0-9]{10,13}" // Menyesuaikan panjang nomor telepon
        />
      </div>
      <div className="mb-4">
        <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat</label>
        <input
          type="text"
          id="alamat"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Update</button>
    </form>
  );
};

export default UpdateMember;
