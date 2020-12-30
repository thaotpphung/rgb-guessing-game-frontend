import React from "react";
import "./Stripe.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/user/user.actions";
import { Fragment } from "react";

const Stripe = ({ currentMode, modes, message, onButtonClick , auth, logoutUser}) => {
  return (
    <div className="stripe">
      <a className="label selected">{currentMode.label}</a>
      <a className="label" href="/">New Game</a>
      <span className="message">{message}</span>
      {auth.isAuthenticated ? (
        <Fragment>
          <Link className="label" to="/users/:id">PROFILE</Link>
          <div className="label" onClick= {() => logoutUser()}>
            SIGN OUT
          </div>
        </Fragment>
			) : (
        <Fragment>
        <Link className="label" to="/signin">SIGN IN</Link>
        <Link className="label"to="/signup">SIGN UP</Link>
      </Fragment>
			)}

    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Stripe);

