import "./App.css";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import currentUserContext from "../contexts/CurrentUserContext.js";
import Header from "../ComponentsForAll/Header/Header.js";
import Footer from "../ComponentsForAll/Footer/Footer";
import Main from "../Main/Main.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import api from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import Menu from "../ComponentsForAll/Menu/Menu";
import ModalWindow from "../ModalWindow/ModalWindow";
import ProtectedRoute from "../Route/ProtectedRoute";
import CongratsWindow from "../CongratsWindow/CongratsWindow";
import { useState } from "react";
import React from "react";

function App() {
  const [searchLine, setSearchLine] = React.useState(localStorage.getItem("search"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isCongratsOpen, setIsCongratsOpen] = useState(false);
  const [message, setMessage] = useState("");

  let history = useHistory();

 
  
  React.useEffect(()=>{
    localStorage.setItem("search",searchLine);
  },[searchLine])
  React.useEffect(() => {
    setMessage("Пока все хорошо :)");
    tokenCheck();
    if (isLoggedIn) {
      let jwt = localStorage.getItem("jwt");
      api
        .getAuthProfile(jwt)
        .then((data) => {
          setCurrentUser(data.data);
        })
        .catch((err) => {
          console.log(err);
          setIsModalOpened(true);
          setMessage(err);
        });

      api
        .getMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          console.log(err);
          setIsModalOpened(true);
          setMessage(err);
        });

      moviesApi
        .getMovies()
        .then((data) => {
          setMovies(data);
        })
        .catch((err) => {
          console.log(err);
          setIsModalOpened(true);
          setMessage(err);
        });
    }
  }, [isLoggedIn]);

  function closeModal() {
    setIsModalOpened(false);
    setIsCongratsOpen(false);
  }

  function updateData() {
    api
      .getMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
        setIsModalOpened(true);
        setMessage(err);
      });
  }

  function tokenCheck() {
    if (localStorage.getItem("jwt")) {
      let jwt = localStorage.getItem("jwt");
      api
        .getAuthProfile(jwt)
        .then((data) => {
          setIsLoggedIn(true);
          history.push("./");
        })
        .catch((err) => {
          console.log(err);
          setIsModalOpened(true);
          setMessage(err);
        });
    }
  }
  function handleRegistration(password, email, name) {
    return api
      .registerUser(password, email, name)
      .then((res) => {
        history.push("/signin");
        return res;
      })
      .catch((err) => {
        console.log(err);
        setIsModalOpened(true);
        setMessage(err);
      });
  }
  function handleUpdateUser(name, email) {
    api
      .setProfileData(name, email)
      .then((data) => {
        setCurrentUser(data.data);
        setIsCongratsOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setIsModalOpened(true);
        setMessage(err);
      });
  }
  function handleLogin(password, email) {
    return api
      .authorizeUser(password, email)
      .then((data) => {
        history.push("/main");
        localStorage.setItem("jwt", data.token);
        tokenCheck();
        return;
      })
      .catch((err) => {
        console.log(err);
        setIsModalOpened(true);
        setMessage(err);
      });
  }
  function handleSave(data) {
    api
      .postMovie(data)
      .then(data)
      .catch((err) => {
        console.log(err);
        setIsModalOpened(true);
        setMessage(err);
      });
    updateData();
  }

  function handleDelete(ID) {
    api
      .deleteMovie(ID)
      .then(() => {
        api
          .getMovies()
          .then((data) => {
            setSavedMovies(data);
          })
          .catch((err) => {
            console.log(err);
            setIsModalOpened(true);
            setMessage(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setIsModalOpened(true);
        setMessage(err);
      });
  }
  function handleDeleteFromMovies(ID) {
    api
      .getMovies()
      .then((data) => {
        data.forEach((item) => {
          if (item.movieId === ID) handleDelete(item._id);
        });
      })
      .catch((err) => {
        console.log(err);
        setIsModalOpened(true);
        setMessage(err);
      });
  }
  function handleExit() {
    setIsLoggedIn(false);
    history.push("./signin");
    localStorage.removeItem("jwt");
  }

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
      <currentUserContext.Provider value={currentUser}>
        <Route exact onEnter={handleEnterButton} path="/">
          <Header
            onLogo={handleLogoPush}
            onEnter={handleEnterButton}
            onRegistration={handleRegistrarionButton}
            onMovies={handleMoviesPush}
            onSavedMovies={handleSavedMoviesPush}
            onProfile={handleProfile}
            onMenu={handleMenuButton}
            isMenuOpened={isMenuOpened}
            isLoggedInForHeader={isLoggedIn}
            isLoggedIn={isLoggedIn}
          />
          <Main />
          <Menu
            onMain={handleLogoPush}
            onMovies={handleMoviesPush}
            onSavedMovies={handleSavedMoviesPush}
            onProfile={handleProfile}
            onMenu={handleMenuButton}
            isMenuOpened={isMenuOpened}
          />

          <Footer />
        </Route>
        <Route path="/signup">
          <Register
            onLogo={handleLogoPush}
            onLogin={handleEnterButton}
            onRegistration={handleRegistration}
          />
        </Route>
        <Route path="/signin">
          <Login
            onLogo={handleLogoPush}
            onRegistration={handleRegistrarionButton}
            onLogin={handleLogin}
          />
        </Route>
        <div className="page__content">
          <ProtectedRoute
            path="/movies"
            onLogo={handleLogoPush}
            onEnter={handleEnterButton}
            onRegistration={handleRegistrarionButton}
            onMovies={handleMoviesPush}
            onSavedMovies={handleSavedMoviesPush}
            onMenu={handleMenuButton}
            onProfile={handleProfile}
            isMenuOpened={isMenuOpened}
            isLoggedIn={isLoggedIn}
            isLoggedInForHeader={isLoggedIn}
            component={Header}
          />
          <ProtectedRoute
            path="/movies"
            onUpdate={updateData}
            onDelete={handleDeleteFromMovies}
            onSave={handleSave}
            isExist={isExist}
            setIsExist={setIsExist}
            movies={movies}
            savedMovies={savedMovies}
            searchLine ={searchLine}
            setSearchLine={setSearchLine}
            component={Movies}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/movies"
            onMain={handleLogoPush}
            onMovies={handleMoviesPush}
            onSavedMovies={handleSavedMoviesPush}
            onMenu={handleMenuButton}
            onProfile={handleProfile}
            isMenuOpened={isMenuOpened}
            component={Menu}
            isLoggedIn={isLoggedIn}
          />

          <ProtectedRoute
            path="/movies"
            component={Footer}
            isLoggedIn={isLoggedIn}
          />

          <ProtectedRoute
            path="/saved-movies"
            onLogo={handleLogoPush}
            onEnter={handleEnterButton}
            onRegistration={handleRegistrarionButton}
            onMovies={handleMoviesPush}
            onSavedMovies={handleSavedMoviesPush}
            onMenu={handleMenuButton}
            onProfile={handleProfile}
            isMenuOpened={isMenuOpened}
            isLoggedIn={isLoggedIn}
            isLoggedInForHeader={isLoggedIn}
            component={Header}
          />
          <ProtectedRoute
            path="/saved-movies"
            onUpdate={updateData}
            onDelete={handleDelete}
            isExist={isExist}
            setIsExist={setIsExist}
            movies={savedMovies}
            searchLine ={searchLine}
            setSearchLine={setSearchLine}
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/saved-movies"
            onMain={handleLogoPush}
            onMovies={handleMoviesPush}
            onSavedMovies={handleSavedMoviesPush}
            onMenu={handleMenuButton}
            onProfile={handleProfile}
            isMenuOpened={isMenuOpened}
            isLoggedIn={isLoggedIn}
            component={Menu}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={Footer}
            isLoggedIn={isLoggedIn}
          />

          <ProtectedRoute
            path="/profile"
            onLogo={handleLogoPush}
            onEnter={handleEnterButton}
            onRegistration={handleRegistrarionButton}
            onMovies={handleMoviesPush}
            onSavedMovies={handleSavedMoviesPush}
            onMenu={handleMenuButton}
            onProfile={handleProfile}
            isMenuOpened={isMenuOpened}
            isLoggedIn={isLoggedIn}
            isLoggedInForHeader={isLoggedIn}
            component={Header}
          />
          <ProtectedRoute
            path="/profile"
            onExit={handleExit}
            onUpdateUser={handleUpdateUser}
            component={Profile}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/profile"
            onMain={handleLogoPush}
            onMovies={handleMoviesPush}
            onSavedMovies={handleSavedMoviesPush}
            onMenu={handleMenuButton}
            onProfile={handleProfile}
            isMenuOpened={isMenuOpened}
            component={Menu}
            isLoggedIn={isLoggedIn}
          />
        </div>
        <ModalWindow
          onCLose={closeModal}
          isOpen={isModalOpened}
          message={message}
        />{" "}
        <CongratsWindow onCLose={closeModal} isOpen={isCongratsOpen} />
      </currentUserContext.Provider>
      <Route path="/*">
        <NotFound onBack={handleBackButton} />
      </Route>
    </Switch>
  );
}

export default App;
