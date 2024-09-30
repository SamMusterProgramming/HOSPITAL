import React from 'react'
import './home.css'

const Home = () => {
  return (
   
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-5  ">
              <div className="container-fluid mt-5 showcase">
                 <img  className='img-fluid' src={require('../../assets/showcase.jpeg')} alt="" />
              </div>
            </div>
            <div className="col-lg-5 ">
               <div className="container-fluid d-flex align-items-center flex-column mt-5">
                  <div className="container d-flex gap-4 mt-5 align-items-center">
                    <h5 className='about'>ABOUT US </h5>
                    <div className='liner'>  </div>
                  </div>
                  <div className="container  mt-3 introduction">
                    <h2>The Best Holidays Start Here</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                      Consequuntur aut soluta in iure quas nulla quis voluptas numquam 
                      consectetur fugiat accusan
                      tium enim, similique, rerum excepturi earum nam modi, repellendus ad!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
                      inventore, optio cupiditate sequi vitae enim?
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ab fugiat?
                     
                      </p>
                    <button className='readMore mt-5'>Read More</button>
                  </div>
               </div>
            </div>
          </div>
          
             
          <div className="container-flui d-flex flex-column mt-5 text-center">
            <div className="container-fluid d-flex gap-1 mt-5 align-items-center text-center">
               <p className='m-lg-5'>OUR LIVING ROOMS</p>
               <div className='liner1'> </div>
            </div>    
            <h1 className='m-lg-5'>The Most Memorable Rest <br/>Time Starts here</h1>
            {/* list of rooms */}
            <div className="container-fluid mt-4">
               <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="card align-items-center text-center mb-4 shadow-md">
                          <img src={require("../../assets/luxury-oceanview.jpeg")} alt="" className="card-img-top" />
                          <div class="card-body">
                            <h3>Deluxe Ocean View</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button id="checkout">Book Now</button>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="card align-items-center text-center mb-4 shadow-sm">
                          <img src={require("../../assets/luxury-oceanview.jpeg")} alt="" className="card-img-top" />
                          <div class="card-body">
                            <h3>Deluxe Ocean View</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button id="checkout">Book Now</button>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="card align-items-center text-center mb-4 shadow-sm">
                          <img src={require("../../assets/luxury-oceanview.jpeg")} alt="" className="card-img-top" />
                          <div class="card-body">
                            <h3>Deluxe Ocean View</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button id="checkout">Book Now</button>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="card align-items-center text-center mb-4 shadow-sm">
                          <img src={require("../../assets/luxury-oceanview.jpeg")} alt="" className="card-img-top" />
                          <div class="card-body">
                            <h3>Deluxe Ocean View</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button id="checkout">Book Now</button>
                          </div>
                      </div>
                    </div>
               </div>
            </div>
          </div>

        </div>


       

       
           
      
   
  )
}

export default Home
