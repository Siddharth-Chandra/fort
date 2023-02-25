import React, {useState} from "react";
import {collection,addDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./Firebase";
import {useNavigate} from "react-router-dom"




const Login= ()=>
{


    const [username,Setusername]= useState("");
    const [password,Setpassword]= useState("");
    const navigate= useNavigate();
    const loggedIn= false;
    
  


    const handleSubmit=  (e)=>
    {
      e.preventDefault();
      ValidateCredentials();
      clearForm();
  
    };

    
    const clearForm=()=>
    {
        Setusername("");
        Setpassword("");


    }


    const ValidateCredentials= async ()=>
    {
        
            const user= await signInWithEmailAndPassword(
                auth,
                username,
                password
            ).then((userCredential)=>
            {
                const user=userCredential.user;
                navigate('/admin', {replace:true})   

            }
                ).
                catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });

    }
  
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Admin Login</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">   
                    
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label  className="form-label">UserName</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Username" required
                    value={username} onChange={(e)=>Setusername(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" required
                     value={password} onChange={(e)=>Setpassword(e.target.value)}
                    />
                    </div>
                    
                                            
                   
                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Login</button>
                    </div>
                    </form>
                    

                </div>
            </div>

        </div>
        </>
    );

};


export default Login;

