import React from 'react';
import {Modal} from 'react-bootstrap';
import styles from './OrderSuccess.module.css';

const OrderSuccess = ({showOrderSuccess, handleCloseOrderSuccess}) => {
  return (
    <Modal show={showOrderSuccess} onHide={handleCloseOrderSuccess}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
    </Modal>
  );
};

export default OrderSuccess;
