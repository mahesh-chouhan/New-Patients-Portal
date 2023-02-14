import React from 'react'

function ReferAsFriend(props) {

  return (
    <div>
     <div className='container appointmentmodal'>
     
     <h4>Refer a Friend</h4>
     <div>
      <p>
        <b>
        Tell others about PatientHomePage®. Your comments, along with the link to this web site, will be included in the message.
        </b>
      </p>
     </div>
     <div className='row ReferLabel'>
      <div className='col-md-3'>
        <label htmlFor="">Your Name:</label> 

      </div>
      <div className='col-md-9'>
        <label htmlFor="">Carmen Ensign</label>
      </div>

     </div>
     <div className='row ReferLabel'>
      <div className='col-md-3'>
        <label htmlFor="">Your Email:</label> 

      </div>
      <div className='col-md-9'>
        <label htmlFor="">kiran.darekar@gmail.com</label>
      </div>

     </div>
     <div className='row ReferLabel'>
      <div className='col-md-3'>
        <label htmlFor="">Recipient's Email:</label> 

      </div>
      <div className='col-md-9'>
        <br />

        <input htmlFor="" className='form-control'></input>
      </div>

     </div>
     <div className='row ReferLabel'>
      <div className='col-md-3'>
        <label htmlFor="">Message :</label> 

      </div>
      <div className='col-md-9'>
        <br />
      <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
      </div>

     </div>
     <br />
     <div className="row ReferLabel">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <button className="btn btn-send">Send</button>
            <button className="btn btn-cancel">cancel</button>
          </div>
        </div>

     </div>



     
    </div>
  )
}

export default ReferAsFriend
