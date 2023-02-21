import React from 'react';
import styles from './Footer.module.css';
import {about, help, policy, social} from '../../Assets/FooterData/FooterData';
import {BsBagFill} from 'react-icons/bs';
import {GiAlliedStar, GiHelp} from 'react-icons/gi';
import {MdCardGiftcard} from 'react-icons/md';
import {
  FaCcAmex,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
} from 'react-icons/fa';
import {SiMastercard} from 'react-icons/si';
import {SlCreditCard} from 'react-icons/sl';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.topSection}>
        <div className={styles.linkSection}>
          <span>ABOUT</span>
          {about.map((elem, i) => (
            <p key={i}>
              <a href={elem.link} target={'_blank'} rel='noreferrer'>
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span>HELP</span>
          {help.map((elem, i) => (
            <p key={i}>
              <a href={elem.link} target={'_blank'} rel='noreferrer'>
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span>POLICY</span>
          {policy.map((elem, i) => (
            <p key={i}>
              <a href={elem.link} target={'_blank'} rel='noreferrer'>
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span>SOCIAL</span>
          {social.map((elem, i) => (
            <p key={i}>
              <a href={elem.link} target={'_blank'} rel='noreferrer'>
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <hr className={styles.verticleLine} />
        <div className={styles.linkSection}>
          <span>Mail Us:</span>
          <text>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </text>
        </div>
        <div className={styles.linkSection}>
          <span>Registered Ofiice Address:</span>
          <text>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
            Telephone: 044-45614700
          </text>
        </div>
      </section>
      <hr className={styles.horizonLine} />
      <section className={styles.bottomSection}>
        <p>
          <a
            href='https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect'
            target={'_blank'}
            rel='noreferrer'
          >
            <BsBagFill className={styles.icon} /> Become a Seller
          </a>
        </p>
        <p>
          <a
            href='https://brands.flipkart.com/'
            target={'_blank'}
            rel='noreferrer'
          >
            <GiAlliedStar className={styles.icon} /> Advertise
          </a>
        </p>
        <p>
          <a
            href='https://www.flipkart.com/the-gift-card-store?otracker=undefined_footer_footer_navlinks'
            target={'_blank'}
            rel='noreferrer'
          >
            <MdCardGiftcard className={styles.icon} /> Gift Card
          </a>
        </p>
        <p>
          <a
            href='https://www.flipkart.com/helpcentre?otracker=undefined_footer_footer_navlinks'
            target={'_blank'}
            rel='noreferrer'
          >
            <GiHelp className={styles.icon} /> Help Center
          </a>
        </p>
        <p>© 2007-2023 Flipkart.com</p>
        <p className={styles.cards}>
          <FaCcVisa className={styles.card} />
          <FaCcMastercard className={styles.card} />
          <SiMastercard className={styles.card} />
          <SlCreditCard className={styles.card} />
          <FaCcAmazonPay className={styles.card} />
          <FaCcApplePay className={styles.card} />
          <FaCcPaypal className={styles.card} />
          <FaCcAmex className={styles.card} />
        </p>
      </section>
    </footer>
  );
};

export default Footer;
