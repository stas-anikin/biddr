import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const { currentUser, onSignOut } = props;
  return (
    <div className="ui menu">
      <NavLink to="/" className="item">
        <img
          src="https://as1.ftcdn.net/jpg/00/56/57/76/500_F_56577647_KPsCxcMXNQSIDhpW8tfzABCGPeSsaJNk.jpg"
          height="30px"
        />
      </NavLink>

      <div className="right menu">
        <NavLink to="/" className="item">
          Home
        </NavLink>
        <NavLink to="/auctions" className="item">
          Auctions
        </NavLink>
        {currentUser ? (
          <>
            <NavLink exact to="/auctions/new" className="item">
              Create an Auction
            </NavLink>
            <NavLink to="/auctions" onClick={onSignOut} className="item">
              Sign Out
            </NavLink>
            <span className="item">
              Signed in as {currentUser.full_name}
            </span>
          </>
        ) : (
          <React.Fragment>
            <NavLink exact to="/sign_in" className="item">
              Sign In
            </NavLink>
            <NavLink exact to="/sign_up" className="item">
              Sign Up
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default NavBar;
