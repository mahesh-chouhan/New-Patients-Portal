import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { Checkbox } from "antd";
const countries = [
  { id: "AFG", name: "Dentist" },
  { id: "ALA", name: "Audiologist" },
  { id: "ALB", name: "Veterinarian" },
];
const options = [
  {
    label: "07:00 am",
    value: "07:00 am",
  },
  {
    label: "07:30 am",
    value: "07:30 am",
  },
  {
    label: "08:00 am",
    value: "08:00 am",
  },
  {
    label: "08:30 am",
    value: "08:30 am",
  },
  {
    label: "09:00 am",
    value: "09:00 am",
  },
  {
    label: "09:30 am",
    value: "09:00 am",
  },
  {
    label: "10:00 am",
    value: "10:00 am",
  },
  {
    label: "10:30 am",
    value: "10:30 am",
  },
  {
    label: "11:00 am",
    value: "11:00 am",
  },
  {
    label: "11:30 am",
    value: "11:30 am",
  },
  {
    label: "12:00 pm",
    value: "12:00 pm",
  },
  {
    label: "01:00 pm",
    value: "01:00 pm",
  },
  {
    label: "01:30 pm",
    value: "01:30 pm",
  },
  {
    label: "02:00 pm",
    value: "02:00 pm",
  },
  {
    label: "02:30 pm",
    value: "02:30 pm",
  },
  {
    label: "03:00 pm",
    value: "03:00 pm",
  },
  {
    label: "03:30 pm",
    value: "03:30 pm",
  },
  {
    label: "04:00 pm",
    value: "04:00 pm",
  },
  {
    label: "04:30 pm",
    value: "04:30 pm",
  },
  {
    label: "05:00 pm",
    value: "05:00 pm",
  },
  {
    label: "05:30 pm",
    value: "05:30 pm",
  },
  {
    label: "06:00 pm",
    value: "06:00 pm",
  },
  {
    label: "06:30 pm",
    value: "06:30 pm",
  },
  {
    label: "07:00 pm",
    value: "07:00 pm",
  },
  {
    label: "07:30 pm",
    value: "07:30 pm",
  },
];
function RequestAnAppointment() {
  const [startdate, setStartDate] = useState(new Date());
  const [checkData, setCheckData] = useState();

  const countriesList = countries.map((item, i) => {
    return (
      <option key={i} value={item.id}>
        {item.name}
      </option>
    );
  });
  const HandleChange = (checkedValues, e) => {
    console.log("checked = ", checkedValues);
     setCheckData(checkData);
    setStartDate(startdate);
  };
  return (
    <div>
      <div className="container appointmentmodal">
        <h4 className="Appointment-Heading">Request an appointment</h4>

        <div>
          <label style={{ marginTop: "18px" }}>Reason of visit:</label>
          <select
            className="form-select"
            style={{ border: "1px solid #5783ff" }}
            aria-label=".form-select-sm example"
            
          >
            {countriesList}
          </select>
        </div>

        <div>
          <label style={{ marginTop: "18px" }}>Date:</label>
          <DatePicker
            style={{ border: "1px solid #5783ff", borderRadius: "8px" }}
            selected={startdate}
            onChange={HandleChange}
          />
        </div>

        <label style={{ marginTop: "18px" }}>Time: </label>
        <div
          id="CheckboxOverride"
          style={{
            border: "1px solid #5783ff",
            borderRadius: "8px",
            overflow: "scroll",
            width: "100%",
            height: "70px",

            padding: "5px",
            marginTop: "6px",
            marginBottom: "5px",
          }}
        >
          {options.map((item) => (
            <label className="form-check-label">
              <input type="checkbox" class="form-check-input"   onChange={(e)=>{setCheckData(console.log(e.target.checked))}}/>
              {item.label}
            </label>
          ))}
        </div>

        <label style={{ marginTop: "18px" }}>Date:</label>
        <div>
          <DatePicker
            style={{ border: "1px solid #5783ff", borderRadius: "8px" }}
            selected={startdate}
            onChange={HandleChange}
          />
        </div>
        <label style={{ marginTop: "18px" }}>Time: </label>
        <div
          id="CheckboxOverride"
          style={{
            border: "1px solid #5783ff",
            borderRadius: "8px",
            overflow: "scroll",
            width: "100%",
            height: "70px",

            padding: "5px",
            marginTop: "6px",
            marginBottom: "5px",
          }}
        >
          {options.map((item) => (
            <label className="form-check-label">
              <input type="checkbox" class="form-check-input" value={options}  onChange={(e)=>HandleChange} />
              {item.label}
            </label>
          ))}
        </div>

        <div>
          <label style={{ marginTop: "18px" }}>Contact: </label>
        </div>
        <div>
          <form style={{}}>
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheck1"
              name="example1"
            />
            <label class="form-check-label" for="customCheck1">
              975-793-0276
            </label>
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheck2"
              name="example1"
            />
            <label class="form-check-label" for="customCheck2">
              kiran.darekar@gmail.com
            </label>
          </form>
        </div>

        <div>
          <div>
            <label style={{ marginTop: "18px" }}>Comments: </label>
          </div>
          <div>
            <textarea
              style={{ border: "1px solid #5783ff", borderRadius: "8px" }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
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

export default RequestAnAppointment;
