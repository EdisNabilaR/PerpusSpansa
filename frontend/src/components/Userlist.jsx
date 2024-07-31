import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import { FaSearch } from 'react-icons/fa';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
=======

const Userlist = () => {
  const [users, setUsers] = useState([]);
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063

  useEffect(() => {
    getUsers();
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) || 
        user.role.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

=======
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
  const getUsers = async () => {
    const response = await axios.get('http://localhost:3000/users');
    setUsers(response.data);
  }

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      getUsers();
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <h2 className="text-xl mb-6">List Of Users</h2>
<<<<<<< HEAD
      <div className="mb-4 flex justify-between items-center">
=======
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
      <Link 
        to="/users/add" 
        className="inline-block px-6 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add New
      </Link>
<<<<<<< HEAD
      <div className="flex items-center border rounded w-full max-w-xs">
          <input
            type="text"
            placeholder="Search for users...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border-none focus:outline-none w-full"
          />
          <FaSearch className="text-gray-200 mx-2" />
        </div>
      </div>
=======
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/12 px-4 py-2">No</th>
              <th className="w-2/12 px-4 py-2">Name</th>
              <th className="w-3/12 px-4 py-2">Email</th>
              <th className="w-2/12 px-4 py-2">Role</th>
              <th className="w-2/12 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
            {filteredUsers.map((user, index) => (
=======
            {users.map((user, index) => (
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
              <tr key={user.uuid} className="bg-gray-100 border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <Link to={`/users/edit/${user.uuid}`} className="text-blue-500 hover:underline">Edit</Link>
                  <button onClick={() => deleteUser(user.uuid)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userlist;
