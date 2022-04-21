import React, {useState} from "react";
import './Tour.css';
import App from "./App";

const Tour =({id,image,info,price,name})=>{
    const [readMore, setReadMore] = useState(false);
    return( <div className="tour-wrap">
        <p className="name"><b>{name}</b></p>
        {<img src={image} className="img" />}
        <p className="info">{readMore? info :   `${info.substring(0,200)}...   `}<button id="readmore" onClick={()=>setReadMore(!readMore)}>{readMore ? ' Read Less': 'Read More'} </button></p>
        <p className="price">$ {price}</p>
        {/* onClick={App.removeCard} */}
        <button className="delete-btn" >Not intersted</button>
        </div>
        );
}
export default Tour;