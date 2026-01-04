
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>🎨 Art Gallery</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
