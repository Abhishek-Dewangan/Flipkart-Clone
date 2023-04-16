import styles from './AddressForm.module.css';
import { Modal } from 'react-bootstrap';
import { addAddress } from '../../Services/Actions/AddressAction';
import { useDispatch, useSelector } from 'react-redux';

const AddressForm = ({ show, handleCloseAddress }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.UserReducer);

  const submit = (e) => {
    e.preventDefault();
    const address = {
      userId: user.userId,
      name: e.target.name.value,
      number: e.target.mobile_number.value,
      pincode: e.target.pincode.value,
      locality: e.target.locality.value,
      houseAddress: e.target.houseAddress.value,
      city: e.target.city.value,
      state: e.target.state.value,
    };
    addAddress(dispatch, address);
    handleCloseAddress();
  };
  return (
    <div className={styles.addressContainer}>
      <Modal
        size=''
        show={show}
        onHide={handleCloseAddress}
        className={styles.modal}>
        <div className={styles.formDiv}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.formTitle}>ADD ADDRESS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={submit}
              className={styles.addressForm}>
              <div>
                <input
                  required
                  type={'text'}
                  placeholder='Name'
                  name='name'
                />{' '}
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
              <div>
                <input
                  className={styles.submitBtn}
                  type={'submit'}
                  value='ADD ADDRESS'
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default AddressForm;
