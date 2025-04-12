import styles from './styles.module.css'
import Image from 'next/image';
import ButtonSecondary from '../../../components/buttonSecondary';
import ImageModalitie1 from '@/app/assets/img/modalities/BrutalModalities1.jpg'
import ImageModalitie2 from '@/app/assets/img/modalities/BrutalModalities2.jpg'
import ImageModalitie3 from '@/app/assets/img/modalities/BrutalModalities3.jpg'
const Index = () =>{
return (
    <section className={styles.training}>
        <div className={styles.training__container}>
    <div className={styles.training__cards}>
    <article className={styles['training-card']}>
      <div className={styles['training-card__image-container']}>
        <Image 
          src={ImageModalitie1}
          alt="Weight lifting training" 
          className={styles['training-card__image']}
        />
      </div>
      <h3 className={styles['training-card__title']}>WEIGHT LIFTING</h3>
      <button className={styles['training-card__button']}>LEARN MORE</button>
    </article>

    <article className={styles['training-card']}>
      <div className={styles['training-card__image-container']}>
        <Image 
          src={ImageModalitie2}
          alt="Spinning class" 
          className={styles['training-card__image']}
        />
      </div>
      <h3 className={styles['training-card__title']}>SPINNING</h3>
      <button className={styles['training-card__button']}>LEARN MORE</button>
    </article>

    <article className={styles['training-card']}>
      <div className={styles['training-card__image-container']}>
        <Image 
          src={ImageModalitie3}
          alt="Cardio classes" 
          className={styles['training-card__image']}
        />
      </div>
      <h3 className={styles['training-card__title']}>CARDIO CLASSES</h3>
      <button className={styles['training-card__button']}>LEARN MORE</button>
    </article>
  </div>
  </div>
  </section>
)
}
export default Index;