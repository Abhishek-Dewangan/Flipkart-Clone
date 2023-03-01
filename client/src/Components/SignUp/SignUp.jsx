import React from 'react';
import styles from './SignUp.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import signupImage from '../../Assets/Images/signupimage.png';

const SignUp = ({showSignup, handleCloseSignup, handleShowSignin}) => {
  const submit = () => {};
  return (
    <div className={styles.signupContainer}>
      <Modal
        size=''
        show={showSignup}
        onHide={handleCloseSignup}
        className={styles.modal}
        closebutton
      >
        <div className={styles.signupBody}>
          <div className={styles.imageDiv}>
            <img src={signupImage} alt='' className={styles.signupSideImage}/>
          </div>
          <div className={styles.formDiv}>
            <Modal.Header closeButton>
              <Modal.Title>SignUp</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={submit} className={styles.signupForm}>
                <input type={'text'} /> <br />
                <input type={'text'} /> <br />
                <input type={'text'} /> <br />
                <input type={'text'} /> <br />
                <input type={'submit'} /> <br />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.signupBtn}
                onClick={() => {
                  handleShowSignin();
                  handleCloseSignup();
                }}
              >
                Already have an account? SignIn
              </button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// <Modal.Header closeButton>
//   <Modal.Title>Signup</Modal.Title>
// </Modal.Header>
// <Modal.Body>Signup</Modal.Body>
// <Modal.Footer>
//   <Button variant='secondary' onClick={handleCloseSignup}>
//     Close
//   </Button>
// </Modal.Footer>
export default SignUp;
