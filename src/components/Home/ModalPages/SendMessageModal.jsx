import React, { useState } from "react";
import "../../Styles/SendMessage.css";
function SendMessageModal() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <div className="container SendMessage">
        <div className="SendMessageHeader">
          
        <h4>Send a Message</h4>
        </div>
        <div>
          <p>
            <b>Send a message to your practice.</b>
          </p>
        </div>
        <div className="row" style={{ marginTop: "18px" }}>
          <div className="col-md-3">
            <label for="">Select image :</label>
          </div>
          <div className="col-md-9">
            <input type="file" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <p style={{ color: "red", fontSize: "14px", margin: "8px" }}>
              <b>File size should not exceed 4 MB</b>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="" style={{ marginTop: "15px" }}>Message:</label>

          </div>
          <div className="col-md-9">
          <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              style={{height:"150px", marginTop: "15px" }}
            ></textarea>

          </div>

        </div>
        <br />
        <hr />
        <br />
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <button className="btn btn-send">Send</button>
            <button className="btn btn-cancel">cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMessageModal;
