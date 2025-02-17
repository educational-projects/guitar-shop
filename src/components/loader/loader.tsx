import styles from './loader.module.css';

function Loader(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loader;
