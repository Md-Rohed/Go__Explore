import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";
import "./NavLinks.css";
import { Button } from "../../../Components/Button";
import { useHistory } from "react-router-dom";
import { Posts } from "../../../Components/Posts/Posts";

const NavLinks = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const history = useHistory();
  const auth = useContext(AuthContext);

  function onLgout() {
    console.log(history);
    auth.logout();
    history.push("/auth");
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Go&Explore
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Tourist" className="nav-links">
                Tourist place
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/map" className="nav-links">
                Map
              </Link>
            </li>
            {auth.isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-links" to="/post">
                    Post
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-links" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-links" to="/mypost">
                    My Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-links" to="/create">
                    Create Post
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-links" onClick={onLgout}>
                    Logout
                  </button>
                </li>
              </>
            )}
            {!auth.isLoggedIn && (
              <li className="nav-item">
                <Link to="/auth" className="nav-links">
                  Login/Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavLinks;
