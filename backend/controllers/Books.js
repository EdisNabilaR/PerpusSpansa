import Books from "../models/BookModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getBooks = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Books.findAll({
                attributes:['uuid','name','penerbit'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Books.findAll({
                attributes:['uuid','name','penerbit'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getBookById = async(req, res) =>{
    try {
        const book = await Books.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!book) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Books.findOne({
                attributes:['uuid','name','penerbit'],
                where:{
                    id: book.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Books.findOne({
                attributes:['uuid','name','penerbit'],
                where:{
                    [Op.and]:[{id: book.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBook= async(req, res) =>{
    const {name, penerbit} = req.body;
    try {
        await Books.create({
            name: name,
            penerbit: penerbit,
            userId: req.userId
        });
        res.status(201).json({msg: "Book Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateBook= async(req, res) =>{
    try {
        const book = await Books.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!book) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {name, penerbit} = req.body;
        if(req.role === "admin"){
            await Books.update({name, penerbit},{
                where:{
                    id: book.id
                }
            });
        }else{
            if(req.userId !== book.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Books.update({name, penerbit},{
                where:{
                    [Op.and]:[{id: book.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Book updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteBook = async(req, res) =>{
    try {
        const book = await Books.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!book) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {name, penerbit} = req.body;
        if(req.role === "admin"){
            await Books.destroy({
                where:{
                    id: book.id
                }
            });
        }else{
            if(req.userId !== book.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Books.destroy({
                where:{
                    [Op.and]:[{id: book.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Book deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}