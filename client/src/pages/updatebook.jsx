import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
    const { id } = useParams();
    const [judul, setJudul] = useState('');
    const [penerbit, setPenerbit] = useState('');
    const [kategori, setKategori] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/book/${id}`)
            .then(res => {
                const book = res.data.data;
                setJudul(book.judul);
                setPenerbit(book.penerbit);
                setKategori(book.kategori);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:3000/updatebook/${id}`, { judul, penerbit, kategori });
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Book</h2>
                    <div className='mb-2'>
                        <label htmlFor='judul'>Judul</label>
                        <input type='text' id='judul' placeholder='Enter Book Name' className='form-control'
                            value={judul} onChange={e => setJudul(e.target.value)} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='penerbit'>Penerbit</label>
                        <input type='text' id='penerbit' placeholder='Enter Publisher Name' className='form-control'
                            value={penerbit} onChange={e => setPenerbit(e.target.value)} 
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='kategori'>Kategori</label>
                        <input type='text' id='kategori' placeholder='Enter Category Name' className='form-control' 
                            value={kategori} onChange={e => setKategori(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBook;
