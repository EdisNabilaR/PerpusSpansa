import express from "express";
import {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from "../controllers/Books.js";
import { adminOnly, verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/books',verifyUser, getBooks);
router.get('/books/:id',verifyUser, getBookById);
router.post('/books',verifyUser, adminOnly, createBook);
router.patch('/books/:id',verifyUser, updateBook);
router.delete('/books/:id',verifyUser, deleteBook);

export default router;