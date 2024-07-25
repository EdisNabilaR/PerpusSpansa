import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';

const Booklist = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);


  useEffect(() => {
    getBooks();
  }, []);


  useEffect(() => {
    setFilteredBooks(
      books.filter(book =>
        book.name.toLowerCase().includes(search.toLowerCase()) || 
        book.penerbit.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, books]);

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
      <div className="mb-4 flex justify-between items-center">
        <Link 
          to="/books/add" 
          className="inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add New
        </Link>
        <div className="flex items-center border rounded w-full max-w-xs">
          <input
            type="text"
            placeholder="Search for books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border-none focus:outline-none w-full"
          />
          <FaSearch className="text-gray-200 mx-2" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/12 px-4 py-2">No</th>
              <th className="w-2/12 px-4 py-2">Book Name</th>
              <th className="w-2/12 px-4 py-2">Pengarang</th>
              <th className="w-2/12 px-4 py-2">Penerbit</th>
              <th className="w-2/12 px-4 py-2">ISBN</th>
              <th className="w-2/12 px-4 py-2">Kategori</th>
              <th className="w-2/12 px-4 py-2">Sumber</th>
              <th className="w-2/12 px-4 py-2">No Induk</th>
              <th className="w-2/12 px-4 py-2">No Pengenal</th>
              <th className="w-2/12 px-4 py-2">Bahasa</th>
              <th className="w-2/12 px-4 py-2">Link</th>
              <th className="w-2/12 px-4 py-2">Created By</th>
              <th className="w-2/12 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, index) => (
              <tr key={book.id} className="bg-gray-100 border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{book.name}</td>
                <td className="px-4 py-2">{book.pengarang}</td>
                <td className="px-4 py-2">{book.penerbit}</td>
                <td className="px-4 py-2">{book.isbn}</td>
                <td className="px-4 py-2">{book.kategori}</td>
                <td className="px-4 py-2">{book.sumber}</td>
                <td className="px-4 py-2">{book.noinduk}</td>
                <td className="px-4 py-2">{book.nopengenal}</td>
                <td className="px-4 py-2">{book.bahasa}</td>
                <td className="px-4 py-2">
                  {book.link ? (
                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      Buka Link
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
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