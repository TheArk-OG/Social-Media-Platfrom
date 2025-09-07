const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/database1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const postSchema = new mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
});

const Post = mongoose.model("Post", postSchema);

app.get("/get_posts", async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
  res.json(posts);
});

app.post("/post", async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: "Content required" });
  const newPost = new Post({ content });
  await newPost.save();
  res.json(newPost);
});

app.get("/like/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true }
  );
  res.json(post);
});

app.get("/dislike/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndUpdate(
    id,
    { $inc: { likes: -1 } },
    { new: true }
  );
  res.json(post);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
