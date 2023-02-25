import React from "react";
import { NavLink } from "react-router-dom";
import img from "./images/elearn.jpg";
import HorizontalLine from "./HorizontalLine";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import CarouselCard from "./CarouselCard";


const Home=()=> 
{
    const data = [
        { img: img3, title: "Computer Science & Engineering",desc:"KTU 2015 and 2019 schemes available" },
        { img: img1 , title: "Electronics & Communication Engineering",desc:"KTU 2015 and 2019 schemes available" },
        { img: img2, title: "Civil Engineering",desc:"KTU 2015 and 2019 schemes available" },
       
        
    ]

    return (
        <>

    <section id="header" className="d-flex align-items-center">
       <div className="container-fluid">
         <div className="row"> 
            <div className="col-10 mx-auto">
                <div className="row"> 
                <div className="col-lg-6 order-1 order-lg-1 header-img">
                <img src={img} className="img-fluid"></img>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"> 
                <h2></h2>
                <h6 className="my-4">"If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you."</h6>
                <div className="mt-3">
                    <NavLink to="/courses" className="btn-get-started">Start Learning</NavLink>
                </div>
                </div>
               
                </div>
            </div>
         </div>
        </div>
       </section>

        <HorizontalLine color="orange"/>

        {/* <section id="recommended" className="d-flex align-items-center">
       <div className="container-fluid">
         <div className="row"> 
            <div className="col-10 mx-auto">
                <div className="row"> 
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    {
                            data.map((val,ind)=>
                            {
                                return <CarouselCard key={ind}
                                img={val.img}
                                title={val.title}
                                desc={val.desc}
                                />
                            })
                    }
                      
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
               
                </div>
            </div>
         </div>
        </div>
       </section> */}
       

       
   

        </>
    );
};

export default Home;