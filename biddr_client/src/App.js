//npm packages
import './App.css';
import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//user defined
import AuctionShowPage from "./components/AuctionShowPage";
import { AuctionIndexPage } from "./components/AuctionIndexPage";
import { WelcomePage } from "./components/WelcomePage";
import { NavBar } from "./components/NavBar";
import { AuctionNewPage } from "./components/AuctionNewPage";
import { Session } from "./api/session";
import { SignInPage } from "./components/SignInPage";
import { User } from "./api/user";
import { AuthRoute } from "./components/AuthRoute";
import { SignUpPage } from "./components/SignUpPage";

const App = () => {
    const [appState, setAppState] = useState({
      currentUser: null,
    })

    const getUser = useCallback(() => {
        User.current().then(data => {
          if (typeof data.id !== "number") {
            setAppState({ ...appState, currentUser: null });
          } else {
            setAppState({ ...appState, currentUser: data });
          }
        });
    }, [appState]);

    const destroySession = () => {
        Session.destroy().then(setAppState({...appState, currentUser: null }))
    }

    useEffect(() => {
        getUser();
    }, [getUser])

    
    return (
        <BrowserRouter>
            <header>
                <NavBar 
                    currentUser={appState.currentUser}
                    onSignOut={destroySession}
                />
            </header>
            <div className="ui container segment">
                <Switch>
                    <Route exact path="/" component={WelcomePage} />
                    <Route exact path="/auctions" component={AuctionIndexPage} />
                    <AuthRoute
                        isAuthenticated={!!appState.currentUser}
                        component={AuctionNewPage}
                        path="/auctions/new"
                        exact
                    />
                    <Route path="/auctions/:id" component={AuctionShowPage} />
                    <Route
                        path="/sign_up"
                        render={routeProps => (
                        <SignUpPage {...routeProps} onSignUp={getUser} />
                        )}
                    />
                    <Route
                        path="/sign_in"
                        render={routeProps => (
                        <SignInPage {...routeProps} onSignIn={getUser} />
                        )}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;