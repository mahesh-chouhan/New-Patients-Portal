import React from "react";
import BootstrapDataTable from "./BootstrapDataTable";

function Statement() {
  return (
    <div>
      <div>
        <hr id="hrline" style={{ width: "100%" }} />
        <div className="Appointment_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 PracticeName">
                <p>
                  <b>Name </b>: Kiran O'Darekar
                </p>

                <div className="">
                  <p style={{}}>
                    <b>Address</b>:- Ap #265-2335 Mauris Rd.
                  </p>
                  <p>
                    <b>City</b>:Lima, Ontario 36252
                  </p>
                </div>
                <div className="">
                  <p style={{}}>
                    <b>Phone</b>:- 975-793-0276
                  </p>
                  <p>
                    <b>Balance Due</b>: $0.00
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="" style={{ textAlign: "right" }}>
                  <p style={{}}>
                    <b>Practice</b>:- Demo Smile dental care
                  </p>
                  <p>
                    <b>Address</b>:830 Hillview Court, Suite 290
                  </p>
                </div>
                <div
                  className=""
                  style={{ textAlign: "right", marginRight: "0px" }}
                >
                  <p style={{}}>
                    <b>City</b>:- Milpitas,CA,95035
                  </p>
                  <p>
                    <b>Phone</b>: 4987777777
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6"> </div>
              <div className="col-md-6 PracticeVisit"></div>
            </div>
          </div>
          <BootstrapDataTable />
        </div>
      </div>
    </div>
  );
}

export default Statement;
