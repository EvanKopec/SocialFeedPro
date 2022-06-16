import React, { useState } from 'react';






const CreatePost = (props) => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let  newPost = {
            name: name,
            message: message,
            date: date,
        };
        props.addNewPostProp(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div><label>Name</label>
            <input type="Name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
            <label>Post</label>
            <input type='Post' value={message} onChange={(event) => setMessage(event.target.value)}/>
            </div>
            <div>
                <label>Date</label>
                <input type='Date' value={date} onChange={(event) => setDate(event.target.value)} />
            </div>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatePost;