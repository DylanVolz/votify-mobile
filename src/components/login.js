import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

export const Login = props => {
  const { handleLogin } = props

  return (
    <div id="login-root">
      <h3>Please login to continue</h3>
      <button id="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

const mapState = null;
const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(Login));


// <a id="login-btn" href="https://us-central1-votify-b9360.cloudfunctions.net/login">
//         Login
//       </a>
