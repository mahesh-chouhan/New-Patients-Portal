import React, { useState } from "react";
import AppointmentTable from "./AppointmentTable";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import ModalsPopup from "./ModalsPopup";

function Appointment(props) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (breakpoint) => 
  {
    setShow(true);
    setFullscreen(breakpoint);

  }
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  return (
    <>
      <hr id="hrline" style={{width:"100%"}} />
      <br />
    <div className="Appointment_section">
      <div className="container-fluid">
     
            <div className="row">
              <div className="col-md-6 PracticeName">
                  <p>
                    <b>Practice Name</b>: Demo Smile dental care
                  </p>
                  </div>   
              <div className="col-md-6"><div>
              </div></div>
                <div className="row">
                  <div className="col-md-6">
                  <div className="">
                  <p style={{}}>
                    <b>First Visit</b>:- 05/04/2020
                  </p>
                  <p>
                    <b>Last Visit</b>:- 15/08/2021
                  </p>
                </div>
                  </div>
                  <div className="col-md-6">
                    
                  <button className=" btn  requestAppointments" onClick={handleShow} >
                  <BsFillCalendarPlusFill size={20}   style={{
                      marginRight: "5px",
                      marginTop:"-3px",
                       
                      color: "black ",
                    }} />  Request an Appointment
                   
                  </button>
                  </div>
                  
                </div>
                 
           
                </div>
         
            <div className="row">
              <div className="col-md-6"> </div>
              <div className="col-md-6 PracticeVisit">
               
             
              </div>
            </div>
          </div>
        <AppointmentTable />

    </div>
    <ModalsPopup handleClose={handleClose} show={show} handleShow={handleShow} fullscreen={fullscreen} />
              </>
  );
}

export default Appointment;
