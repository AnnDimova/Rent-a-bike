import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Header.css";
import logo from "../../img/bike-logo.png";

export const Header = () => {
  const { auth } = useContext(AuthContext);

  return (
    <header className="header">
      <nav>
        <Link to="/">
          <img
            src={logo}
            className="d-inline-block align-top logo-header"
            alt=""
          />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Bikes</Link>
          </li>

          {auth.accessToken ? (
            <>
              <li>
                <Link to="/create">Create Listing</Link>
              </li>
              <li>
                <Link to="/my-profile">My Profile</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
