import React, { useState } from "react";

const BookForm = () => {
  const [formData, setFormData] = useState({
    nis: "",
    fullName: "",
    username: "",
    password: "",
    class: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan formData, misalnya kirim ke backend atau simpan di state aplikasi
    console.log(formData);
    // Reset form setelah submit
    setFormData({
      nis: "",
      fullName: "",
      username: "",
      password: "",
      class: "",
      address: "",
    });
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
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nama Pengguna</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Kata Sandi</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="class" className="block text-sm font-medium text-gray-700">Kelas</label>
        <input
          type="text"
          id="class"
          name="class"
          value={formData.class}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full resize-none"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Simpan</button>
    </form>
  );
};

export default BookForm;
