import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useEffect, useState} from  "react"
import { MovieCard } from './Component/Movie/MovieCard';
import Search from './Component/Movie/Search';

function App() {
  const [movie,setmovie]=useState([])
  const getmovie=async ()=>{
    try{
      const {data}= await axios.get("https://movies-app.prakashsakari.repl.co/api/movies")
      // console.log(data)
      setmovie(data)

    }catch(err){
      console.log(err)

    }
  }
 
  useEffect(()=>{
        getmovie()
  },[])
  ///internal styling/////////////////////
  const header={
    textAlign:"center",
    marginTop:"10px",
   
  }
  
  return (
    <div className="App">
      <h1 style={header}>Movie Website</h1>
      <div>
      
    </div>
      <main className='main'>
      {
            movie && movie.length>0 && movie.map((movie)=><MovieCard key={movie.id} movie={movie}/>)
          }
        
      </main>
          
          
    </div>
  );
}

export default App;
