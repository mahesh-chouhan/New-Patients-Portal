import React from "react";

import {
  Tabs,
  Tab,
  Modal,
  Row,
  Button,
  Col,
  Form,
  Card,
  Container,
} from "react-bootstrap";
import Appointment from "../Appointments/Appointment";

import AccountRecivable from "../Statement/AccountRecivable";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { BsStickiesFill } from "react-icons/bs";
import { AiTwotoneFileText } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { FaClipboard } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { AiTwotoneInsurance } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import Insurance from "../Insurance/Insurance";
import ClaimStatus from "../Insurance/Claim_Status/ClaimStatus";
import MassageBox from "../Inbox/MassageBox";
import TreatmentPlans from "../TreatmentPlan/TreatmentPlans";
import "../Styles/Home.css";
import HomeTab from "./HomeTab";
import Statement from "../Statement/Statement";

function TabComponent() {
  return (
    <div>
      <div className="container-fluid patientPortalTabs">
        <Tabs defaultActiveKey="HomeTab" id="HomeTab">
          <Tab
            eventKey="HomeTab"
            title={
              <span style={{ color:"#228b22" }}>
                <AiTwotoneHome
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                   
                  }}
                  size={40}
                />
                Home
              </span>
            }
          >
            <HomeTab />
          </Tab>
          <Tab
            eventKey="Appointment"
            title={
              <span style={{ color:"#17a2b8" }}>
                <BsFillCalendarPlusFill
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={32}
                />
                Appointments
              </span>
            }
          >
            <Appointment />
          </Tab>
          <Tab
            eventKey="Statement"
            title={
              <span style={{ color:"red" }}>
                {" "}
                <BsStickiesFill
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={32}
                />
                Statement
              </span>
            }
          >
            <Statement />
          </Tab>
          <Tab
            eventKey="AccountRecivable"
            title={
              <span style={{ color:"rgb(101, 160, 84)" }}>
                <AiTwotoneFileText
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={35}
                />
                Accounts Receivable
              </span>
            }
          >
            <AccountRecivable />
          </Tab>
          <Tab
            eventKey="TreatmentPlans"
            title={
              <span style={{ color:"#AA336A" }}>
                <FaClipboard
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={35}
                />
                Treatment Plans
              </span>
            }
          >
            <TreatmentPlans />
          </Tab>
          <Tab
            eventKey="Insurance"
            title={
              <span style={{ color:"#ffcb3b" }}>
                <AiTwotoneInsurance
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={35}
                />
                Insurance
              </span>
            }
          >
            <Insurance />
          </Tab>
          <Tab
            eventKey="ClaimStatus"
            title={
              <span style={{ color:"#9c27b0" }}>
                <FaPenSquare
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={35}
                />
                Claim Status
              </span>
            }
          >
            <ClaimStatus />
          </Tab>
          <Tab
            eventKey="MassageBox"
            title={
              <span style={{ color:"#6c757d" }}>
                <RiMessage2Fill
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={35}
                />
                Message(s)
              </span>
            }
          >
            <MassageBox />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default TabComponent;