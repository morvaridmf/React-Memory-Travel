import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postsRoutes from "./routes/posts.js";

const app = express();


// posts gonna be prefix url 
app.use("/posts", postsRoutes);

app.use(bodyParser.json({limit: "300mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "300mb", extended: true}))
app.use(cors())

// mongodb to connect to db
const CONNECTION_URL = "mongodb+srv://React-memory:memory1234@cluster0.p8v5tku.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then (()=> app.listen(PORT, ()=> console.log(`server is running on port: ${PORT}`)))
.catch((error)=> console.log(error.message))


