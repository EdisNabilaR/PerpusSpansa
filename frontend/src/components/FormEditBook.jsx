import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const FormEditBook = () => {
  const [name, setName] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    const getBookById = async () =>{
      try {
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        setName(response.data.name);
        setPenerbit(response.data.penerbit);
      } catch (error){
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    }
    getBookById();
  },[id]);

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/books/${id}`, {
        name: name,
        penerbit: penerbit
      });
      navigate("/books");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-4">Books</h1>
      <h2 className="text-xl text-gray-300 mb-6">Update Book</h2>
      <div className="bg-gray-900 p-6 rounded-lg">
        <p className="text-red-500 text-center mb-4">{msg}</p>
        <form onSubmit={updateBook}>
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
            <label className="block text-gray-300 text-sm font-bold mb-2">Penerbit</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              value={penerbit}
              onChange={(e) => setPenerbit(e.target.value)}
              placeholder="Penerbit"
            />
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

export default FormEditBook;
