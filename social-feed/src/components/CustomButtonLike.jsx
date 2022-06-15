 import React, { useState } from 'react';
 import "./CustomButtonLike.css"
 

 const CustomButtonLike = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");


    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive")
        }
    }



    return ( 
        <div  className="buttonImage">
            <button className={buttonClass} onClick={handleClick}>{props.message}</button>
        </div>
     );
 }
  
 export default CustomButtonLike;