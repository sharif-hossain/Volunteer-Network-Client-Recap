import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import "./Navbar.css";

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        {loggedInUser.email ? (
          <button
            className="btn btn-warning"
            onClick={() => setLoggedInUser({})}
          >
            {loggedInUser.displayName}[Logout]
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary mr-3">Register</button>
          </Link>
        )}
        {
          <Link to="/admin">
            <button className="btn btn-secondary">Admin</button>
          </Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;
