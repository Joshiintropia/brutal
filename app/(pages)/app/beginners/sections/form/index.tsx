'use client'
import { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import IconB from '@/app/assets/icons/Brutal__emblema_sandbeige.png'

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logoImage}>
        <Image src={IconB} alt={''} width={44} height={32}/>
        </div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>REGISTER NOW</h1>
        <h2 className={styles.subtitle}>AND START YOUR JOURNEY</h2>
        
        <form className={styles.form}>
          <input 
            type="text"
            placeholder="NAME"
            className={styles.input}
          />
          
          <input 
            type="email"
            placeholder="EMAIL"
            className={styles.input}
          />
          
          <select 
            className={styles.select}
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            <option value="" disabled>PICK A PLAN</option>
            <option value="basic">Basic Plan</option>
            <option value="premium">Premium Plan</option>
            <option value="pro">Pro Plan</option>
          </select>
          
          <input 
            type="tel"
            placeholder="PHONE NUMBER"
            className={styles.input}
          />
          
          <button type="submit" className={styles.submitButton}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;