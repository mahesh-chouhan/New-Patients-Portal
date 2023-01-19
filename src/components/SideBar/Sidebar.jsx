import React from "react";
import Header from "../Constants/Header";

// import APP from './APP';

import "./Sidebar.css";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { BsStickiesFill } from "react-icons/bs";
import { AiTwotoneFileText } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { FaClipboard } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { AiTwotoneInsurance } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Appointment from "../Appointments/Appointment";
import Home from "../Home/Home";
import LoginFooter from "../Login/LoginFooter";
import Statement from "../Statement/Statement";
// import "react-tabs/style/react-tabs.css";
function Sidebar() {
  return (
    <div>
      <Header />
      <div>
      <Tabs>
        <TabList>
          <Tab>
      
<br />
            <p style={{ marginTop:"20px" }} className="VerticleTab1">
              <AiTwotoneHome size={24} style={{
                    marginRight: "5px",
                    marginTop: "-6px",
                  }} />
              Home
            </p>
          </Tab>
          <Tab>
            <p>
              <BsFillCalendarPlusFill size={24} style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }} />
              Appointments
            </p>
          </Tab>
          <Tab>
            <p>
              <BsStickiesFill
                style={{
                  marginRight: "5px",
                  marginTop: "-5px",
                }}
                size={24}
              />
              Statement
            </p>
          </Tab>
          <Tab>
            <p>

              <AiTwotoneFileText
                style={{
                  marginRight: "5px",
                  marginTop: "-5px",
                }}
                size={24}
              />
              AR
            </p>
          </Tab>
          <Tab>
            <p>
              <FaClipboard
                style={{
                  marginRight: "5px",
                  marginTop: "-5px",
                }}
                size={24}
              />
              Treatment Plans
            </p>
            </Tab>
            <Tab>
            <p>
            <AiTwotoneInsurance
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
                />
                Insurance
            </p>
            </Tab>
            <Tab>
            <p>
            <FaPenSquare
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
                />
                Claim Status
            </p>
            </Tab>
            <Tab>
            <p>
            <RiMessage2Fill
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
                />
                Message(s)
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <Appointment />
          <LoginFooter />
        </TabPanel>
        <TabPanel>
         <Appointment />
        </TabPanel>
        <TabPanel>
        <Statement />
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 4</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 5</h2>
          </div>
        </TabPanel>
      </Tabs>
      </div>
      <LoginFooter />
    </div>
  );
}

export default Sidebar;
