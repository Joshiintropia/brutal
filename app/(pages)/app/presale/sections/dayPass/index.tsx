// DayPass.jsx
import Image from 'next/image';
import styles from './styles.module.css';
import ImageDayPass from '@/app/assets/img/presale/dayPass.jpg'
import IconB from '@/app/assets/icons/Brutal__emblema_sandbeige.png'

const Index = () => {
  return (
    <section className={styles.daypass}>
      <div className={styles.daypass__container}>
        <Image
          src={ImageDayPass}
          alt="Gym equipment background"
          fill
          className={styles.daypass__background}
          priority
        />
        
        <div className={styles.daypass__content}>
          <Image src={IconB} alt={''}  width={65} height={50} style={{marginBottom:'20px'}}/>
        
          <h1 className={styles.daypass__title}>DAY PASS</h1>
          
          <p className={styles.daypass__description}>
            Try our experience with a Day Pass! Access all our facilities, explore the
            state-of-the-art equipment, and participate in our group classes.
            Come and discover what it means to be part of Brutal Gym.
          </p>
          
          <button className={styles.daypass__button}>
            LEARN MORE
          </button>
        </div>
        </div>
        <div className={styles.daypass__footer}>
          <p className={styles.daypass__question}>
            Would you like to visit our facilities and experience the difference?
          </p>
          <button className={styles['daypass__button--secondary']}>
            GET THE DAY PASS
          </button>
        </div>
    </section>
  );
};

export default Index;