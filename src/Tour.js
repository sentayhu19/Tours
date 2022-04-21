import React from "react";
import './Tour.css';
const Tour =({id,image,info,price,name})=>{
    return( <div className="tour-wrap">
        <p className="name"><b>{name}</b></p>
        {<img src={image} className="img" />}
        <p className="info">{info}</p>
        <p className="price">$ {price}</p>
        <button className="not">Not intersted</button>
        </div>
        );
}
export default Tour;