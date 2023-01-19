import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const countries= [
    { id: 'AFG', name: 'Dentist' },
    { id: 'ALA', name: 'Audiologist' },
    { id: 'ALB', name: 'Veterinarian' }
]

function RequestAnAppointment() {
    const [startdate, setStartDate] = useState(new Date());

const countriesList =  countries.map((item, i)=>{
    return (
        <option  key={i} value={item.id}>{item.name}</option>
    )
})

  return (
    <div>
      <div className="container appointmentmodal">
        <h4 className="Appointment-Heading">Request an appointment</h4>

       
       
        
              <div>
              <label style={{ marginTop:"9px" }} >Reason of visit:</label>
              <select className="form-select" style={{ border:"1px solid #5783ff" }} aria-label=".form-select-sm example">
                {countriesList}
              </select>
              </div>
         
      
        
     
            
      
       
              <div>
              <label style={{ marginTop:"9px" }} >Date:</label>
              <DatePicker style={{ border:"1px solid #5783ff" ,borderRadius: '8px' }} selected={startdate} onChange={(date) => setStartDate(date)} />
              </div>
         
        

              <label style={{ marginTop:"9px" }} >Time: </label>
            <div style={{
                border:"1px solid #5783ff" ,
                borderRadius: '8px',
                overflow:"scroll",
                width:"100%",
                height:"70px",
                
                padding:"5px",
                marginTop:"6px",
                marginBottom:"5px"
            }}>
                
    <form>

    <input type="checkbox" class="form-check-input" id="customCheck1" name="example1"  /><label  class="form-check-label" for="customCheck1">07:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck2" name="example1"  /><label  class="form-check-label" for="customCheck2">07:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck3" name="example1"  /><label  class="form-check-label" for="customCheck3">08:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck4" name="example1"  /><label  class="form-check-label" for="customCheck4">08:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck5" name="example1"  /><label  class="form-check-label" for="customCheck5">09:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck6" name="example1"  /><label  class="form-check-label" for="customCheck6">09:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck7" name="example1"  /><label  class="form-check-label" for="customCheck7">10:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck8" name="example1"  /><label  class="form-check-label" for="customCheck8">10:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck9" name="example1"  /><label  class="form-check-label" for="customCheck9">11:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck10" name="example1"  /><label  class="form-check-label" for="customCheck10">11:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck11" name="example1"  /><label  class="form-check-label" for="customCheck11">12:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck12" name="example1"  /><label  class="form-check-label" for="customCheck12">12:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck13" name="example1"  /><label  class="form-check-label" for="customCheck13">01:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck14" name="example1"  /><label  class="form-check-label" for="customCheck14">01:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck15" name="example1"  /><label  class="form-check-label" for="customCheck15">02:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck16" name="example1"  /><label  class="form-check-label" for="customCheck16">02:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck17" name="example1"  /><label  class="form-check-label" for="customCheck17">03:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck18" name="example1"  /><label  class="form-check-label" for="customCheck18">03:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck19" name="example1"  /><label  class="form-check-label" for="customCheck19">04:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck20" name="example1"  /><label  class="form-check-label" for="customCheck20">04:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck21" name="example1"  /><label  class="form-check-label" for="customCheck21">05:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck22" name="example1"  /><label  class="form-check-label" for="customCheck22">05:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck23" name="example1"  /><label  class="form-check-label" for="customCheck23">06:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck24" name="example1"  /><label  class="form-check-label" for="customCheck24">06:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck25" name="example1"  /><label  class="form-check-label" for="customCheck25">07:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck26" name="example1"  /><label  class="form-check-label" for="customCheck26">07:30 pm</label>
    </form>
     </div>
   

         
              <label style={{ marginTop:"9px" }}  >Date:</label>
        
    
     
              <div>
              <DatePicker style={{ border:"1px solid #5783ff" ,borderRadius: '8px' }} selected={startdate} onChange={(date) => setStartDate(date)} />
              </div>
         
    

              <label style={{ marginTop:"9px" }} >Time: </label>
            <div style={{
                border:"1px solid #5783ff" ,
                borderRadius: '8px',
                overflow:"scroll",
                width:"100%",
                height:"70px",
                
                padding:"5px",
                marginTop:"6px",
                marginBottom:"5px"
            }}>
                
    <form>

    <input type="checkbox" class="form-check-input" id="customCheck1" name="example1"  /><label  class="form-check-label" for="customCheck1">07:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck2" name="example1"  /><label  class="form-check-label" for="customCheck2">07:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck3" name="example1"  /><label  class="form-check-label" for="customCheck3">08:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck4" name="example1"  /><label  class="form-check-label" for="customCheck4">08:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck5" name="example1"  /><label  class="form-check-label" for="customCheck5">09:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck6" name="example1"  /><label  class="form-check-label" for="customCheck6">09:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck7" name="example1"  /><label  class="form-check-label" for="customCheck7">10:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck8" name="example1"  /><label  class="form-check-label" for="customCheck8">10:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck9" name="example1"  /><label  class="form-check-label" for="customCheck9">11:00 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck10" name="example1"  /><label  class="form-check-label" for="customCheck10">11:30 am</label>
    <input type="checkbox" class="form-check-input" id="customCheck11" name="example1"  /><label  class="form-check-label" for="customCheck11">12:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck12" name="example1"  /><label  class="form-check-label" for="customCheck12">12:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck13" name="example1"  /><label  class="form-check-label" for="customCheck13">01:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck14" name="example1"  /><label  class="form-check-label" for="customCheck14">01:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck15" name="example1"  /><label  class="form-check-label" for="customCheck15">02:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck16" name="example1"  /><label  class="form-check-label" for="customCheck16">02:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck17" name="example1"  /><label  class="form-check-label" for="customCheck17">03:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck18" name="example1"  /><label  class="form-check-label" for="customCheck18">03:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck19" name="example1"  /><label  class="form-check-label" for="customCheck19">04:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck20" name="example1"  /><label  class="form-check-label" for="customCheck20">04:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck21" name="example1"  /><label  class="form-check-label" for="customCheck21">05:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck22" name="example1"  /><label  class="form-check-label" for="customCheck22">05:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck23" name="example1"  /><label  class="form-check-label" for="customCheck23">06:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck24" name="example1"  /><label  class="form-check-label" for="customCheck24">06:30 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck25" name="example1"  /><label  class="form-check-label" for="customCheck25">07:00 pm</label>
    <input type="checkbox" class="form-check-input" id="customCheck26" name="example1"  /><label  class="form-check-label" for="customCheck26">07:30 pm</label>
    </form>
     </div>
   
  
     <div>
           <label style={{ marginTop:"9px" }}  >Contact: </label>
            </div>
            <div  >
          
    <form style={{ }}>
    <input type="checkbox" class="form-check-input" id="customCheck1" name="example1"  /><label  class="form-check-label" for="customCheck1">975-793-0276</label>
    <input type="checkbox" class="form-check-input" id="customCheck2" name="example1"  /><label  class="form-check-label" for="customCheck2">  kiran.darekar@gmail.com</label>
    
    </form>
     </div>
   
     <div>
      <div>
   <label style={{ marginTop:"9px" }} >Comments: </label>
     </div>
   <div >
   <textarea style={{   border:"1px solid #5783ff" ,
                borderRadius: '8px', }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
   </div>
 <br />
    <div className="row">
        <div className="col-md-9">

        </div>
        <div className="col-md-3">
            <button className="btn btn-send">Send</button>
            <button className="btn btn-cancel">cancel</button>
        </div>
    </div>
 
     </div>
      </div>
   
  );
}

export default RequestAnAppointment;
