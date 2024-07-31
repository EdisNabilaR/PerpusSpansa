import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    kelas: "",
    alamat: "",
    nomorTelpon: ""
  });

  const [msg, setMsg] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile");
        setProfile(response.data);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };

    getProfile();
  }, []);

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-4">Profile Page</h1>
      <div className="bg-gray-900 p-6 rounded-lg">
        {msg && <p className="text-red-500 text-center mb-4">{msg}</p>}
        <div className="mb-4">
          <h2 className="text-xl text-gray-300 mb-2">Nama:</h2>
          <p className="text-white">{profile.name}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-gray-300 mb-2">Kelas:</h2>
          <p className="text-white">{profile.kelas}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-gray-300 mb-2">Alamat:</h2>
          <p className="text-white">{profile.alamat}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-gray-300 mb-2">Nomor Telepon:</h2>
          <p className="text-white">{profile.nomorTelpon}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
