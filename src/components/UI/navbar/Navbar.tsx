import { Link } from 'react-router-dom';
function Navbar() {
  console.log('Navbar');

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/">Главная </Link>
        <Link to="/about">О сайте</Link>
      </div>
    </div>
  );
}

export default Navbar;
