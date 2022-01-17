import { FooterNavTypes } from './const';

function FooterNav(): JSX.Element {
  return (
    <section className="footer__nav-section footer__nav-section--links">
      <h2 className="footer__nav-title">Информация</h2>
      <ul className="footer__nav-list">
        {FooterNavTypes.map((label) => (
          <li key={label} className="footer__nav-list-item">
            <a className="link" href="#top">{label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FooterNav;
