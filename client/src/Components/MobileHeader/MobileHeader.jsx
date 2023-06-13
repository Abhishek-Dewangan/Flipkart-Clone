import React from 'react';
import styles from './MobileHeader.module.css';
import { AiOutlineMenu } from 'react-icons/ai';

export const MobileHeader = () => {
  return (
    <div className={styles.container}>
      <AiOutlineMenu />
    </div>
  );
};
