import React from 'react';
import styles from './SignIn.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = ({show, handleClose, handleShow}) => {
  return (
    <Modal show={show} onHide={handleClose} className={styles.signinContainer}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='secondary' onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
      <button className={styles.signup}>New to Flipkart? Create an account</button>
    </Modal>
  );
};

export default SignIn;
