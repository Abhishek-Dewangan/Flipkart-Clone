import React from 'react';
import styles from './SignIn.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = ({showSignin, handleCloseSignin, handleShowSignup}) => {
  return (
    <Modal
      show={showSignin}
      onHide={handleCloseSignin}
      className={styles.signinContainer}
    >
      <Modal.Header closeButton>
        <Modal.Title>SignIn</Modal.Title>
      </Modal.Header>
      <Modal.Body>SignIn</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleCloseSignin}>
          Close
        </Button>
      </Modal.Footer>
      <button
        className={styles.signin}
        onClick={() => {
          handleShowSignup();
          handleCloseSignin();
        }}
      >
        New to Flipkart? Create an account
      </button>
    </Modal>
  );
};

export default SignIn;
