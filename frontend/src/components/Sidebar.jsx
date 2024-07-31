import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { LogOut, reset } from "../features/authSlice";
import { GrMenu } from "react-icons/gr";
import { IoLibrary } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { FiMessageSquare, FiFolder } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
<<<<<<< HEAD
import { FaChevronRight, FaChevronDown, FaPersonBooth, FaUser } from "react-icons/fa";
=======
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  const [open, setOpen] = useState(true);
  const [dropdowns, setDropdowns] = useState({
    library: false,
    books: false,
  });

<<<<<<< HEAD
  const [bgColor, setBgColor] = useState("#0e0e0e");

=======
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
  const toggleDropdown = (menu) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

<<<<<<< HEAD
  const handleBgColorChange = (color) => {
    setBgColor(color);
  };

  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    {name: "User", link: "/profile", icon: FaUser },
=======
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
    {
      name: "Data Perpustakaan",
      icon: IoLibrary,
      hasDropdown: true,
      dropdownKey: "library",
      subMenus: [
        { name: "Data Anggota", link: "/data-anggota" },
        { name: "Data Penerbit", link: "/data-penerbit" },
        { name: "Data Admin", link: "/data-admin" },
        { name: "Data Peminjaman", link: "/data-peminjaman" },
      ],
    },
    {
      name: "Data Buku",
      icon: FiMessageSquare,
      hasDropdown: true,
      dropdownKey: "books",
      subMenus: [
        { name: "Buku", link: "/books" },
        { name: "Form Buku", link: "/books/add" },
<<<<<<< HEAD
=======
        { name: "Kategori Buku", link: "/kategori-buku" },
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
      ],
    },
    user && user.role === "admin" && { name: "Users", link: "/users", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/files", icon: FiFolder },
  ].filter(Boolean); // Filter out any falsey values

  return (
<<<<<<< HEAD
    <div className={`min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`} style={{ backgroundColor: bgColor }}>
=======
    <div className={`bg-[#0e0e0e] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
      <div className="py-3 flex justify-end">
        <GrMenu size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
      </div>
      <div className="mt-4 flex flex-col gap-4 flex-1">
        {menus.map((menu, i) => (
          <div key={i} className="relative group">
            <Link to={menu.link || "#"} className="block">
              <div
                className={`${menu.margin && "mt-5"} flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md cursor-pointer`}
                onClick={() => menu.hasDropdown ? toggleDropdown(menu.dropdownKey) : null}
              >
                {React.createElement(menu.icon, { size: "20" })}
                <span className={`${!open && "hidden"} transition-all duration-300 flex-1`}>
                  {menu.name}
                </span>
                {menu.hasDropdown && (
                  React.createElement(dropdowns[menu.dropdownKey] ? FaChevronDown : FaChevronRight, { size: "16" })
                )}
              </div>
            </Link>
            {menu.hasDropdown && dropdowns[menu.dropdownKey] && (
              <div className={`ml-8 mt-2 space-y-2 ${!open && "hidden"}`}>
                {menu.subMenus.map((subMenu, j) => (
                  <Link key={j} to={subMenu.link} className="block text-sm text-gray-400 hover:text-gray-100">
                    {subMenu.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
<<<<<<< HEAD
      <div className="mt-4">
        <h3 className={`${!open && "hidden"} text-gray-400 mb-2`}>Change Background</h3>
        <div className="flex gap-2 justify-center">
          <button className="w-6 h-6 rounded-full bg-[#0e0e0e]" onClick={() => handleBgColorChange("#0e0e0e")}></button>
          <button className="w-6 h-6 rounded-full bg-[#1e3a8a]" onClick={() => handleBgColorChange("#1e3a8a")}></button>
          <button className="w-6 h-6 rounded-full bg-[#047857]" onClick={() => handleBgColorChange("#047857")}></button>
          <button className="w-6 h-6 rounded-full bg-[#b91c1c]" onClick={() => handleBgColorChange("#b91c1c")}></button>
        </div>
      </div>
=======
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
      <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
