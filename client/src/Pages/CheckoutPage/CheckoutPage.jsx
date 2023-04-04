import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CartSidebar from "../CartPage/CartSidebar";
import styles from "./CheckoutPage.module.css";
import fAssured from "../../Assets/Images/f-assured.png";
import { Link } from "react-router-dom";
import {
  addOrders,
  removeProductsFromCart,
} from "../../Assets/ReusableFuctions";
import LoginButton from "../../Components/LoginButton/LoginButton";
import { AiFillDelete } from "react-icons/ai";

const CheckoutPage = ({
  handleShowAddress,
  handleShowEditAddress,
  handleShowOrderSuccess,
  handleShowSignin,
}) => {
  const dispatch = useDispatch();
  const [stage, setStage] = useState(2);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("checkout")) || []
  );
  const { user } = useSelector((state) => state.UserReducer);
  const { addressData } = useSelector((state) => state.AddressReducer);

  const removeFromCheckoutList = (id) => {
    const filteredProducts = products.filter((elem) => elem._id !== id);
    setProducts(filteredProducts);
    localStorage.setItem("checkout", JSON.stringify(filteredProducts));
  };

  return user.userId ? (
    <div className={styles.checkoutContainer}>
      <div className={styles.orderSummaryBox}>
        {
          <section className={styles.userDetails}>
            <p className={styles.sectionHeading}>
              <span className={styles.headingNumber}>1</span> LOGIN
            </p>
            <div className={styles.sectionBody}>
              <p>
                <b>
                  {user.first_name} {user.last_name}
                </b>{" "}
                +91{user.mobile_number}
              </p>
            </div>
          </section>
        }
        {stage === 2 ? (
          <section className={styles.deleveryAddress}>
            <div className={styles.focusHeading}>
              <span className={styles.headingNumber}>2</span> DELEVERY ADDRESS
            </div>
            {addressData.length ? (
              <div>
                <div className={styles.focusAddressBody}>
                  <p className={styles.address}>
                    <b>{addressData[0].name}</b> {addressData[0].houseAddress}{" "}
                    {addressData[0].city} {addressData[0].state} -{" "}
                    {addressData[0].pincode}
                  </p>
                  <Button
                    variant="outline-primary"
                    onClick={handleShowEditAddress}
                  >
                    Edit Address
                  </Button>
                </div>
                <button
                  className={styles.deleveryHereBtn}
                  onClick={() => setStage(3)}
                >
                  DELEVERY HERE
                </button>
              </div>
            ) : (
              <Button
                className={styles.focusAddAddressBtn}
                variant="outline-primary"
                onClick={handleShowAddress}
              >
                Add Address
              </Button>
            )}
          </section>
        ) : (
          <section className={styles.deleveryAddress}>
            <p className={styles.sectionHeading}>
              <span className={styles.headingNumber}>2</span> DELEVERY ADDRESS
            </p>
            {addressData.length ? (
              <div className={styles.sectionBody}>
                <p className={styles.address}>
                  <b>{addressData[0].name}</b> {addressData[0].houseAddress}{" "}
                  {addressData[0].city} {addressData[0].state} -{" "}
                  {addressData[0].pincode}
                </p>
                <Button variant="outline-primary" onClick={() => setStage(2)}>
                  Change Address
                </Button>
              </div>
            ) : (
              <Button
                className={styles.addAddress}
                variant="outline-primary"
                onClick={handleShowAddress}
              >
                Add Address
              </Button>
            )}
            <div></div>
          </section>
        )}
        {stage === 3 ? (
          <section className={styles.orderSummary}>
            <p className={styles.focusHeading}>
              <span className={styles.headingNumber}>3</span> ORDER SUMMARY
            </p>
            <div className={styles.focusOrderSummaryBody}>
              {products.map((elem, i) => {
                // Calculating discount percent of products
                const discount = Math.floor(
                  100 - (elem.current_price * 100) / elem.original_price
                );
                return (
                  <div key={elem._id}>
                    <div className={styles.productBox}>
                      <div className={styles.imgDiv}>
                        <Link to={`/productdetail/${elem.productId}`}>
                          <img
                            src={elem.thumbnail}
                            alt={elem.name}
                            className={styles.productImage}
                          />
                        </Link>
                      </div>
                      <div className={styles.productDetails}>
                        <Link
                          to={`/productdetail/${elem.productId}`}
                          className={styles.productName}
                        >
                          <span>{elem.name}</span>
                        </Link>
                        <img
                          className={styles.fAssured}
                          src={fAssured}
                          alt="Flipkart assured"
                        />
                        <p className={styles.price}>
                          <span className={styles.currentPrice}>
                            ₹{elem.current_price}
                          </span>{" "}
                          <strike className={styles.originalPrice}>
                            ₹{elem.original_price}
                          </strike>
                          <span className={styles.discount}>
                            {discount}% off
                          </span>
                        </p>
                      </div>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeFromCheckoutList(elem._id)}
                        title="Remove"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
            <button className={styles.continueBtn} onClick={() => setStage(4)}>
              CONTINUE
            </button>
          </section>
        ) : (
          <section className={styles.orderSummary}>
            <p className={styles.sectionHeading}>
              <span className={styles.headingNumber}>3</span> ORDER SUMMARY
            </p>
          </section>
        )}
        {stage === 4 ? (
          <section className={styles.paymentOptions}>
            <p className={styles.focusHeading}>
              <span className={styles.headingNumber}>4</span>PAYMENT OPTIONS
            </p>
            <div className={styles.focusPaymentBody}>
              <div>
                <input
                  type={"radio"}
                  id="payment"
                  name="payment"
                  value="cod"
                  defaultChecked
                />{" "}
                <label htmlFor="payment">Cash on delivery</label>
              </div>
              <button
                className={styles.confirmOrderBtn}
                onClick={() => {
                  addOrders(dispatch, products, user.userId);
                  removeProductsFromCart(dispatch, products, user.userId);
                  handleShowOrderSuccess();
                }}
              >
                CONFIRM ORDER
              </button>
            </div>
          </section>
        ) : (
          <section className={styles.paymentOptions}>
            <p className={styles.sectionHeading}>
              <span className={styles.headingNumber}>4</span>PAYMENT OPTIONS
            </p>
          </section>
        )}
      </div>
      <div className={styles.priceDetailBox}>
        <CartSidebar cartData={products} />
      </div>
    </div>
  ) : (
    <LoginButton
      handleShowSignin={handleShowSignin}
      heading={"Want to Buy Something?"}
      text={"Please login first to buy products"}
    />
  );
};

export default CheckoutPage;
