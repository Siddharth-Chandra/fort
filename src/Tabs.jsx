import React, {useEffect, useState} from "react";
import {collection,addDoc,onSnapshot} from "firebase/firestore";
import {db} from "./Firebase"
import "./App.css";

const Tabs=() =>{
  const [toggleState, setToggleState] = useState(1);

  const[students,setStudents]= useState([]);
  const[faculties,setFaculties]= useState([]);
  const[queries,setQueries]= useState([]);


useEffect(() => {

    const colRefStudents = collection(db, 'StudentRegistrations');
    const colRefFaculties = collection(db, 'TeacherRegistrations');
    const colRefQueries= collection(db, 'Queries');
  
    const studentRegistrations = onSnapshot(colRefStudents, snapshot => {
        setStudents(snapshot.docs.map(studentdoc => ({
        studentid: studentdoc.id,
        studentdata: studentdoc.data()
        
      })

      
      ));
      
    });

    const facultyRegistrations = onSnapshot(colRefFaculties, snapshot => {
      setFaculties(snapshot.docs.map(facultydoc => ({
      facultyid: facultydoc.id,
      facultydata: facultydoc.data()
      
    })

    
    ));
    
  });

  const queries = onSnapshot(colRefQueries, snapshot => {
    setQueries(snapshot.docs.map(querydoc => ({
    queryid: querydoc.id,
    querydata: querydoc.data()
    
  })

  
  ));
  
});

  

    return studentRegistrations,facultyRegistrations,queries; 
  },[]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (

    <div>
    <h1 className="text-center mt-4">Dashboard</h1>
    <div className="tab-container">
       
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         Student Registrations
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Faculty Registrations
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Queries
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Sl No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Stream</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                 {
                  students.length>0?
                  
                  students.map((student,index)=>
                    {
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{student.studentdata.Name}</td>
                            <td>{student.studentdata.Email}</td>
                            <td>{student.studentdata.MobileNumber}</td>
                            <td>{student.studentdata.Stream}</td>
                            <td>{student.studentdata.Semester}</td> 
                            <td>{student.studentdata.Subject}</td> 
                            <td>{student.studentdata.Created}</td> 

                        </tr>)
                    })
                    :
                    <div className="text-center"> 
                     <h6>No data found.</h6>
                     </div>
                }
                    
                </tbody>
                </table>
         
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Sl No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Stream</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                 {
                  faculties.length>0?
                  faculties.map((faculty,index)=>
                    {
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{faculty.facultydata.Name}</td>
                            <td>{faculty.facultydata.Email}</td>
                            <td>{faculty.facultydata.MobileNumber}</td>
                            <td>{faculty.facultydata.Stream}</td>
                            <td>{faculty.facultydata.Created}</td>
                            

                        </tr>)
                    })
                    :
                    <div className="text-center"> 
                     <h6>No data found.</h6>
                     </div>
                }
                    
                </tbody>
                </table>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Sl No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Message</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                 {
                  queries.length>0?
                  queries.map((query,index)=>
                    {
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{query.querydata.Name}</td>
                            <td>{query.querydata.Email}</td>
                            <td>{query.querydata.MobileNumber}</td>
                            <td>{query.querydata.Message}</td>
                            <td>{query.querydata.Created}</td>
                        </tr>)
                    })
                    :
                    <div className="text-center"> 
                     <h6>No data found.</h6>
                     </div>
                }
                    
                </tbody>
                </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Tabs;