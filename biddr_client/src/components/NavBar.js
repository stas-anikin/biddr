import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = ({ currentUser, onSignOut, showTime }) => {
    const handleSignOutClick = event => {
        event.preventDefault();
        if (typeof onSignOut === "function") {
          onSignOut();
        }
    };
    return (
        <div className="ui secondary pointing menu">
            <div className="left menu">
            <NavLink exact to="/" className="item">
                <img className="ui mini image" src="https://dygtyjqp7pi0m.cloudfront.net/i/5667/8604315_1m.jpg?v=8CBEF049EB11640" alt="coins" />
            </NavLink>
            </div>
            <div className="right menu">
                <NavLink exact to="/" className="item">
                    Home
                </NavLink>
                <NavLink exact to="/auctions" className="item">
                    Auctions
                </NavLink>
                <NavLink exact to="/auctions/new" className="item">
                    New Auction
                </NavLink>
                {!currentUser && (
                <>
                    <NavLink exact to="/sign_in" className="ui black button">
                        Sign In
                    </NavLink>
                    <NavLink exact to="/sign_up" className="ui black button">
                    Sign Up
                    </NavLink>
                </>
                )}
                {currentUser && (
                <>
                    <div className="item">Hello {currentUser.full_name}</div>
                    <button
                    // href=""
                    className="ui inverted red button"
                    onClick={handleSignOutClick}
                    >
                    Sign Out
                    </button>
                </>
                )}
            </div>
        </div>
    );
};