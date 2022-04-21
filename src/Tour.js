import React from "react";
import './Tour.css';
const Tour =({id,image,info,price,name})=>{
    return( <div className="tour-wrap">
        <p className="name">{name}</p>
        {<img src={image} className="img" />}
        <p className="info">{info}</p>
        <p className="price">$ {price}</p>
        </div>
        );
}
export default Tour;