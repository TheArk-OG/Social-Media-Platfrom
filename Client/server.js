const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongoodb://localhost:27017/testDatabase", {
    useNewUrlParse: true,
    useUnifiedTopology: true,
}
);

const postSchema = new mongoose.Schema({
    content: String,
    data: {type:DataTransfer, dafault: Data.now},
    likes: {type:Number,default:0},
});

app.get("/get_posts", async(req, res)=>{
    const posts= await Post.find().sort({ date: -1});
});

app.post("post", async(req, res)=>)

const Post = mongoose.model("Post", postSchema);

