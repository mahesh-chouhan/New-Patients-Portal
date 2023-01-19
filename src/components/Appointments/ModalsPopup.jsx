import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {handleShow} from './Appointment';
import '../Styles/Appointment.css';

import RequestAnAppointment from './RequestAnAppointment';
    function ModalsPopup({show,handleClose,handleShow , fullscreen}) {
        

  

    
  return (
    <div>
      
   <section>
    
      <Modal   scrollable={true} className='Full_Modal' fullscreen={fullscreen} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal--test__body" id='style1' style={{
          maxHeight: 'calc(95vh - 120px)',
          
        }} >
          {
            <RequestAnAppointment    />
          }
        </Modal.Body>
   
      </Modal>
          </section>
    </div>
  )
}

export default ModalsPopup
