import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './not-found.module.css';

function NotFound(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.contentWrapper}>
        <b className={styles.title}>404. Данной страницы не существует</b>
        <Link
          to={'/'}
          className={styles.link}
        >
           Вернуться на главную
        </Link>
      </div>
      <Footer/>
    </div>
  );
}

export default NotFound;
