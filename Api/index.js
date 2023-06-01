import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import multer from "multer";

const app = express();
const port = 8080;


app.use(cors({
    origin: ['http://localhost:5174', 'http://localhost:5173'],
    credentials: true,
    
}));
app.use(express.json());
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

// stroage import from website by clicking add
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/findan/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    const file = req.file;
    res.status(200).json(file.filename);
  })

  

app.use("/api/posts",postRoutes);
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);




app.get('/', (req,res) => {
    res.send('Hello World!');
})

 


app.listen(port, ()=>{
    console.log("Server is running")
})
