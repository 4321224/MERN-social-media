import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getPost, getPostId, likePost } from "../controllers/postController.js";

const router = express.Router();

router.use(verifyToken);
router.get("/", getPost);
router.get("/:userId/posts", getPostId);
router.patch("/:id/like", likePost);

export default router;
