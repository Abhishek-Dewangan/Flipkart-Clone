import React from 'react';
import styles from './SignUp.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({showSignup, handleCloseSignup, handleShowSignin}) => {
  return (
    <Modal
      show={showSignup}
      onHide={handleCloseSignup}
      className={styles.signupContainer}
    >
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>Signup</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleCloseSignup}>
          Close
        </Button>
      </Modal.Footer>
      <button
        className={styles.login}
        onClick={() => {
          handleShowSignin();
          handleCloseSignup();
        }}
      >
        Already have an account? SignIn
      </button>
    </Modal>
  );
};

export default SignUp;
