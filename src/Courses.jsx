import React from "react";
import img1 from "./images/multimedia.jpg"
import img2 from "./images/programming.jpg"
import img3 from "./images/accounting.jpg"

import CoursesCard from "./CoursesCard"



const Courses=()=> 
{
    const data = [
        {title: "Career Courses",
        courses:
        [
            {
              name:  "Corporate Finance" 
            },
            {
                name:  "Corporate Finance" 
              },
        ],
    
    },
    {title: "Certificate Courses",
        courses:
        [
            {
              name:  "Corporate Finance" 
            },
            {
                name:  "Corporate Finance" 
              },
        ],
    
    },
    {title: "Vacation Courses",
        courses:
        [
            {
              name:  "Corporate Finance" 
            },
            {
                name:  "Corporate Finance" 
              },
        ],
    
    }
        
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
                    return <CoursesCard key={ind}
                  
                    title={val.title}
                    courses={val.courses}
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