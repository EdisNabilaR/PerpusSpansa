import React, { useState } from "react";
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
    </div>
  );
};

export default Header;