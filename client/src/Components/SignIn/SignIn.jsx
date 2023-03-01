import React from 'react';
import styles from './SignIn.module.css';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import signinImage from '../../Assets/Images/signinimage.png';
import {signin} from '../../Services/Actions/UserAction';
import {useDispatch} from 'react-redux';

const SignIn = ({show, handleCloseSignin, handleShowSignup}) => {
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const user = {
      email: isNaN(e.target.emailormobile.value)
        ? e.target.emailormobile.value
        : null,
      mobile_number: !isNaN(e.target.emailormobile.value)
        ? e.target.emailormobile.value
        : null,
      password: e.target.password.value,
    };
    signin(dispatch, user);
  };
  return (
    <div className={styles.signinContainer}>
      <Modal
        size=''
        show={show}
        onHide={handleCloseSignin}
        className={styles.modal}
      >
        <div className={styles.signinBody}>
          <div className={styles.imageDiv}>
            <img src={signinImage} alt='' className={styles.signinSideImage} />
          </div>
          <div className={styles.formDiv}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.formTitle}>SignIn</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={submit} className={styles.signinForm}>
                <input
                  required
                  type={'text'}
                  placeholder='Email or Mobile'
                  name='emailormobile'
                />{' '}
                <br />
                <input
                  required
                  type={'password'}
                  placeholder='Password'
                  name='password'
                />{' '}
                <br />
                <input type={'submit'} value='Submit' /> <br />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.signinBtn}
                onClick={() => {
                  handleShowSignup();
                  handleCloseSignin();
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

export default SignIn;
