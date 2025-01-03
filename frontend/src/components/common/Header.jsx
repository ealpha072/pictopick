import { Link } from "react-router-dom";
import '../../styles/components/Header.css'

const Header = () => {
  return (
    <div className="Header">
      <nav class="navbar justify-content-between">
        <Link class="navbar-brand">Navbar</Link>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </div>
  );
};

export default Header;
