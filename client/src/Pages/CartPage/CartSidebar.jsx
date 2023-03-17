import React from 'react';
import styles from './CartPage.module.css';
import {useSelector} from 'react-redux';

const CartSidebar = ({cartData}) => {
  // const cart = useSelector((state) => state.CartReducer);
  const initialValue = 0;
  // console.log(cartData);
  const totalOriginalPrice = cartData.reduce((acc, curr) => {
    // console.log(acc);
    return acc + curr.original_price;
  }, initialValue);

  const totalCurrentPrice = cartData.reduce(
    (acc, curr) => acc + curr.current_price,
    initialValue
  );
  return (
    <div className={styles.cartSidebarContainer}>
      <p className={styles.rightSecHeading}>PRICE DETAILS</p>
      <hr />
      <div>
        <p>Price ({cartData.length} items)</p>
        <p>₹{totalOriginalPrice.toLocaleString()}</p>
      </div>
      <div className={styles.discountAmount}>
        <p>Discount</p>
        <p>-₹{(totalOriginalPrice - totalCurrentPrice).toLocaleString()}</p>
      </div>
      <div className={styles.deleveryCharges}>
        <p>Delivery Charges</p>
        <p>Free</p>
      </div>
      <hr />
      <div className={styles.totalAmount}>
        <p>Total Amount</p>
        <p>₹{totalCurrentPrice.toLocaleString()}</p>
      </div>
      <hr />
      <p className={styles.discountNote}>
        You will save ₹
        {(totalOriginalPrice - totalCurrentPrice).toLocaleString()} on this
        order
      </p>
    </div>
  );
};

export default CartSidebar;
