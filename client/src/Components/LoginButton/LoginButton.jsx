import React from 'react';
import styles from './LoginButton.module.css';
import emptyImage from '../../Assets/Images/empty.png';

const LoginButton = ({handleShowSignin, heading, text}) => {
  return (
    <div className={styles.loginButtonContainer}>
      <div className={styles.emptyBox}>
        <img src={emptyImage} alt='Empty Item' />
        <h4>{heading}</h4>
        <p>{text}</p>
        <button className={styles.loginBtn} onClick={() => handleShowSignin()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
