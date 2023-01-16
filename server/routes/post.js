import express from "express";
import { verifyToken } from "../middleware/auth";
import { createPost, getPost, getPostId } from "../controllers/postController";

const router = express.Router();

router.use(verifyToken);
router.get("/", getPost);
router.post("/:userId", createPost);
router.get("/:userId/posts", getPostId);

export default router;
