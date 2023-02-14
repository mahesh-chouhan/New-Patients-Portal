import React from 'react'
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg'

function ProfilePhoto() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

   const HandleClick=()=>{
    
   }


  return (
    <div>
      <div className='container'>

   
     <div className='conatiner ProfileUpdate'>
     <div className='Profile-content'>
            <h4  >
            <CgProfile style={{ }} size={40}/>
            Profile
            </h4>
        </div>
     </div>
     <div className='profileIcon'>
        <div className='row'>
            <div className='col-md-2'>
            <img
              className="imgProfile"
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png" width="150px"
              alt=""
              style={{marginLeft:"30px",marginTop:"-40px" }}
              />
            </div>
            <div className='col-md-4'>
            <h4 className='profileHead' >Petient Name:</h4>
            <input type="file" onChange={handleChange} />
            </div>
            <div className='col-md-6'>
            <button className="btn ChangePassword" onClick={HandleClick} >Change Password</button>
            <button className="btn DeleteAccount">Delete Account</button>
            </div>
        </div>
        <form className='form-group InsuranceForm'>
          <div className='row'>
           <div className='col-md-2'></div>
          <div className='col-md-2'>
             <div>
             <label for="name"><h6>Patient ID:</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <label for="patient_name" ><h6>380501</h6></label>
            </div>

        </div>
            </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6>First Name:</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="Kiran" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6> last Name:</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="O'Darekar" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6>Phone</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="975-793-0276" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6>Work Phone</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="378-304-0275" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6>Email</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="kiran.darekar@gmail.com" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6>Cell</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="378-304-0275" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6>Adress</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="Ap #265-2335 Mauris Rd." placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6>city</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="Lima" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6>state</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="Ontario" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
        <div className='col-md-2'></div>
            <div className='col-md-2'>
             <div>
             <label for="name"><h6>zip</h6></label>
             </div>
            </div>
            <div className='col-md-8'>
            <input type="text"   className="form-control" value="36252" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <br />
<hr id="hrline" style={{width:"100%"}} />
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-6'>
             <div>
          
             </div>
            </div>
            <div className='col-md-6'>
            <button className="btn btn-send">save</button>
            <button className="btn btn-reset">Reset</button>
            </div>
        </div>
        </form>
     </div>
     </div>
    </div>
  )
}

export default ProfilePhoto
