import React from "react";
import img1 from "./images/multimedia.jpg"
import img2 from "./images/programming.jpg"
import img3 from "./images/accounting.jpg"

import Card from "./Card"



const Courses=()=> 
{
    const data = [
        { img: img3, title: "Accounting",desc:"Tally with GST, Tally Prime, PeachTree, QuickBooks" },
        { img: img1 , title: "Multimedia",desc:"Adobe Photoshop, Illustrator, CorelDraw, Adobe Flash, 3D Studio Max" },
        { img: img2, title: "Programming",desc:"Python, Java, PHP, Web Development, C, C++, HTML, CSS, Javascript" },
       
        
    ]

    return (
        <>
        <div className="my-8"> 
        <h1 className="text-center mb-4">Courses</h1>
        <div className="container-fluid" >
         <div className="row"> 
            <div className="col-10 mx-auto">
                <div className="row gy-3">  
                {
                data.map((val,ind)=>
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

        </div>
        </>
    );
};

export default Courses;