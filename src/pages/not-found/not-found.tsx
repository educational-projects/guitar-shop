import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFound(): JSX.Element {
  return (
    <div className="wrapper">
      <Header/>
      <p>404. Такой страницы не существует</p>
      <Footer/>
    </div>
  );
}

export default NotFound;
