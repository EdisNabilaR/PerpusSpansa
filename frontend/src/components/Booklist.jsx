import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Booklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get('http://localhost:3000/books');
    setBooks(response.data);
  }

  const deleteBook = async (bookId) => {
    await axios.delete(`http://localhost:3000/books/${bookId}`);
    getBooks();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <h2 className="text-xl mb-6">List Of Books</h2>
      <Link 
        to="/books/add" 
        className="inline-block px-6 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add New
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/12 px-4 py-2">No</th>
              <th className="w-2/12 px-4 py-2">Book Name</th>
              <th className="w-3/12 px-4 py-2">Penerbit</th>
              <th className="w-2/12 px-4 py-2">Created By</th>
              <th className="w-2/12 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id} className="bg-gray-100 border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{book.name}</td>
                <td className="px-4 py-2">{book.penerbit}</td>
                <td className="px-4 py-2">{book.user.name}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <Link to={`/books/edit/${book.uuid}`} className="text-blue-500 hover:underline">Edit</Link>
                  <button onClick={() => deleteBook(book.uuid)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booklist;
