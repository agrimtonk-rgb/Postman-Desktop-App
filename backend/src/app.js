import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

app.use(express.json());

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Health check route
app.get("/", (req, res) => {
    res.json({ message: "Server is running smoothly!" });
});

export default app;

