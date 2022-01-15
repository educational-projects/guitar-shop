import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function Main(): JSX.Element {
  return (
    <div className="wrapper">
      <Header/>
      <h1
        style={
          {height: '510px', textAlign: 'center'}
        }
      >Главная страница в разработке, перейдите в каталог
      </h1>
      <Footer/>
    </div>
  );
}

export default Main;
