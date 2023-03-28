import React, {useEffect} from 'react';
import styles from './SignUp.module.css';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import signupImage from '../../Assets/Images/signupimage.png';
import {signup} from '../../Services/Actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';

const SignUp = ({show, handleCloseSignup, handleShowSignin}) => {
  const dispatch = useDispatch();
  const {message, signupSuccess, isError} = useSelector(
    (state) => state.UserReducer
  );
  const submit = (e) => {
    e.preventDefault();
    const user = {
      first_name: e.target.firstname.value,
      last_name: e.target.lastname.value,
      email: e.target.email.value,
      mobile_number: e.target.mobile_number.value,
      password: e.target.password.value,
    };
    signup(dispatch, user);
  };

  useEffect(() => {
    if (signupSuccess) {
      handleCloseSignup();
      handleShowSignin();
    }
  }, [signupSuccess]);

  return (
    <div className={styles.signupContainer}>
      <Modal
        size=''
        show={show}
        onHide={handleCloseSignup}
        className={styles.modal}
      >
        <div className={styles.signupBody}>
          <div className={styles.imageDiv}>
            <img src={signupImage} alt='' className={styles.signupSideImage} />
          </div>
          <div className={styles.formDiv}>
            <Modal.Header className={styles.header} closeButton>
              <Modal.Title className={styles.formTitle}>SignUp</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={submit} className={styles.signupForm}>
                <input
                  required
                  type={'text'}
                  placeholder='Firstname'
                  name='firstname'
                />
                <input type={'text'} placeholder='Lastname' name='lastname' />
                <input
                  required
                  type={'email'}
                  placeholder='Email'
                  name='email'
                />
                <input
                  required
                  type={'number'}
                  placeholder='Mobile'
                  name='mobile_number'
                />
                <input
                  required
                  type={'password'}
                  placeholder='Password'
                  name='password'
                />
                <input type={'submit'} value='Sign Up' />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.signinBtn}
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
