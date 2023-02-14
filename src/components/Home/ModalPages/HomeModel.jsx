import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



import Header from "../../Constants/Header";
import ReferAsFriend from "./ReferAsFriend";

function HomeModel({ showed, handleCloseForReferFriend, Referfiend, fullscreen }) {

   


  return (
    <div>
      <section>
        <Modal
          scrollable={true}
          className="Full_Modal"
          fullscreen={fullscreen}
          show={showed}
          onHide={handleCloseForReferFriend}
        >
          {<Header />}
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="modal--test__body"
            id="style1"
            style={{
              maxHeight: "calc(95vh - 120px)",
            }}
          >
            {
                <ReferAsFriend />
            }
          </Modal.Body>
        </Modal>
      </section>
    </div>
  );
}

export default HomeModel;
