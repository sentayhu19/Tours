import React from "react";
import './Tour.css';
const Tour =({id,image,info,price,name})=>{
    return( <div><p>{name}</p>{<img src={image} />}{info}{price}</div>);
}
export default Tour;