import Tours from "./Tours";
import React, {useState, useEffect} from "react";
import Loading from "./loading";

const url = 'https://course-api.com/react-tours-project';
function App() {
const [loading,setLoading] = useState(true);
const [tours, setTours] =  useState([]);

let removeCard =(id)=>{
  try{
  const newTours = tours.filter((tour) => tour.id !== id);
 setTours(newTours);
  }
  catch(err){
    document.getElementsByClassName('status').innerHTML="Error while geting data , please reload page";
  }
  }

const fetchToursData = async()=>{
  setLoading(true);
  try{
    const response = await fetch(url);
    const tours= await response.json();
    setLoading(false);
    setTours(tours);
    return tours;
  }catch(err){
document.getElementsByClassName('status').innerHTML="Error while geting data , please reload page";
  }
}
useEffect(()=>{
},[]);
if(loading){
  return( 
    <main>
      <Loading/>
    </main>
  );
}
if(tours.length===0){
  return(
    <div>
      <h2>Our Tours</h2>
      <h2>Tour List Empty to get Tours List click Refresh!</h2>
      <span className="status"></span>
      <button className="refresh" onClick={fetchToursData}>Refresh</button>
      <footer>
        <p className="year">Tour  	&copy; 2022 All Rights reserved [ Sentayhu ]</p>
      </footer>
    </div>
  )
}
  return (
    <main>
      <h2>Our Tours</h2>
      <span className="status"></span>
      <Tours tours={tours} removeCard={removeCard}/>
      <footer>
        <p className="year">Tour  	&copy; 2022 All Rights reserved [ Sentayhu ]</p>
      </footer>
    </main>  
  );
 
}

export default App;
