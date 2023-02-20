import React from 'react'
import ReferFriend from '../../../assets/ReferaFriend.png'
function ReferAsFriend(props) {

  return (
    <div>
     <div className='container UnsubscribePage'>
     <h1>
        <img src={ReferFriend} width="60px" alt="" style={{ paddingRight:"10px" }} />
       Refer a Friend
      </h1>
      <hr />
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
        <label htmlFor="" style={{ fontWeight:"700" }}>Carmen Ensign</label>
      </div>

     </div>
     <div className='row ReferLabel'>
      <div className='col-md-3'>
        <label htmlFor="">Your Email:</label> 

      </div>
      <div className='col-md-9'>
        <label htmlFor="" style={{ fontWeight:"700" }} >kiran.darekar@gmail.com</label>
      </div>

     </div>
     <div>
      <br />
        <form action="" className='form-group'>
        <input name='username' type="text" class="login__input" placeholder=" Recipient's Email:" />
        <div className='text-area'>
         
          <span>
         Message
      
          </span>
        <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3"></textarea>
        </div>
       
        </form>
        <div className='row'>
          <div className='col-md-7'></div>
          <div className='col-md-5'><button className="btn UnsubscribeSubmit" >Send Message</button>
            <button className="btn Cancel">Cancel</button></div>

        </div>
      </div>

     </div>



     
    </div>
  )
}

export default ReferAsFriend
