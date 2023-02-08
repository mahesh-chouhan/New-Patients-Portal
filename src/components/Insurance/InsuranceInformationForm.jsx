import React from 'react'
import { BsInfoLg } from 'react-icons/bs';
import '../Styles/InsuranceForm.css';

function InsuranceInformationForm() {
  return (
    <div>
      <div className='container'>
        <form action="" className='form-group InsuranceForm'>

        <div className='row'>
            <div className='col-md-6'>
             <div>
               <h4>
                <BsInfoLg style={{ marginTop:"-5px", marginLeft:"-9px" }} />
                Insurance Information Form</h4>
             </div>
            </div>
            <div className='col-md-6'>
            </div>
        </div>
        </form>
        <form className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Patient Name:</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <label for="patient_name" ><h6>Kiran O'Darekar</h6></label>
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>

        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Primary Insurance:</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control" value="Republic  Indemnity Company Of America" placeholder="Primary Insurance" />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>

        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Name of Policy Holder: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control" value="Kiran D" placeholder="Name of Policy Holder" />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Relationship of Patient to Policy Holder: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control" value="Kiran D" placeholder="Relationship of Patient to Policy Holder: *" />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Policy Number: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control" value="2664"  />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Group Number: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control" value="12345"  />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Insured Party’s Date of Birth: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control" value="05/21/1980"  />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Secondary Insurance:</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control" value="Delta Dental"  />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Name of Policy Holder: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control"   />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Relationship of Patient to Policy Holder: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control"   />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Policy Number: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control"   />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Group Number: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control"   />
            </div>
        </div>
        </form>
        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-4'>
             <div>
             <label for="name"><h6>Insured Party’s Date of Birth: *</h6></label>
             </div>
            </div>
            <div className='col-md-6'>
            <input type="text"   className="form-control"   />
            </div>
        </div>
        </form>

        <form action="" className='form-group InsuranceForm'>
        <div className='row'>
            <div className='col-md-8'>
             <div>
          
             </div>
            </div>
            <div className='col-md-4'>
            <button className="btn Submit">Submit</button>
            <button className="btn InsuranceCancel">cancel</button>
            </div>
        </div>
        </form>

      </div>
    </div>
  )
}

export default InsuranceInformationForm
