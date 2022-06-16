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
        id: 1,
        date: '06/16/2022'
    },
  ])

  function addNewPost(newPost){
    let tempPosts = [newPost, ...posts];
    setPosts(tempPosts);
  }



  // Return jsx
  return (
    <div>
      <div>
      <NavBar />
      </div>
      <div className='create-post'>
      <CreatePost addNewPostProp={addNewPost}/>
      </div>
      <div>
      <PostMapper array={posts} />
      </div>
    </div>
  );
}

export default App;
