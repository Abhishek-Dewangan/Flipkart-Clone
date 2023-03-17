import React from 'react';
import styles from './Address.module.css';
import {Modal} from 'react-bootstrap';
import {addAddress} from '../../Services/Actions/AddressAction';

const Address = ({show, handleCloseAddress}) => {
  const submit = (e) => {
    e.preventDefault();
    console.log(e.target);
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
              <div>
                <input required type={'text'} placeholder='Name' name='name' />{' '}
                <input
                  required
                  type={'number'}
                  placeholder='10-digit mobile number'
                  name='mobile_number'
                />
              </div>
              <div>
                <input
                  type={'number'}
                  placeholder={'Pincode'}
                  name={'pincode'}
                  required
                />
                <input
                  type={'text'}
                  placeholder={'Locality'}
                  name={'locality'}
                />
              </div>
              <div>
                <input
                  type={'text'}
                  placeholder={'Address (Area and Street)'}
                  name={'houseAddress'}
                  required
                />
              </div>
              <div>
                <input
                  type={'text'}
                  placeholder={'City/District/Town'}
                  name={'city'}
                  required
                />
                <input
                  type={''}
                  placeholder={'State'}
                  name={'state'}
                  required
                />
              </div>
              <input type={'submit'} value='Add Address' /> <br />
            </form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Address;
