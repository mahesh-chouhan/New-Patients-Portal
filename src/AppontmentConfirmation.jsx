import React from 'react'
import { useNavigate } from 'react-router-dom';

function AppontmentConfirmation() {

const navigate = useNavigate();




    const options = [
        {
            name:"Name:",
          label: "Pratik Sir",
          value: "07:00 am",
        },
        {
          label: "Ram Sir",
          value: "07:00 am",
        },
        {
          label: "Ketul Sir",
          value: "07:00 am",
        },
        {
          label: "Jignesh Sir",
          value: "07:00 am",
        },
        {
          label: "Satyen sir",
          value: "07:00 am",
        },
        {
          label: "Manoj bhai",
          value: "07:00 am",
        },
        {
          label: "vishal parmar",
          value: "07:00 am",
        },
        {
          label: "Bhavik bhai",
          value: "07:00 am",
        },
        {
          label: "Vrajshiraj shah",
          value: "07:00 am",
        },
       
      ];
  return (
        <div>
       <br />
       <br />
      <div className='container appointmentmodal'>
         <div className="container"></div>
        <h4 className="Appointment-Heading">Appointment Confirmation</h4>

       {options.map((item) => (
           <>
        <h3> {item.name}</h3>
            <label className="form-check-label" style={{ marginLeft:"50px" }}>
              <input type="checkbox" className="form-check-input" style={{ marginLeft:"50px" }} />
              {item.label}
            </label>
          </>
          ))} 
          <hr id="hrline" style={{width:"100%"}} />
           <div className="row">
            <div className='col-md-8'></div>
            <div className='col-md-4'>
                
            <button className="btn btn-send" style={{ marginLeft:"-10px" }} >Confirm</button>
            <button className="btn btn-cancel" onClick={()=>navigate('/')} >cancel</button>
            </div>
          </div>
    </div>
          </div>
  )
}

export default AppontmentConfirmation
