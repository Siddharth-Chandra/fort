import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalLine from "./HorizontalLine";
import fb from "./images/facebook.png"
import linkedin from "./images/linkedin.png"
import instagram from "./images/instagram.png"


const Footer=()=> 
{
    return (
   
        <div className="footer"> 
        <div className="sb__footer section__padding">
        <div className="sb__footer-links">
            <div className="sb__footer-links-div">
                <h4>For Business</h4>
                <a href=""><div><p>About Us</p></div></a>
                <a href=""><div><p>Careers</p></div></a>
                <NavLink to="/courses"><div><p>Our Courses</p></div></NavLink>
            </div>
            <div className="sb__footer-links-div">
                <h4>Contact Us</h4>
                <div><p>Fortitude Institute of Technology</p></div>
                <div><p>Opp. South Indian Bank, Highway Rd, Kidangoor, Kottayam -686572</p></div>
                <div><p>9072276841</p></div>
                <div><p>info@fortitudeinstitute.in</p></div>
            </div>
            <div className="sb__footer-links-div">
                <h4>Find Us On</h4>
               <div className="socialmedia">
                <a href="https://www.facebook.com/profile.php?id=100090827160981"><p><img src={fb}></img></p></a>
                <a href="https://www.instagram.com/fortitude_institute/?igshid=YmMyMTA2M2Y%3D"><p><img src={instagram}></img></p></a>

               </div>
            </div>

        </div>
        <HorizontalLine color="white"></HorizontalLine>

        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
                <p>
                    @{new Date().getFullYear()} FIT. All rights reserved.
                </p>
             
            </div>
          

        </div>
        </div>

        </div>
         
     
    );
};




export default Footer;