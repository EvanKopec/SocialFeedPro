import React, { useState } from 'react';






const CreatePost = (props) => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let  newPost = {
            name: name,
            message: message,
        };
        props.addNewPostProp(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="Name" value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type='Post' value={message} onChange={(event) => setMessage(event.target.value)}/>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatePost;