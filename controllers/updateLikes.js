import asyncHandler from "express-async-handler";
import Likes from "../models/likesModel.js";

const updateLikes = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const blogPost = await Likes.findOne({ title: title });
  blogPost.likes += 1;
  await blogPost.save();
  return res.status(200).json({
    likes: blogPost.likes,
  });
});

export default updateLikes;
