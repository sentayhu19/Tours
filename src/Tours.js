import React from "react";
import Tour from "./Tour";
const Tours=({ tours }) => {
    return (
    <section>
        <h2>Our Tours</h2>
        <div>
            {tours.map((tour)=>{
                return <Tour key={tour.id} {...tour}></Tour>;
            })}
        </div>
    </section>);
}
export default Tours;