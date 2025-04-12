import Image from 'next/image';
import styles from './styles.module.css';
import ImageModalitie1 from '@/app/assets/img/modalities/ModalitieProgram1.jpg'
import ImageModalitie2 from '@/app/assets/img/modalities/ModalitieProgram2.png'
import ImageModalitie3 from '@/app/assets/img/modalities/ModalitieProgram3.png'

const Index = () => {
  return (
    <div className={styles.programs}>
      <div className={styles.programs__container}>
        <div className={styles.programs__item}>
          <div className={styles.programs__imageWrapper}>
            <Image
              src={ImageModalitie1}
              alt="Health Programs"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className={styles.programs__content}>
            <h2 className={styles.programs__title}>Health Programs</h2>
            <button className={styles.programs__button}>Learn More</button>
          </div>
          <button className={styles.programs__cart}>ADD TO CART</button>
        </div>

        <div className={styles.programs__item}>
          <div className={styles.programs__imageWrapper}>
            <Image
              src={ImageModalitie2}
              alt="Personalized Coaching"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.programs__content}>
            <h2 className={styles.programs__title}>Personalized Coaching</h2>
            <button className={styles.programs__button}>Learn More</button>
          </div>
          <button className={styles.programs__cart}>ADD TO CART</button>
        </div>

        <div className={styles.programs__item}>
          <div className={styles.programs__imageWrapper}>
            <Image
              src={ImageModalitie3}
              alt="Gym Training"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.programs__content}>
            <h2 className={styles.programs__title}>Gym Training</h2>
            <button className={styles.programs__button}>Learn More</button>
          </div>
          <button className={styles.programs__cart}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
