import asyncHandler from "express-async-handler";
import Likes from "../models/likesModel.js";

const getLikes = asyncHandler(async (req, res) => {
  const { title } = req.query;
  const blogPost = await Likes.findOne({ title: title });
  if (!blogPost) {
    await Likes.create({
      title: title,
      likes: 0,
    });
    return res.status(200).json({
      likes: 0,
    });
  } else {
    return res.status(200).json({
      likes: blogPost.likes,
    });
  }
});

export default getLikes;
