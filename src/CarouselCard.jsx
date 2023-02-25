import React from "react";
import { NavLink } from "react-router-dom";



const CarouselCard =(props)=>
{
    return (
        <>
        
         <div className="carousel-item ">
            <div className="cards-wrapper">
                <div className="card" >
                    <img className="card-img-top" src={props.img} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to={{
                        pathname:'/register'}}
                        state={{title:props.title}}
                        className="btn btn-primary">Register</NavLink>
                    </div>
                
                   
            </div>
            </div>
         </div>
        </>
    )
  
    
}
export default CarouselCard;