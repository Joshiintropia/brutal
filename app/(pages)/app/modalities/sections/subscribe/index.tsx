import styles from './styles.module.css'

const Index = () => {
  return (
    <section className={styles.subscribe}>
      <div className={styles.subscribe__container}>
        <div className={styles.subscribe__content}>
        <div className={styles.subscribe__curved}>
  <svg viewBox="0 0 100 100" width="100" height="100">
    <path
      id="curve"
      fill="none"
      d="M50,10 a40,40 0 0,1 0,80 a40,40 0 0,1 0,-80"
    />
    <text>
      <textPath 
        href="#curve" 
        startOffset="50%" 
        textAnchor="middle"
      >
        THE CALM MAKES <tspan className={styles.subscribe__curvedItalic}>the</tspan> DIFFERENCE
      </textPath>
    </text>
  </svg>
</div>
          
          <h2 className={styles.subscribe__title}>
            SUBSCRIBE TO OUR PROGRAMS AND GET 15% OFF
          </h2>  
          <button className={styles.subscribe__button}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;