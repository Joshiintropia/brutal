import styles from './styles.module.css';
import Image from 'next/image';
import BrutalImage from '@/app/assets/img/beginners/discoverBrutal.jpg'
import BrutalImage2 from '@/app/assets/img/beginners/discoverBrutal2.jpg'

const Index = () => {
  return (
    <div className={styles.wrapper}>
    <section className={styles.container}>
      <h1 className={styles.mainTitle}>DISCOVER MORE <br />ABOUT US</h1>
      
      <div className={styles.cardsContainer}>
        {/* Card de Beneficios */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={BrutalImage}
              alt="Benefits of being a member"
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>BENEFITS OF BEING A MEMBER</h2>
              <button className={styles.learnMore}>
                LEARN MORE
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card de What Makes Us Different */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={BrutalImage2}
              alt="What makes us different"
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>WHAT MAKES US DIFFERENT?</h2>
              <button className={styles.learnMore}>
                LEARN MORE
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Index;