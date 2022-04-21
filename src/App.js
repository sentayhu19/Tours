import Tours from "./Tours";
import React, {useState, useEffect} from "react";
import Loading from "./loading";

const url = 'https://course-api.com/react-tours-project';
function App() {
const [loading,setLoading] = useState(true);
const [tours, setTours] =  useState([]);

let removeCard =(id)=>{
  console.log("am called to remove");
  const newTours = tours.filters((tour) => tour.id != id);
  console.log("Tours: ",setTours);
 setTours(newTours);
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
setLoading(false);
  }
}
useEffect(()=>{
  console.log("useeffect fetched fron API", fetchToursData());
},[]);
if(loading){
  return( 
    <main>
      <Loading/>
    </main>
  );
}
  return (
    <main>
      <Tours tours={tours} />
      <footer>
        <p className="year">Tour  	&copy; 2022 All Rights reserved by Sentayhu</p>
      </footer>
    </main>  
  );
 
}

export default App;
