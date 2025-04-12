'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import ImageLogoBlack from '@/app/assets/img/presale/brutal_logo_black.jpg'
const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState('quarterly');

  const plans = [
    {
      id: 'semester',
      title: 'SEMESTER PROGRAM',
      description: ['Transform your life for 6 months + 1 month free with no hidden costs.',
                    'Full access to our team of qualified teachers and group classes designed to take your training to the next level. '],
      duration: '6M + 1M FREE',
      price: '109.99',
      features: [
        'Registration included',
        'Activation included',
        '3 invitations for a new friend (Thursday to Sunday)'
      ]
    },
    {
      id: 'quarterly',
      title: 'QUARTERLY PROGRAM',
      description: ['Transform your life for 3 months with no hidden costs + 1 month free.',
        'Full access to our team of qualified teachers and group classes designed to take your training to the next level.'
      ],
      duration: '3M + 1M FREE',
      price: '79.99',
      features: [
        'Registration included',
        'Activation included',
        '3 invitations for a new friend (Thursday to Sunday)'
      ]
    },
    {
      id: 'annual',
      title: 'ANNUAL PROGRAM',
      description: ['Transform your life for 12 months + 1 month free with no hidden costs.',
        'Full access to our team of qualified teachers and group classes designed to take your training to the next level.',
      ],
      duration: '12M + 1MONTH FREE (ONLY FOR THE FIRST 20 PEOPLE TO PURCHASE)',
      price: '189.99',
      features: [
        'Registration included',
        'Activation included',
        '3 invitations for a new friend (Thursday to Sunday)'
      ]
    }
  ];

  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__container}>
        <div className={styles.pricing__header}>
          <h2 className={styles.pricing__title}>SELECT YOUR PLAN:</h2>
          <p className={styles.pricing__description}>
            At Brutal we offer a variety of plans to suit your needs and lifestyle. Giving you the best quality and attention in every aspect, to give you the best possible experienceChoose the one that best suits your goals.
          </p>
        </div>

        <div className={styles.pricing__cards}>
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`${styles.pricing__card} ${selectedPlan === plan.id ? styles['pricing__card--selected'] : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <h3 className={styles.pricing__cardTitle}>{plan.title}</h3>
              {plan.description.map((desc, index)=>(
                <p className={styles.pricing__cardDescription} key={index} >{desc}</p>                
              ))}
              <p className={styles.pricing__cardDescription_i}>includes:</p>              
              <div className={styles.pricing__cardDetails}>
                <p className={styles.pricing__cardDuration}>{plan.duration}</p>
                <ul className={styles.pricing__cardFeatures}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.pricing__cardFooter}>
                <p className={styles.pricing__cardPrice}>
                  <span className={styles.pricing__cardCurrency}>$</span>
                  {plan.price}
                </p>
                <div className={styles.cart_card_box}>
                <button className={styles.pricing__cardButton}>ADD TO CART</button>
                <Image className={styles.pricing__cardIcon} src={ImageLogoBlack} alt={''}></Image>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pricing__footer}>
           <div className={styles.pricing_footerBox}></div> 
           <div>          <button className={styles.pricing__additionalServices}>
            ADDITIONAL SERVICES
          </button></div>
            <div className={styles.pricing__payments}>
            <Image src="/payment-methods.png" alt="Payment methods" width={150} height={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;