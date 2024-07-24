import React from "react";
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
    </div>
  );
};

export default Header;
