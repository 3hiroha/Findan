import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/posts.js";
import userRoutes from "./routes/posts.js";
const app = express();

app.use(express.json());
app.use("/api/posts",postRoutes);
app.use("/api/user",postRoutes);
app.use("/api/auth",postRoutes);

app.listen(8800, ()=>{
    console.log("Server is running")
})