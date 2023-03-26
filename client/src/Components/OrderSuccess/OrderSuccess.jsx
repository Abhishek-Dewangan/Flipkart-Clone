import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import styles from './OrderSuccess.module.css';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';

const OrderSuccess = ({showOrderSuccess, handleCloseOrderSuccess}) => {
  const navigate = useNavigate();
  return (
    <Modal
      size='sm'
      show={showOrderSuccess}
      onHide={handleCloseOrderSuccess}
      className={styles.orderSuccessModal}
    >
      <Modal.Body as={'div'} className={styles.body}>
        <div className={styles.iconDiv}>
          <BsFillCheckCircleFill className={styles.successIcon} />
        </div>
        <p>Ordered Successful</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className={styles.continueShoppingBtn}
          variant=''
          onClick={() => {
            handleCloseOrderSuccess();
            navigate('/');
          }}
        >
          Continue Shopping
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderSuccess;
