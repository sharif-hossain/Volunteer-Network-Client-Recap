import React, { useContext} from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../../App";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  const provider = new firebase.auth.GoogleAuthProvider();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // const user = result.user;
        setLoggedInUser(result.user);
        history.replace(from);
      })
      .catch(error => {
        console.log(error)
      });
  };

  return (
    <div className="login-bg">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="center-logo">
            <img
              src="https://i.ibb.co/GCp0kyB/logo.png"
              alt=""
              className="img-logo my-4 img-fluid"
            />
          </div>
          <div className="login-area text-center d-flex align-items-center justify-content-center">
            <div>
              <h3 className="mb-4">Login With</h3>
              <div onClick={handleGoogleSignIn} className="google-btn mb-3">
                Continue with Google
              </div>
              <p>
                Don't have an account? <a href="/login">Create an account</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;
