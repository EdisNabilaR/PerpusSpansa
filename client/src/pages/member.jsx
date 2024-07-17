import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Member = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/member')
            .then(res => {
                console.log("API Response:", res.data); 
                setMembers(res.data.data); 
            })
            .catch(err => console.error("API Error:", err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/member/${id}`);
            setMembers(members.filter(member => member.id !== id));
        } catch (err) {
            console.log("Delete Error:", err);
        }
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-75 bg-white rounded p-4 shadow'>
                <div className="d-flex justify-content-between mb-4">
                    <h2>Data Member</h2>
                    <Link to="/data-anggota" className='btn btn-success'>Add +</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>NIS</th>
                            <th>Nama Lengkap</th>
                            <th>Nomor Telepon</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, i) => (
                            <tr key={i}>
                                <td>{member.nis}</td>
                                <td>{member.nama}</td>
                                <td>{member.nomortelepon}</td>
                                <td>{member.alamat}</td>
                               
                                <td>
                                    <Link to={`/updatemember/${member.id}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={() => handleDelete(member.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Member;
