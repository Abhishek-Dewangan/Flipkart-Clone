import styles from "./WishlistPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fAssured from "../../Assets/Images/f-assured.png";
import emptyImage from "../../Assets/Images/empty.png";
import { MdDelete } from "react-icons/md";
import { removeFromWishlist } from "../../Services/Actions/WishlistAction";
import WishlistSidebar from "./WishlistSidebar";
import LoginButton from "../../Components/LoginButton/LoginButton";

const WishlistPage = ({ handleShowSignin }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.UserReducer);
  const wishlist = useSelector((state) => state.WishlistReducer);

  return user.userId ? (
    <div className={styles.wishlistContainer}>
      <section className={styles.leftSection}>
        <WishlistSidebar />
      </section>
      <section className={styles.rightSection}>
        {wishlist.wishlistData.length ? (
          <div>
            <h5 className={styles.heading}>
              My Wishlist ({wishlist.wishlistData.length})
            </h5>
            <hr />
          </div>
        ) : (
          ""
        )}
        {wishlist.wishlistData.length ? (
          wishlist.wishlistData.map((elem) => {
            // Calculating discount percent of products
            const discount = Math.floor(
              100 - (elem.current_price * 100) / elem.original_price
            );
            return (
              <div key={elem._id}>
                <div className={styles.productBox}>
                  <Link
                    to={`/productdetail/${elem.productId}`}
                    className={styles.imgDiv}
                  >
                    <img
                      src={elem.thumbnail}
                      alt={elem.name}
                      className={styles.productImage}
                    />
                  </Link>
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
                      <span className={styles.discount}>{discount}% off</span>
                    </p>
                  </div>
                  <MdDelete
                    title="Remove"
                    className={styles.deleteIcon}
                    onClick={() => removeFromWishlist(dispatch, elem._id)}
                  />
                </div>
                <hr />
              </div>
            );
          })
        ) : (
          <div className={styles.emptyWishlist}>
            <img src={emptyImage} alt="Empty Item" />
            <h4>Empty Wishlist</h4>
            <p>You have no items in your wishlist. Start adding!</p>
          </div>
        )}
      </section>
    </div>
  ) : (
    <LoginButton
      handleShowSignin={handleShowSignin}
      heading={"Missing Wishlist items?"}
      text={"Login to see the items you added previously"}
    />
  );
};

export default WishlistPage;
