import React, { useState } from 'react'
import './Navheader.css'

const Navheader = () => {

  const d = new Date();
  const [today,setToday] = useState (new Date()) 
  console.log(today)

  return (
    <>
    <div className='container-fluid d-flex justify-content-start align-items-center flex-column header'>

       <div className="container-fluid d-xl-flex justify-content-xl-start mb-5 mt-5 align-items-center navigation">
            <div className="container-fluid d-flex justify-content-xl-start text-light logo">
              {/* <img src="../../components/hotel.jpg" alt="" className="img-fluid" />  */}
              <span className='text-light '>ADVENTURE</span> 
            </div>
            <div className="text-light container-fluid d-flex gap-4  justify-content-xl-center sidebar">
              <a href=""><span>Explore</span></a>
              <a href="">Book</a>
              <a href="">Licence</a>
              <a href="">Sign up</a>
            </div>
            <div className="container-fluid text-center d-flex  justify-content-xl-end align-items-xl-end bookContainer ">
              <button id='book' className='btn'>Book Now</button>
            </div>
       </div>

       <div className="container-fluid d-flex text-center mt-3 mb-5 justify-content-center align-items-center flex-column">
              <p className='lead mt-5'>Simple - Unique - Friendly</p>
              <h4 id='title' className='text-light mt-3 mb-4'>Make Yourself Home <br/>in Out <span id="hotel">Hotel.</span></h4>
       </div>
       
    </div>
     
    <div className="container-fluid  d-flex gap-2 justify-content-md-between align-items-md-center checkin">
        <div className=" d-flex" >
            <img className='img-fluid m-2' id='checkin' 
            src={require("../../assets/checkin.png")} alt="checkin" /> 
             <p className='mt-2'>Check-In<br/> <span>Check out</span></p>
            
        </div>
        <div className="d-flex ">
            <img className='img-fluid m-2' id='checkin' 
            src={require("../../assets/checkin.png")} alt="checkin" />  
            <p >Check-In <br/> <span>Check out</span></p>
        </div>   
        <div className="d-flex ">
            <img className='img-fluid m-2' id='checkin' 
            src={require("../../assets/guest.jpeg")} alt="checkin" />  
            <p >Guest <br/> <span>Guest</span></p>
        </div>   
        <div className=" d-flex flex-column justify-content-start align-items-center">
          <button className='checkout'>Check Out</button>
        </div>

</div> 
    </>

  )
}

export default Navheader
