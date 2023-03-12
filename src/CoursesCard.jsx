import React  from "react";
import { NavLink } from "react-router-dom";


const CoursesCard=(props)=>
{
    return (
            <><div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>
                </div>
            </>
    );
};


export default CoursesCard;