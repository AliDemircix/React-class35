import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <Link to={'/'} className="nav-link">
        Products
      </Link>
      <Link to={'/favorites'} className="nav-link">
        Favorites
      </Link>
    </div>
  );
}

export default Nav;
