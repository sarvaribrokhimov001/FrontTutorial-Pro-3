import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <h1 className="navbar__logo"> FrontTutorial 3 </h1>
        <li> <Link className="navbar__link" to="/home"> Home </Link> </li>
        <li> <Link className="navbar__link" to="/images"> Images </Link> </li>
        <li> <Link className="navbar__link" to="/icons"> Icons </Link> </li>
        <li> <Link to="/stages" className="navbar__link"> Stages </Link> </li>
        <li> <Link className="navbar__link" to="/contents"> Contents </Link> </li>
      </ul>
    </div>
  );
};
export default Navbar;