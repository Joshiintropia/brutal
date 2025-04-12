import styles from './styles.module.css';
import ImageSpace1 from '@/app/assets/img/clubs/carousel-spaces.jpg';
import ImageSpace2 from '@/app/assets/img/clubs/carousel-spaces2.jpg';

export default function Spaces() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>OUR BRUTAL SPACES</h2>
      <div className={styles.carousel}>
        <div className={styles.card} style={{ background:`url(${ImageSpace1.src})`,                    backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        backgroundPosition:'center'}}>
          <span className={styles.label}>CURICÓ</span>
        </div>
        <div className={styles.card} style={{ background:`url(${ImageSpace2.src})`,                    backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        backgroundPosition:'center' }}>
          <span className={styles.label}>CENTRO</span>
        </div>
        <div className={styles.card} style={{ background:`url(${ImageSpace1.src})`,                    backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        backgroundPosition:'center' }}>
          <span className={styles.label}>SUCURSAL 2</span>
        </div>
        <div className={styles.card} style={{ background:`url(${ImageSpace2.src})`,                    backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        backgroundPosition:'center' }}>
          <span className={styles.label}>SUCURSAL 3</span>
        </div>
      </div>
      <button className={styles.button}>SEE MORE</button>
    </div>
  );
}