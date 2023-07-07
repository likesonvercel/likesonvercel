import express from "express";
import dotenv from "dotenv";
import path from "path";
import updateLikes from "./controllers/updateLikes.js";
import getLikes from "./controllers/getLikes.js";
import cors from "cors"

// basic configurations
dotenv.config();
const app = express();
app.use(cors);

const router = express.Router();
router.route("/").get(getLikes);
router.route("/").post(updateLikes);

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
