import React from 'react';
import CustomButtonLike from './CustomButtonLike';
import CustomButtonDislike from './CustomButtonDislike';


const Post = ({post}) => {


    
    return ( 
        <div>
            <h3>{post.name}</h3>
            <p>{post.message}</p>
            <CustomButtonLike message="Like" />
            <CustomButtonDislike message= "Dislike"/>
        </div>
     );
}
 
export default Post;