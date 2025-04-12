'use client'
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import BrutalIcon from '@/app/assets/icons/Brutal__emblema_sandbeige.png'
const Index = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div className={styles.logoWrapper}>
          <Image
            src={BrutalIcon}
            alt="B Logo"
            width={200}
            height={200}
            className={styles.logo}
            priority
          />
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.title}>TRANSFORM YOURSELF</h1>
          <p className={styles.description}>
            Take the first step towards a better version of yourself. At our
            gym, we offer you the tools, support and motivation you need
            to transform your body, your health and your well-being.
          </p>
          <button className={styles.seeMoreButton}>
            SEE MORE
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;