import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/book')
            .then(res => {
                console.log("API Response:", res.data); // Debugging response
                setBooks(res.data.data); // Mengakses data dengan benar
            })
            .catch(err => console.error("API Error:", err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/book/${id}`);
            setBooks(books.filter(book => book.id !== id));
        } catch (err) {
            console.log("Delete Error:", err);
        }
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-75 bg-white rounded p-4 shadow'>
                <div className="d-flex justify-content-between mb-4">
                    <h2>Data Buku</h2>
                    <Link to="/formbook" className='btn btn-success'>Add +</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Judul</th>
                            <th>Penerbit</th>
                            <th>Kategori</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, i) => (
                            <tr key={i}>
                                <td>{book.judul}</td>
                                <td>{book.penerbit}</td>
                                <td>{book.kategori}</td>
                                <td>
                                    <Link to={`/updatebook/${book.id}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={() => handleDelete(book.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Book;
