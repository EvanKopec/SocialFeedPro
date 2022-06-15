import React, { useState } from 'react';
import "./CustomButtonLike.css"


const CustomButtonDislike = (props) => {
   const [buttonClass, setButtonClass] = useState("inactive");


   function handleClickDislike(){
       if(buttonClass === "inactive"){
           setButtonClass("activated");
       }
       else{
           setButtonClass("inactive")
       }
   }



   return ( 
       <div className="buttonImage">
           <button className={buttonClass} onClick={handleClickDislike}>{props.message}</button>
       </div>
    );
}
 
export default CustomButtonDislike;