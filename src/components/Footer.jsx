import '../styles/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__logo"> FrontTutorial 3 </h2>

        <ul className="footer__links">
          <li> <Link className="navbar__link" to="/home"> Home </Link> </li>
          <li> <Link className="navbar__link" to="/images"> Images </Link> </li>
          <li> <Link className="navbar__link" to="/icons"> Icons </Link> </li>
          <li> <Link to="/stages" className="navbar__link"> Stages </Link> </li>
          <li> <Link className="navbar__link" to="/contents"> Contents </Link> </li>
        </ul>
        
        <p className="footer__copy"> © 2026 FrontTutorial | Built with React </p>
      </div>
    </footer>
  )}
export default Footer;