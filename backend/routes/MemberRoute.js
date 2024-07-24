import express from "express";
import {
    getAnggotas,
    getAnggotaById,
    createAnggota,
    updateAnggota,
    deleteAnggota
} from "../controllers/Members.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/anggota', verifyUser, adminOnly, getAnggotas);
router.get('/anggota/:id', verifyUser, adminOnly, getAnggotaById);
router.post('/anggota', verifyUser, adminOnly, createAnggota);
router.patch('/anggota/:id', verifyUser, adminOnly, updateAnggota);
router.delete('/anggota/:id', verifyUser, adminOnly, deleteAnggota);

export default router;
