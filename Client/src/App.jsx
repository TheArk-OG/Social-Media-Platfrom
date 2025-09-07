import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const response = await fetch("http://localhost:8080/get_posts");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  async function createPost(e) {
    e.preventDefault();
    if (!text) return;
    const response = await fetch("http://localhost:8080/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text }),
    });
    const newPost = await response.json();
    setPosts([newPost, ...posts]);
    setText("");
  }

  async function likePost(id) {
    const response = await fetch(`http://localhost:8080/like/${id}`);
    const updatedPost = await response.json();
    setPosts(posts.map((p) => (p._id === id ? updatedPost : p)));
  }

  async function dislikePost(id) {
    const response = await fetch(`http://localhost:8080/dislike/${id}`);
    const updatedPost = await response.json();
    setPosts(posts.map((p) => (p._id === id ? updatedPost : p)));
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <form onSubmit={createPost}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Create</button>
      </form>
      {posts.length === 0 && <div>No posts yet</div>}
      {posts.map((post) => ( 
        <div key={post._id}>
          <hr />
          <p>{post.content}</p>
          <p>
            Likes: {post.likes || 0}{" "}
            <button onClick={() => likePost(post._id)}>Like</button>{" "}
            <button onClick={() => dislikePost(post._id)}>Dislike</button>
          </p>
          <small>{new Date(post.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
