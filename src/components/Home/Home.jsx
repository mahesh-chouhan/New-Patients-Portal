import React from 'react'
import Header from '../Constants/Header'
import {Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container} from "react-bootstrap";
import Appointment from '../Appointments/Appointment';
import Statement from '../Statement/Statement';
import AccountRecivable from '../Statement/AccountRecivable';
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { BsStickiesFill } from "react-icons/bs";
import { AiTwotoneFileText } from "react-icons/ai";
import { FaClipboard } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { AiTwotoneInsurance } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import Insurance from '../Insurance/Insurance';
import ClaimStatus from '../Insurance/ClaimStatus';
import MassageBox from '../Inbox/MassageBox';
import TreatmentPlans from '../TreatmentPlan/TreatmentPlans';
 import '../Styles/Home.css';

function Home() {
  return (
    <div>
    <Header />
    <div>
        <div className='container-fluid patientPortalTabs'>
        <Tabs defaultActiveKey="Appointment" 
                               id="Appointment">
                             <Tab eventKey="Appointment" title={<span><BsFillCalendarPlusFill style={{marginRight:"10px" }}  size={24} />Appointment</span>}>
                                 <Appointment />
                             </Tab>
                             <Tab eventKey="Statement" title={<span> <BsStickiesFill style={{marginRight:"10px" }}  size={24} />Statement</span>}>
                                 <Statement />
                             </Tab>
                             <Tab eventKey="AccountRecivable" title={<span><AiTwotoneFileText style={{marginRight:"10px" }}  size={24} />AccountRecivable</span>}>
                                 <AccountRecivable />
                             </Tab>
                             <Tab eventKey="TreatmentPlans" title={<span><FaClipboard style={{marginRight:"10px" }}  size={24} />TreatmentPlans</span>}>
                                 <TreatmentPlans />
                             </Tab>
                             <Tab eventKey="Insurance" title={<span><AiTwotoneInsurance  style={{marginRight:"10px" }}  size={24}/>Insurance</span>}>
                                 <Insurance />
                             </Tab>
                             <Tab eventKey="ClaimStatus" title={<span><FaPenSquare  style={{marginRight:"10px" }}  size={24}/>ClaimStatus</span>}>
                                 <ClaimStatus />
                             </Tab>
                             <Tab eventKey="MassageBox" title={<span><RiMessage2Fill  style={{marginRight:"10px" }}  size={24}/>Massage</span>}>
                                 <MassageBox />
                             </Tab>
                     
                         </Tabs>
                       
        </div>
    </div>
    </div>
  )
}

export default Home