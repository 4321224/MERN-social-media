import Post from "../models/Post";

export const getPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
