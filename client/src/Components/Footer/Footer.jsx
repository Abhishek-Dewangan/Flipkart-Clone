import styles from './Footer.module.css';
import { about, help, policy, social } from '../../Assets/FooterData';
import { BsBagFill } from 'react-icons/bs';
import { GiAlliedStar, GiHelp } from 'react-icons/gi';
import { MdCardGiftcard } from 'react-icons/md';
import {
  FaCcAmex,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
} from 'react-icons/fa';
import { SiMastercard } from 'react-icons/si';
import { SlCreditCard } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.topSection}>
        <div className={styles.linkSection}>
          <span className={styles.spanText}>ABOUT</span>
          {about.map((elem, i) => (
            <p key={i}>
              <a
                className={styles.ancorLink}
                href={elem.link}
                target={'_blank'}
                rel='noreferrer'>
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span className={styles.spanText}>HELP</span>
          {help.map((elem, i) => (
            <p key={i}>
              <a
                className={styles.ancorLink}
                href={elem.link}
                target={'_blank'}
                rel='noreferrer'>
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span className={styles.spanText}>POLICY</span>
          {policy.map((elem, i) => (
            <p key={i}>
              <a
                className={styles.ancorLink}
                href={elem.link}
                target={'_blank'}
                rel='noreferrer'>
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <div className={styles.linkSection}>
          <span className={styles.spanText}>SOCIAL</span>
          {social.map((elem, i) => (
            <p key={i}>
              <a
                className={styles.ancorLink}
                href={elem.link}
                target={'_blank'}
                rel='noreferrer'>
                {elem.name}
              </a>
            </p>
          ))}
        </div>
        <hr className={styles.verticleLine} />
        <div className={styles.linkSection}>
          <span className={styles.spanText}>Mail Us:</span>
          <p className={styles.text}>
            Flipkart Internet Private Limited,
            <br />
            Buildings Alyssa, Begonia & Clove
            <br />
            Embassy Tech Village, Outer Ring Road,
            <br />
            Devarabeesanahalli Village,
            <br />
            Bengaluru, 560103, Karnataka, India
          </p>
        </div>
        <div className={styles.linkSection}>
          <span className={styles.spanText}>Registered Ofiice Address:</span>
          <p className={styles.text}>
            Flipkart Internet Private Limited,
            <br />
            Buildings Alyssa, Begonia & Clove
            <br />
            Embassy Tech Village, Outer Ring Road,
            <br />
            Devarabeesanahalli Village,
            <br />
            Bengaluru, 560103, Karnataka,
            <br />
            India CIN : U51109KA2012PTC066107
            <br />
            Telephone: 044-45614700
          </p>
        </div>
      </section>
      <hr className={styles.horizonLine} />
      <section className={styles.bottomSection}>
        <p>
          <a
            className={styles.ancorLink}
            href='https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect'
            target={'_blank'}
            rel='noreferrer'>
            <BsBagFill className={styles.icon} /> Become a Seller
          </a>
        </p>
        <p>
          <a
            className={styles.ancorLink}
            href='https://brands.flipkart.com/'
            target={'_blank'}
            rel='noreferrer'>
            <GiAlliedStar className={styles.icon} /> Advertise
          </a>
        </p>
        <p>
          <a
            className={styles.ancorLink}
            href='https://www.flipkart.com/the-gift-card-store?otracker=undefined_footer_footer_navlinks'
            target={'_blank'}
            rel='noreferrer'>
            <MdCardGiftcard className={styles.icon} /> Gift Card
          </a>
        </p>
        <p>
          <a
            className={styles.ancorLink}
            href='https://www.flipkart.com/helpcentre?otracker=undefined_footer_footer_navlinks'
            target={'_blank'}
            rel='noreferrer'>
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
