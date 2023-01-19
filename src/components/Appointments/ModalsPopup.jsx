import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {handleShow} from './Appointment';
import '../Styles/Appointment.css';

import RequestAnAppointment from './RequestAnAppointment';
    function ModalsPopup({show,handleClose,handleShow , fullscreen}) {
        

  

    
  return (
    <div>
      

      <Modal  scrollable={true} className='Full_Modal' fullscreen={fullscreen} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal--test__body" style={{
      maxHeight: 'calc(105vh - 210px)',
      overflowY: "scroll"
     }} >
          {
            <RequestAnAppointment    />
          }
        </Modal.Body>
   
      </Modal>
    </div>
  )
}

export default ModalsPopup
