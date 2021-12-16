import FooterContacts from '../footer-contacts/footer-contacts';
import FooterInfo from '../footer-info/footer-info';
import FooterNav from '../footer-nav/footer-nav';
import FooterSocials from '../footer-socials/footer-socials';
import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <Logo/>
        <FooterSocials/>
        <FooterInfo/>
        <FooterNav/>
        <FooterContacts/>
      </div>
    </footer>
  );
}

export default Footer;
