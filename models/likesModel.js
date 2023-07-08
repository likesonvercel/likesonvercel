import mongoose from "mongoose";

const likeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Likes = mongoose.model("Likes", likeSchema);

export default Likes;
