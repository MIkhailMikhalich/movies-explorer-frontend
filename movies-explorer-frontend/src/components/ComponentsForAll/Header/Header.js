import logo from "../../../images/logo.svg";
import Navigation from "../Navigation/Navigation.js";

import NavigationForAuthorised from "../NavigationForAuthorised/NavigationForAuthorised";
import React from "react";

function Header(props) {
  const loggedin = props.isLoggedIn;

  return (
    <header className="header ">
      <button className="button header__logo-button" onClick={props.onLogo}>
        <img className="header__logo" src={logo} alt="Логотип" />
      </button>
      {}
      {!loggedin ? (
        <Navigation
          onEnter={props.onEnter}
          onRegistration={props.onRegistration}
        />
      ) : (
        <NavigationForAuthorised
          onMenu={props.onMenu}
          onMovies={props.onMovies}
          onSavedMovies={props.onSavedMovies}
          onProfile={props.onProfile}
        />
      )}
    </header>
  );
}
export default Header;
