import React from 'react';
import './CustomButtonLike.css'
import { useState } from 'react';



const Post = ({post}) => {

    const [postStatus, setPostStatus] = useState("none")


    const handleClick =(status)=>{
        if(status === "Like"){
            setPostStatus("liked")
        }
        else{
            setPostStatus("disliked")
        }
    }



 
    return ( 
        <div>
            <h3>{post.name}</h3>
            <p>{post.message}</p>
            <div>
                {postStatus === "none" ? 
                <div>
                <button className="inactive" onClick={() =>handleClick("Like")}>Like</button>
                <button className="inactive" onClick={() =>handleClick("Dislike")}>Dislike</button>
                </div>
                :
                postStatus === "liked" ?
                <div>
                <button className="active" onClick={() =>handleClick("Like")}>Like</button>
                <button className="inactive" onClick={() =>handleClick("Dislike")}>Dislike</button>
                </div>
                :
                <div>
                <button className="inactive" onClick={() =>handleClick("Like")}>Like</button>
                <button className="activated" onClick={() =>handleClick("Dislike")}>Dislike</button>
                </div>
        }
            
            </div>
            
            
        </div>
     );
}
 
export default Post;


