import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/daftar", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Registrasi berhasil! Harap cek email untuk link verifikasi.");
      } else {
        const responseData = await response.json();
        setError(responseData.msg || "Registrasi gagal. Silakan coba lagi.");
      }
    } catch (error) {
      console.error(error);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-lg w-full">
        <form className="w-full p-8" onSubmit={handleSubmit}>
          <p className="text-xl text-gray-600 text-center">
            Selamat Datang di Perpustakaan Cahaya SMPN 1 Balikpapan
          </p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
            >
              Register
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
          <div className="mt-4 flex items-center w-full text-center">
          <Link to="/" className="text-xs text-gray-500 capitalize text-center w-full">
            Sudah memiliki akun?
            <span className="text-blue-700"> Sign In</span>
          </Link>
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default Register;
