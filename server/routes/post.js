import express from "express";
import { verifyToken } from "../middleware/auth";
import {
 
  getPost,
  getPostId,
  likePost,
} from "../controllers/postController";

const router = express.Router();

router.use(verifyToken);
router.get("/", getPost);
router.get("/:userId/posts", getPostId);
router.patch("/:id/like", likePost);

export default router;
