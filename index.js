import express from "express";
import dotenv from "dotenv";
import path from "path";
import updateLikes from "./controllers/updateLikes.js";
import getLikes from "./controllers/getLikes.js";

// basic configurations
dotenv.config();
const app = express();

const router = express.Router();
router.route("/").get(getLikes);
router.route("/").post(updateLikes);

// controllers
app.use(express.json());
app.use("/api", router);

// ------------------ DEPLOYMENT CONFIGURATIONS ------------------
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}
// ------------------ DEPLOYMENT CONFIGURATIONS END ------------------

// port configurations
const PORT = process.env.PORT || 2002;

// server configurations
app.listen(PORT);
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
