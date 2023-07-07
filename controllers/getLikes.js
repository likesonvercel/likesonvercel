import asyncHandler from "express-async-handler";
import blogPosts from "../data.js";

const getLikes = asyncHandler(async (req, res) => {
  const { title } = req.params;
  let { likes } = blogPosts.find((post) => post.title === title);
  return res.json({ likes });
});

export default getLikes;
