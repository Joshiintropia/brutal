import styles from './styles.module.css';
import Image from 'next/image';
import ImageModalitie1 from '@/app/assets/img/modalities/ModalitieProgram1.jpg'
import ImageModalitie2 from '@/app/assets/img/modalities/ModalitieProgram2.png'
import ImageModalitie3 from '@/app/assets/img/modalities/ModalitieProgram3.png'

const Index = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.showcase__container}>
        <div className={styles.showcase__header}>
          <h2 className={styles.showcase__title}>
            ESCAPE <span className={styles.showcase__titleItalic}>the</span> <br />
            ORDINARY
          </h2>
          <p className={styles.showcase__description}>
            At Brutal, we promote a holistic approach to improving the body and mind,
            focusing on balance, discipline, and consistency. Each person has their
            own pace and goals, and our mission is to support you in every step of your
            transformation.
          </p>
        </div>

        <div className={styles.showcase__cards}>
          <a href="#" className={styles.showcase__card}>
            <Image 
              src={ImageModalitie1}
              alt="Health Programs" 
              className={styles.showcase__cardImage}
            />
            <div className={styles.showcase__cardContent}>
              <h3 className={styles.showcase__cardTitle}>HEALTH PROGRAMS</h3>
              <button className={styles.showcase__cardButton}>LEARN MORE</button>
            </div>
          </a>

          <a href="#" className={styles.showcase__card}>
            <Image 
              src={ImageModalitie2}
              alt="Personalized Coaching" 
              className={styles.showcase__cardImage}
            />
            <div className={styles.showcase__cardContent}>
              <h3 className={styles.showcase__cardTitle}>PERSONALIZED COACHING</h3>
              <button className={styles.showcase__cardButton}>LEARN MORE</button>
            </div>
          </a>

          <a href="#" className={styles.showcase__card}>
            <Image 
              src={ImageModalitie3}
              alt="Gym Training" 
              className={styles.showcase__cardImage}
            />
            <div className={styles.showcase__cardContent}>
              <h3 className={styles.showcase__cardTitle}>GYM TRAINING</h3>
              <button className={styles.showcase__cardButton}>LEARN MORE</button>
            </div>
          </a>
        </div>

        <button className={styles.showcase__contactButton}>CONTACT US</button>
      </div>
    </section>
  );
};

export default Index;