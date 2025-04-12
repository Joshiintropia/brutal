import styles from "./styles.module.css";

const Index = () => {
  return (
    <div className={styles.headWrapper}>
      <div className={styles.headContainer}>
        <h3 className={styles.headSubtitle}>THIS WEEKS SCHEDULE</h3>
        <h1 className={styles.headTitle}>BOOK YOUR CLASS</h1>
        <button className={styles.buttonHeadBanner}>
          <p className={styles.buttonheadText}>BRUTAL CURICO</p>
        </button>
      </div>
    </div>
  );
};

export default Index;
