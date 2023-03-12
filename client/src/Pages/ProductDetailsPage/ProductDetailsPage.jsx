import React, {useEffect} from 'react';
import styles from './ProductDetailsPage.module.css';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetails} from '../../Services/Actions/ProductAction';
import {FaShoppingCart} from 'react-icons/fa';
import {GiElectric} from 'react-icons/gi';
import {AiFillStar} from 'react-icons/ai';
import fAssured from '../../Assets/Images/f-assured.png';
import emptyImage from '../../Assets/Images/empty.png';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const {productid} = useParams();
  const {products, productDetails} = useSelector(
    (state) => state.ProductReducer
  );
  useEffect(() => {
    const product = products.filter((elem) => elem._id === productid);
    product.length && getProductDetails(dispatch, product[0]);
  }, [products]);

  useEffect(() => {
    productDetails.name && console.log(productDetails);
  }, [productDetails]);

  return (
    productDetails.name && (
      <div className={styles.productDetailsContainer}>
        <section className={styles.leftSection}>
          <div className={styles.productImageDiv}>
            <img
              className={styles.productImage}
              src={productDetails.thumbnails}
              alt={productDetails.name}
            />
          </div>
          <div className={styles.buttonDiv}>
            <button>
              <FaShoppingCart /> ADD TO CART
            </button>
            <button>
              <GiElectric /> BUY NOW
            </button>
          </div>
        </section>
        <section className={styles.rightSection}>
          <div className={styles.highlightsBox}>
            <p className={styles.productName}>{productDetails.name}</p>
            <div className={styles.ratingDiv}>
              <p className={styles.rating}>
                {productDetails.rating}{' '}
                <AiFillStar className={styles.starIcon} />
              </p>
              {productDetails.f_assured ? (
                <img
                  className={styles.fAssured}
                  src={fAssured}
                  alt='F-Assured'
                />
              ) : (
                ''
              )}
            </div>
            <span className={styles.specialPrice}>Special price</span>
            <p className={styles.price}>
              <span className={styles.currentPrice}>
                ₹{productDetails.current_price}
              </span>{' '}
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
                  <img src={emptyImage} alt='Empty Item' />
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
                    ''
                  );
                })
              ) : (
                <div className={styles.empty}>
                  <img src={emptyImage} alt='Empty Item' />
                  <p>No specification for this product!</p>
                </div>
              )}
            </div>
          }
        </section>
      </div>
    )
  );
};

export default ProductDetailsPage;
