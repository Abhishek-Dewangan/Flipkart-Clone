import React, {useEffect} from 'react';
import styles from './SignIn.module.css';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import signinImage from '../../Assets/Images/signinimage.png';
import {signin} from '../../Services/Actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';

const SignIn = ({show, handleCloseSignin, handleShowSignup}) => {
  const dispatch = useDispatch();
  const {signinSuccess} = useSelector((state) => state.UserReducer);

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

  useEffect(() => {
    signinSuccess && handleCloseSignin();
  }, [signinSuccess]);

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
            <Modal.Header className={styles.header} closeButton>
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
                <input
                  required
                  type={'password'}
                  placeholder='Password'
                  name='password'
                />{' '}
                <input type={'submit'} value='Sign In' /> <br />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.signupBtn}
                onClick={() => {
                  handleShowSignup();
                  handleCloseSignin();
                }}
              >
                New to Flipkart? Create an account
              </button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignIn;
