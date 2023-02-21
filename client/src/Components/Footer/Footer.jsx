import React from 'react';
import styles from './Footer.module.css';
import {about, help, policy, social} from '../../Assets/FooterData/FooterData';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.topSection}>
        <div className={styles.linkSection}>
          <span>ABOUT</span>
          {about.map((elem, i) => (
            <p key={i}>
              <a href={elem.link}>{elem.name}</a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span>HELP</span>
          {help.map((elem, i) => (
            <p key={i}>
              <a href={elem.link}>{elem.name}</a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span>POLICY</span>
          {policy.map((elem, i) => (
            <p key={i}>
              <a href={elem.link}>{elem.name}</a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span>SOCIAL</span>
          {social.map((elem, i) => (
            <p key={i}>
              <a href={elem.link}>{elem.name}</a>
            </p>
          ))}
        </div>
        <hr className={styles.horizonLine} />
        <div className={styles.linkSection}>
          <span>Mail Us:</span>
          <p>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </p>
        </div>
        <div className={styles.linkSection}>
          <span>Registered Ofiice Address:</span>
          <p>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
            Telephone: 044-45614700
          </p>
        </div>
      </section>
      <section className={styles.bottomSection}></section>
    </footer>
  );
};

export default Footer;
