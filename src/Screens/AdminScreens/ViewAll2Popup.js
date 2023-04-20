import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MyComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="viewall2invitepopupmaindiv">
      <Button variant="primary" onClick={handleShow}>
        Launch Popup
      </Button>
      <div >
      <Modal className="viewall2model"show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="viewall2sendinvite">Send invite</Modal.Title>
        </Modal.Header>
        <p className="viewall2email">Email</p>
        <span className="viewall2popupspan">
        <input type="email" placeholder="Enter Email" />
          <Button variant="primary" onClick={handleClose}>
            Send invite
          </Button>
        </span>
        
      </Modal>
      </div>
      
    </div>
  );
}

export default MyComponent;
