import React from "react";
import '../Styles/statement.css';
function Insurance() {
  return (
    <div>

      <hr id="hrline" style={{width:"100%"}} />
      <br />
      <div className="container-fluid">
        <br />
        <div className="row">
        <div className="col-md-4">
          <div className="card carddesign">
         
              <div className="insurance-content"><h4> Primary Insurance:  <span id="spantext">Republic Indemnity Company Of America</span></h4>
              <p>
              Name of Policy Holder :<span>Kiran D D</span>
            </p>
            <p>
              Relationship of Patient to Policy Holder :<span>Self</span>
            </p>
            <p>
              Policy Number :<span>2446</span>
            </p>
            <p>
              Group Number :<span>12345</span>
            </p>
            <p>
              Insured Party's Date of Birth :<span>05/21/1980</span>
            </p>
              </div>
             
     
            
          </div>
        </div>
        <div className="col-md-4">
         <div className="card carddesign">
         <div className="insurance-content"><h4> Secondary Insurance:  <span id="spantext">Delta Dental</span></h4>
      <p>Name of Policy Holder :<span>Kiran D D</span></p>
      <p>Relationship of Patient to Policy Holder :<span>Self</span></p>
      <p>Policy Number :<span>100</span></p>
      <p>Group Number :<span>12345</span></p>
      <p>Insured Party's Date of Birth :<span>05/21/1980</span></p>
         </div>
     

        </div>
        </div>
        <div className="col-md-4">
        <div class="card carddesign">
        <div className="insurance-content"><h4> Remaining Insurance Coverage  </h4>
       <p>Individual yearly benefit :<span>$1,500.00</span></p>
     <p>Total amount of claims sent this year :<span>$500.00</span></p>
       <p>Total expected amount of claims :<span>$450.00</span></p>
      <p>Total amount paid :<span>$75.00</span></p>
      <p>Remaining insurance benefit :<span>$925.00</span></p>
       </div>
       </div>
        </div>
        </div>
        <div className="container text-center">
        <button className="btn  change"> Change</button>
        </div>
      </div>
<br />
<br />
     



    </div>
  );
}

export default Insurance;
