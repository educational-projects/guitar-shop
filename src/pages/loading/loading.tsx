import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import styles from './loading.module.css';

function Loading(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header/>
      <Loader/>
      <Footer/>
    </div>
  );
}

export default Loading;
