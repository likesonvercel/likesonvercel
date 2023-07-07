import asyncHandler from "express-async-handler";
import blogPosts from "../data.js";
import replace from "replace-in-file";

const updateLikes = asyncHandler(async (req, res) => {
  let { title } = req.body;
  try {
    let { likes } = blogPosts.find((post) => post.title === title);
    const options = {
      files: "data.js",
      from: new RegExp(`(title: "${title}",\\s*likes: )\\d+`),
      to: `$1${likes + 1}`,
    };
    await replace(options);
  } catch (err) {
    return res.sendStatus(500);
  }
  return res.sendStatus(200);
});

export default updateLikes;
