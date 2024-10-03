
  import React, { useEffect, useState } from 'react'
  import './Booking.css'
  
  const Booking = () => {

    const [rooms,setRooms] = useState([{}])
   
    useEffect( ()=>{
      const fetchRooms = async () =>{
        await fetch("https://orange-space-spork-g4746pvwggvpfv45-8000.app.github.dev/rooms").then (
            response => response.json()
          ).then(
            data =>{ 
              setRooms(data)
              console.log(data)
            
            }
          )
        
      };
       fetchRooms();
       console.log(rooms)
    },[])
    

    return (
       <div>

           <div className="container-fluid">

             <div className="row mt-5 ">

                          <div className="col-4">
                            <form className = 'container-fluid mt-5 formContainer' >
                                <div class="mb-3 mt-5">
                                    <label for="firstname" class="form-label">FirstName</label>
                                    <input type="text" class="form-control" id="firstname" aria-describedby="firstname"/>
                                </div>
                                <div class="mb-3 mt-4">
                                    <label for="flastname" class="form-label">lastName</label>
                                    <input type="text" class="form-control" id="lastname" aria-describedby="lastname"/>
                                </div>
                                <div class="mb-3 ">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputphoneNumber1" class="form-label">Phone Number</label>
                                    <input type="phonenumber" class="form-control" id="phoneNumber"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                          </div>

                <div className="col-lg-8 roomContainer">
                     {/* dropdown menu */}
                      <div className="container-fluid d-flex justify-content-start align-items-center text-center flex-column mt-4">
                         <div class="btn-group">
                          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            Default dropdown
                          </button>
                           <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Menu item</a></li>
                            <li><a class="dropdown-item" href="#">Menu item</a></li>
                            <li><a class="dropdown-item" href="#">Menu item</a></li>
                          </ul>
                        </div> 

                     <div className="container-fluid mt-5">
                          <div className="row">
                                <div className="col-4 mt-5">
                                  <div className="card">
                                    <img src={require("../../assets/room1.jpeg") } alt="" className="card-img-top" />
                                    <div className="card-body">
                                      <h4>2 bed Size Room</h4>
                                      <p>good , equiped room for your comfort </p>
                                      <p>Rating</p>
                                      <h5>Price ;</h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-4 mt-5">
                                 <div className="card">
                                    <img src={require("../../assets/room1.jpeg") } alt="" className="card-img-top" />
                                    <div className="card-body">
                                      <h4>2 bed Size Room</h4>
                                      <p>good , equiped room for your comfort </p>
                                      <p>Rating</p>
                                      <h5>Price ;</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4 mt-5">
                                  <div className="card">
                                    <img src={require("../../assets/room1.jpeg") } alt="" className="card-img-top" />
                                    <div className="card-body">
                                      <h4>2 bed Size Room</h4>
                                      <p>good , equiped room for your comfort </p>
                                      <p>Rating</p>
                                      <h5>Price ;</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4 mt-5">
                                  <div className="card">
                                    <img src={require("../../assets/room1.jpeg") } alt="" className="card-img-top" />
                                    <div className="card-body">
                                      <h4>2 bed Size Room</h4>
                                      <p>good , equiped room for your comfort </p>
                                      <p>Rating</p>
                                      <h5>Price ;</h5>
                                    </div>
                                  </div>
                                </div>

                           </div>
                      </div>
                    </div>

                </div>
             </div>
           </div>
        </div>
      
    )
  }
  
  export default Booking
  