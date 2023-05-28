import { Link } from "react-router-dom";

function Header() {

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="/images/beers-cheers.png"
              alt="HomePage"
              height="80"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
