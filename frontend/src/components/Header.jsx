import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <h1>ebd bn'b</h1>
      <p>Places to stay, all over Egypt</p>
      <nav>
        <Link to="/">All listings</Link>
        <Link to="/add">Add a listing</Link>
      </nav>
    </header>
  );
}

export default Header;
