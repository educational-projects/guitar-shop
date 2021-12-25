import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './fallback-error.module.css';

function FallbackError(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.contentWrapper}>
        <b className={styles.title}>Упс, что-то пошло не так...</b>
        <p className={styles.text}>пожалуйста, обновите страницу или повторите попытку позже</p>
        <button
          className={styles.button}
          onClick={() => window.location.reload()}
        >
           Обновить страницу
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default FallbackError;
