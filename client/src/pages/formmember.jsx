import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormMember = () => {
  const [formData, setFormData] = useState({
    nis: "",
    nama: "",
    nomortelepon: "",
    alamat: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/formmember', formData)
      .then(res => {
        console.log(res);
        navigate('/'); 
      })
      .catch(err => console.error(err));
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
         pattern="[0-9]{10,12}"
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
      
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Simpan</button>
    </form>
  );
};

export default FormMember;
