import express from "express";
import {
  updateMember,
  deleteMember
} from "../controllers/Members.js"; 

const router = express.Router();

router.patch('/members/:id', updateMember);
router.delete('/members/:id', deleteMember);

export default router;
