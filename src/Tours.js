import React from "react";
import Tour from "./Tour";
const Tours=({ tours, removeCard }) => {
    return (
    <section>
        <div>
            {tours.map((tour)=>{
                return <Tour key={tour.id} {...tour} removeCard={removeCard}></Tour>;
            })}
        </div>
    </section>);
}
export default Tours;