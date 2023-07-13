import express from "express";
import dotenv from "dotenv";
import getLikes from "./controllers/getLikes.js";
import updateLikes from "./controllers/updateLikes.js";
import cors from "cors";
import connectDB from "./config/db.js";
import postComments from "./controllers/postComments.js";

// basic configurations
dotenv.config();
const app = express();
app.use(cors());

// database configurations
await connectDB();

const router = express.Router();
router.route("/").get(getLikes);
router.route("/").post(updateLikes);
router.route("/comment").post(postComments);

// controllers
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Vulnurable to love mate, lmao");
});

// port configurations
const PORT = process.env.PORT || 2002;

// server configurations
app.listen(PORT);
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
