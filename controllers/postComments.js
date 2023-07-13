import asyncHandler from "express-async-handler";
import Likes from "../models/likesModel.js";

const postComments = asyncHandler(async (req, res) => {
  const { title, comment } = req.body;
  const blogPost = await Likes.findOne({ title: title });
  blogPost.comments.push(comment);
  await blogPost.save();
  return res.sendStatus(200);
});

export default postComments;
