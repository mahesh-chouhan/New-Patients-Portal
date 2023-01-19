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
import ClaimStatus from "../Insurance/ClaimStatus";
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
              <span>
                <AiTwotoneHome
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
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
              <span>
                <BsFillCalendarPlusFill
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
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
              <span>
                {" "}
                <BsStickiesFill
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
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
              <span>
                <AiTwotoneFileText
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
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
              <span>
                <FaClipboard
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
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
              <span>
                <AiTwotoneInsurance
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
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
              <span>
                <FaPenSquare
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
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
              <span>
                <RiMessage2Fill
                  style={{
                    marginRight: "5px",
                    marginTop: "-5px",
                  }}
                  size={24}
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