import React from 'react'
import '../Styles/Unsubscribe.css'
function ClaimStatus() {
  return (
    <div >
      <br />
      <br />
      <div className='container UnsubscribePage'>

      <h1>
        <img src="https://www.pngall.com/wp-content/uploads/8/Disconnect-PNG-File.png" width="40px" alt="" />
       Unsubscribe 
      </h1>
 <hr />
      <br />
      <div>
        <form action="" className='form-group'>
        <input name='username' type="text" class="login__input" placeholder=" Email Adress" />
        <div className='text-area'>
         
          <span>
          Please tell us why you want to Unsubscribe
      
          </span>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
       
        </form>
        <div className='row'>
          <div className='col-md-7'></div>
          <div className='col-md-5'><button className="btn UnsubscribeSubmit" >Unsubscribe</button>
            <button className="btn Cancel">Cancel</button></div>

        </div>
      </div>
      <br />
      </div>
      <br />
      <br />
    </div>
  )
}

export default ClaimStatus
