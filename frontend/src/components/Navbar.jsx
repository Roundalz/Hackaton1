import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      

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
