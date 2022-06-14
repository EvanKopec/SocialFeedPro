import React, {useState} from 'react';
import CreatePost from './components/CreatePost';
import NavBar from './components/NavBar';
import PostMapper from './components/PostMapper';

function App() {
  // Stateful Varibales
  const [posts, setPosts] = useState([
    {
        name: "Jake",
        message: "I like pizza for dinner!",
        isLiked: false,
        isDisliked: false,
        id: 1
    },
    {
        name: "Evan",
        message: "I like pizza for dinner!",
        isLiked: false,
        isDisliked: false,
        id: 2
    },
    {
        name: "JC",
        message: "I like pizza for dinner!",
        isLiked: false,
        isDisliked: false,
        id: 3
    },
  ])

  // Return jsx
  return (
    <div >
      <NavBar />
      <CreatePost />
      <PostMapper array={posts} />
      
    </div>
  );
}

export default App;
