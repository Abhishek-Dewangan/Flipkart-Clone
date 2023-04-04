import { useEffect, useState } from "react";
import styles from "./ProductDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../Services/Actions/ProductAction";
import { FaShoppingCart } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import fAssured from "../../Assets/Images/f-assured.png";
import emptyImage from "../../Assets/Images/empty.png";
import placeholderImage from "../../Assets/Images/placeholder-image.png";
import { useNavigate } from "react-router-dom";
import {
  addCart,
  addWishlist,
  buyNow,
  removeWishlist,
} from "../../Assets/ReusableFuctions";
import { Card, Placeholder } from "react-bootstrap";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productid } = useParams();
  const [product, setProduct] = useState({});
  const [isExistInCart, setIsExistInCart] = useState({});
  const [isExistInWishlist, setIsExistInWishlist] = useState({});
  const { user } = useSelector((state) => state.UserReducer);
  const cart = useSelector((state) => state.CartReducer);
  const wishlist = useSelector((state) => state.WishlistReducer);
  const { products, productDetails, isLoading } = useSelector(
    (state) => state.ProductReducer
  );

  useEffect(() => {
    const filteredProduct = products.filter((elem) => elem._id === productid);
    filteredProduct.length && getProductDetails(dispatch, filteredProduct[0]);
    filteredProduct.length && setProduct(filteredProduct[0]);
  }, [products]);

  useEffect(() => {
    if (productDetails.name) {
      // Checking the product is added in cart or not
      const existInCart = cart.cartData.filter(
        (element) =>
          element.productId === productid && element.userId === user.userId
      );
      existInCart.length
        ? setIsExistInCart(existInCart[0])
        : setIsExistInCart({});

      // Checking the product is added in wishlist or not
      const existInWishlist = wishlist.wishlistData.filter(
        (element) =>
          element.productId === productid && element.userId === user.userId
      );
      existInWishlist.length
        ? setIsExistInWishlist(existInWishlist[0])
        : setIsExistInWishlist({});
    }
  }, [productDetails, cart.cartData, wishlist.wishlistData]);

  return productDetails.name && !isLoading ? (
    <div className={styles.productDetailsContainer}>
      <section className={styles.leftSection}>
        <div className={styles.wishlist}>
          {isExistInWishlist.name ? (
            <AiFillHeart
              className={styles.removeWishlistIcon}
              onClick={() => removeWishlist(dispatch, isExistInWishlist._id)}
            />
          ) : (
            <AiOutlineHeart
              onClick={() => addWishlist(dispatch, product, user)}
              className={styles.addWishlistIcon}
              style={{ stroke: "silver", strokeWidth: "50" }}
            />
          )}
        </div>
        <div className={styles.productImageDiv}>
          <img
            className={styles.productImage}
            src={productDetails.thumbnails}
            alt={productDetails.name}
          />
        </div>
        <div className={styles.buttonDiv}>
          {isExistInCart.name ? (
            <button onClick={() => navigate("/cart")}>
              <FaShoppingCart /> GO TO CART
            </button>
          ) : (
            <button onClick={() => addCart(dispatch, product, user)}>
              <FaShoppingCart /> ADD TO CART
            </button>
          )}
          <button onClick={() => buyNow([product], navigate)}>
            <GiElectric /> BUY NOW
          </button>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.highlightsBox}>
          <p className={styles.productName}>{productDetails.name}</p>
          <div className={styles.ratingDiv}>
            <p className={styles.rating}>
              {productDetails.rating} <AiFillStar className={styles.starIcon} />
            </p>
            {productDetails.f_assured ? (
              <img className={styles.fAssured} src={fAssured} alt="F-Assured" />
            ) : (
              ""
            )}
          </div>
          <span className={styles.specialPrice}>Special price</span>
          <p className={styles.price}>
            <span className={styles.currentPrice}>
              ₹{productDetails.current_price}
            </span>{" "}
            <strike className={styles.originalPrice}>
              ₹{productDetails.original_price}
            </strike>
            <span className={styles.discount}>
              {productDetails.discount_percent}% off
            </span>
          </p>
          <h5>Highlights</h5>
          <hr className={styles.hr} />
          <ul className={styles.ul}>
            {productDetails.highlights.length ? (
              productDetails.highlights.map((elem, i) => {
                return (
                  <li key={i} className={styles.highlightsList}>
                    {elem}
                  </li>
                );
              })
            ) : (
              <div className={styles.empty}>
                <img src={emptyImage} alt="Empty Item" />
                <p>No highlights for this product!</p>
              </div>
            )}
          </ul>
        </div>
        {
          <div className={styles.specificationBox}>
            <h4>Specification</h4>
            <hr className={styles.hr} />
            {productDetails.specs.length ? (
              productDetails.specs.map((element, i) => {
                return element.details ? (
                  <div key={i}>
                    <h5>{element.title}</h5>
                    {element.details.map((elem, index) => {
                      return (
                        <div key={index} className={styles.property}>
                          <div>
                            <span>{elem.property}</span>
                          </div>
                          <div>
                            <span>{elem.value}</span>
                          </div>
                        </div>
                      );
                    })}
                    <hr className={styles.hr} />
                  </div>
                ) : (
                  ""
                );
              })
            ) : (
              <div className={styles.empty}>
                <img src={emptyImage} alt="Empty Item" />
                <p>No specification for this product!</p>
              </div>
            )}
          </div>
        }
      </section>
    </div>
  ) : (
    <div className={styles.productDetailsContainer}>
      <section className={styles.leftSection}>
        <Card style={{ width: "15rem", textAlign: "center", border: "none" }}>
          <div className={styles.productImageDiv}>
            <Card.Img variant="top" src={placeholderImage} />
          </div>
          <div className={styles.buttonDiv}>
            <Placeholder.Button />
            <Placeholder.Button />
          </div>
        </Card>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.highlightsBox}>
          <Card>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={10} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={10} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.specificationBox}>
          <Card>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={10} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={10} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
