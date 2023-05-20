import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const port = 8080;


app.use(cors({
    origin: ['http://localhost:5174', 'http://localhost:5173'],
    credentials: true,
    
}));
app.use(express.json());
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());
app.use("/api/posts",postRoutes);
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

// app.get('/', (req,res) => {
//     res.send('Hello World!');
// })

 


app.listen(port, ()=>{
    console.log("Server is running")
})
