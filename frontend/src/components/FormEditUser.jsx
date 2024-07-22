import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        console.log("Data user: ", response.data); // Tambahkan log ini
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-4">Users</h1>
      <h2 className="text-xl text-gray-300 mb-6">Update User</h2>
      <div className="bg-gray-900 p-6 rounded-lg">
        <p className="text-red-500 text-center mb-4">{msg}</p>
        <form onSubmit={updateUser}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="******"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Role</label>
            <select
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditUser;
