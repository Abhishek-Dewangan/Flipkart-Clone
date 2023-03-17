import React from 'react';
import styles from './Address.module.css';
import {Modal} from 'react-bootstrap';

const Address = ({show, handleCloseAddress}) => {
  const submit = () => {
    console.log('Form submitted');
  };
  return (
    <div className={styles.addressContainer}>
      <Modal
        size=''
        show={show}
        onHide={handleCloseAddress}
        className={styles.modal}
      >
        <div className={styles.formDiv}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.formTitle}>Address Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={submit} className={styles.addressForm}>
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
          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Address;
