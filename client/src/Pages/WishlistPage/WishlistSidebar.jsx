import React from "react";
import styles from "./WishlistPage.module.css";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../Services/Actions/UserAction";

const WishlistSidebar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.UserReducer);
  return (
    <div className={styles.wishlistSidebarContainer}>
      <div className={styles.profile}>
        <FaUserCircle className={styles.profileIcon} size={50} />
        <div className={styles.profileDetails}>
          <p className={styles.greet}>Hello,</p>
          <p className={styles.userName}>
            {user.first_name + " " + user.last_name}
          </p>
        </div>
      </div>
      <div className={styles.otherLinks}>
        <div className={styles.linksDiv}>
          <Link className={styles.link} to={"/myorders"}>
            <BsFillArrowUpCircleFill className={styles.orderIcon} /> MY ORDERS{" "}
            <GrNext className={styles.nextIcon} />
          </Link>
        </div>
        <hr />
        <div className={styles.linksDiv}>
          <Link className={styles.link} to={"/cart"}>
            <FaShoppingCart className={styles.cartIcon} /> MY CART{" "}
            <GrNext className={styles.nextIcon} />
          </Link>
        </div>
        <hr />
        <div className={styles.linksDiv}>
          <Link
            className={styles.link}
            onClick={() => signout(dispatch, user.token)}
          >
            <BiLogOutCircle className={styles.logoutIcon} /> LOGOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistSidebar;
