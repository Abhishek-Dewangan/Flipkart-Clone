import { useEffect, useState } from "react";
import styles from "./EditAddress.module.css";
import { Modal } from "react-bootstrap";
import { updateAddress } from "../../Services/Actions/AddressAction";
import { useDispatch, useSelector } from "react-redux";

const EditAddress = ({ show, handleCloseEditAddress }) => {
  const dispatch = useDispatch();
  const { addressData } = useSelector((state) => state.AddressReducer);
  const { user } = useSelector((state) => state.UserReducer);
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [pincode, setPincode] = useState("");
  const [locality, setLocality] = useState("");
  const [houseAddress, setHouseAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

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
    updateAddress(dispatch, addressData[0]._id, address);
    handleCloseEditAddress();
  };

  useEffect(() => {
    if (addressData.length) {
      setName(addressData[0].name);
      setNumber(addressData[0].number);
      setPincode(addressData[0].pincode);
      setLocality(addressData[0].locality);
      setHouseAddress(addressData[0].houseAddress);
      setCity(addressData[0].city);
      setState(addressData[0].state);
    }
  }, [addressData]);

  return (
    <div className={styles.addressContainer}>
      <Modal
        size=""
        show={show}
        onHide={handleCloseEditAddress}
        className={styles.modal}
      >
        <div className={styles.formDiv}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.formTitle}>EDIT ADDRESS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={submit} className={styles.addressForm}>
              <div>
                <input
                  required
                  type={"text"}
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />{" "}
                <input
                  required
                  type={"number"}
                  placeholder="10-digit mobile number"
                  name="mobile_number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  type={"number"}
                  placeholder={"Pincode"}
                  name={"pincode"}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <input
                  type={"text"}
                  placeholder={"Locality"}
                  name={"locality"}
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  type={"text"}
                  placeholder={"Address (Area and Street)"}
                  name={"houseAddress"}
                  value={houseAddress}
                  onChange={(e) => setHouseAddress(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  type={"text"}
                  placeholder={"City/District/Town"}
                  name={"city"}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  required
                  type={""}
                  placeholder={"State"}
                  name={"state"}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <input
                  type={"submit"}
                  className={styles.submitBtn}
                  value="ADD ADDRESS"
                />{" "}
                <br />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default EditAddress;
