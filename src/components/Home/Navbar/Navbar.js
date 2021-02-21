import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-light my-2">
      <Link to="/">
        <img
          className="img-logo"
          src="https://i.ibb.co/GCp0kyB/logo.png"
          alt=""
        />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Donation
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Events
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Blogs
            </a>
          </li>
        </ul>
        {loggedInUser ? (
          <div>
            <Link to="/register">
              <button class="btn btn-success my-2 my-sm-0 ml-3" type="submit">
                Register
              </button>
            </Link>

            <Link to="/admin">
              <button class="btn btn-dark my-2 my-sm-0 ml-3" type="submit">
                Admin
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <h6 className="ml-4">{loggedInUser.displayName}</h6>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
