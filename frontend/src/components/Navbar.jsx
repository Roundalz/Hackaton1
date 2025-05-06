import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Asegúrate que esta ruta sea válida
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <Link to="/" className="nav-logo">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="nav-logo-img" />
          </div>
          <span className="nav-logo-text">GestorElectric</span>
        </Link>
      </div>

      {/* Enlaces de navegación */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contratos">Contratos</Link></li>
        <li><Link to="/pagos">Pagos</Link></li>
        <li><Link to="/personal">Personal</Link></li>
        <li><Link to="/vacaciones">Vacaciones</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
