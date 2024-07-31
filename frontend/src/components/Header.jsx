<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "../features/authSlice";

const Header = ({ open }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

<<<<<<< HEAD
  const [bgColor, setBgColor] = useState("#0e0e0e");

  const handleBgColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`flex items-center justify-between p-3 duration-500`} style={{ backgroundColor: bgColor }}>
      <h1 className="text-white text-xl">PERPUSTAKAAN CAHAYA SMPN 1 BPP</h1>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button className="w-6 h-6 rounded-full bg-[#0e0e0e]" onClick={() => handleBgColorChange("#0e0e0e")}></button>
          <button className="w-6 h-6 rounded-full bg-[#1e3a8a]" onClick={() => handleBgColorChange("#1e3a8a")}></button>
          <button className="w-6 h-6 rounded-full bg-[#047857]" onClick={() => handleBgColorChange("#047857")}></button>
          <button className="w-6 h-6 rounded-full bg-[#b91c1c]" onClick={() => handleBgColorChange("#b91c1c")}></button>
        </div>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md">Logout</button>
      </div>
=======

  return (
    <div className={`flex items-center justify-between bg-[#0e0e0e] p-3 duration-500`}>
      <h1 className="text-white text-xl">PERPUSTAKAAN CAHAYA SMPN 1 BPP</h1>
      <div className="flex items-center bg-gray-800 p-2 rounded-md">
        <FiSearch size={20} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-white outline-none"
        />
      </div>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md">Logout</button>
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
    </div>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
