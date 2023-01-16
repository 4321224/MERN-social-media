import express from "express";
import { verifyToken } from "../middleware/auth";
import { getPost } from "../controllers/postController";

const router = express.Router();

router.use(verifyToken);
router.get("/", getPost);

export default router;
