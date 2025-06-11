import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [city, setcity]=useState("")
  let [wdata, setwdata]=useState()
  let [isloading, setisloading]=useState(false)

  let getdata=(event)=>{
    setisloading(true)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
  .then((res)=>res.json())
  .then((finaldata)=>{
    console.log(finaldata, finaldata.cod)
    if(finaldata.cod==404){
      setwdata(undefined)
    }
    else{
      setwdata(finaldata)
    }
    setisloading(false)
    })
    

   event.preventDefault();
   setcity("")
  }

  return (
       <div className='outer'>
        <div className='inner'>
          <h1 className='head'>Simple Wheather App</h1>
        
        <form  onSubmit={getdata}>
          <input type='text' className='input' value={city} onChange={(event)=>setcity(event.target.value)} placeholder='City Name'/> 
          
            <button className='submit'>Submit</button>
        </form>  

        <div className='below mt-[40px] p-[25px] relative'>

         <img src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1258.gif' width={"150px"} className={`gif position-absolute`} hidden={isloading ? "": "hidden"} />

          {wdata!==undefined ? 
           <>
            <h3>{wdata.name}   <span>{wdata.sys.country}</span>  </h3>
            <h2>{wdata.main.temp}</h2>
            <img src={`http://openweathermap.org/img/w/${wdata.weather[0].icon}.png`}/>
            <p>{wdata.weather[0].description}</p>
           </>  :
           "No data found"}

          

        </div>

        </div>

       </div>
  );
}

export default App;
