import React from "react";
import { NavLink } from "react-router-dom";
import img from "./images/elearn.jpg";
import img1 from "./images/multimedia.jpg"
import img2 from "./images/programming.jpg"
import img3 from "./images/accounting.jpg"
import Card from "./Card"


import Footer from "./Footer"


const Home=()=> 
{
    const courses = [
        { img: img3, title: "Accounting",desc:"Tally with GST, Tally Prime, PeachTree, QuickBooks" },
        { img: img1 , title: "Multimedia",desc:"Adobe Photoshop, Illustrator, CorelDraw, Adobe Flash, 3D Studio Max" },
        { img: img2, title: "Programming",desc:"Python, Java, PHP, Web Development, C, C++, HTML, CSS, Javascript" },
       
        
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

      
       <section id="header" className="d-flex align-items-center">
       
       <div className="container-fluid">
     
         <div className="row"> 
            <div className="col-10 mx-auto">
            <h4 className="text-center my-3 mb-4">Trending Courses</h4>
            <div className="row gy-3">  
                {
                courses.map((val,ind)=>
                {
                    return <Card key={ind}
                    img={val.img}
                    title={val.title}
                    desc={val.desc}
                    />
                })
            }
                

                </div>
            </div>
         </div>
        </div>
       </section>


<section>
<div className="container-fluid">

<Footer></Footer>
</div>

</section>
 

        </>
    );
};

export default Home;