import "./App.css";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Header from "../ComponentsForAll/Header/Header.js";
import Footer from "../ComponentsForAll/Footer/Footer";
import Main from "../Main/Main.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Menu from "../ComponentsForAll/Menu/Menu";
import { useState } from "react";
import React from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInSaved, setIsInSaved] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  let history = useHistory();
  React.useEffect(() => {
    const anchors = document.querySelectorAll(
      '.navtab__buttons-place a[href*="#"]'
    );

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, []);

  function handleMenuButton() {
    setIsMenuOpened(!isMenuOpened);
  }

  function handleEnterButton() {
    history.push("/signin");
  }

  function handleBackButton() {
    history.goBack();
  }

  function handleRegistrarionButton() {
    history.push("/signup");
  }
  function handleLogoPush() {
    history.push("/");
  }

  function handleMoviesPush() {
    history.push("/movies");
  }
  function handleSavedMoviesPush() {
    history.push("/saved-movies");
  }
  function handleProfile() {
    history.push("/profile");
  }

  return (
    <Switch>
      <Route exact onEnter={handleEnterButton} path="/">
        <Header
          onLogo={handleLogoPush}
          onEnter={handleEnterButton}
          onRegistration={handleRegistrarionButton}
          onMovies={handleMoviesPush}
          onSavedMovies={handleSavedMoviesPush}
          onProfile={handleProfile}
          onMenu={handleMenuButton}
          isLoggedIn={isLoggedIn}
        />
        <Main />
        <Menu
          onMain={handleLogoPush}
          onMovies={handleMoviesPush}
          onSavedMovies={handleSavedMoviesPush}
          onProfile={handleProfile}
          isMenuOpened={isMenuOpened}
        />

        <Footer />
      </Route>
      <Route path="/signup">
        <Register onLogo={handleLogoPush} onEnter={handleEnterButton} />
      </Route>
      <Route path="/signin">
        <Login
          onLogo={handleLogoPush}
          onRegistration={handleRegistrarionButton}
        />
      </Route>
      <Route path="/movies">
        <Header
          onLogo={handleLogoPush}
          onEnter={handleEnterButton}
          onRegistration={handleRegistrarionButton}
          onMovies={handleMoviesPush}
          onSavedMovies={handleSavedMoviesPush}
          onMenu={handleMenuButton}
          onProfile={handleProfile}
          isLoggedIn={isLoggedIn}
        />
        <Movies isInSaved={isInSaved} />
        <Main />
        <Menu
          onMain={handleLogoPush}
          onMovies={handleMoviesPush}
          onSavedMovies={handleSavedMoviesPush}
          onProfile={handleProfile}
          isMenuOpened={isMenuOpened}
        />

        <Footer />
      </Route>
      <Route path="/saved-movies">
        <Header
          onLogo={handleLogoPush}
          onEnter={handleEnterButton}
          onRegistration={handleRegistrarionButton}
          onMovies={handleMoviesPush}
          onSavedMovies={handleSavedMoviesPush}
          onMenu={handleMenuButton}
          onProfile={handleProfile}
          isLoggedIn={isLoggedIn}
        />
        <SavedMovies isInSaved={isInSaved} />
        <Main />
        <Menu
          onMain={handleLogoPush}
          onMovies={handleMoviesPush}
          onSavedMovies={handleSavedMoviesPush}
          onProfile={handleProfile}
          isMenuOpened={isMenuOpened}
        />
        <Footer />
      </Route>
      <Route path="/profile">
        <Header
          onLogo={handleLogoPush}
          onEnter={handleEnterButton}
          onRegistration={handleRegistrarionButton}
          onMovies={handleMoviesPush}
          onSavedMovies={handleSavedMoviesPush}
          onMenu={handleMenuButton}
          onProfile={handleProfile}
          isLoggedIn={isLoggedIn}
        />
        <Profile />
        <Menu
          onMain={handleLogoPush}
          onMovies={handleMoviesPush}
          onSavedMovies={handleSavedMoviesPush}
          onProfile={handleProfile}
          isMenuOpened={isMenuOpened}
        />
        <Main />
      </Route>
      <Route path="/*">
        <NotFound onBack={handleBackButton} />
      </Route>
    </Switch>
  );
}

export default App;
