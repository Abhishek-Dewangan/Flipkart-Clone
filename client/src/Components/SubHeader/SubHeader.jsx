import React from 'react';
import styles from './SubHeader.module.css';
import {Link} from 'react-router-dom';
import {subHeaderData} from '../../Assets/SubHeaderData';

const SubHeader = () => {
  return (
    <div className={styles.subHeaderContainer}>
      {subHeaderData.map((elem, i) => {
        return (
          <div key={i}>
            <Link>
              <img src={elem.image} alt={elem.name} />
              <p>{elem.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SubHeader;
