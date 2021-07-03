import React from "react";
import avatar from "../../../images/Avatar.svg";

function NavigationForAuthorised(props) {

  

  function handleMenu() {
    props.onMenu();
   
  }
  function handleMovies() {
    props.onMovies();
  }
  function handleSavedMovies() {
    props.onSavedMovies();
  }

  function handleProfile() {
    props.onProfile();
  }
 

  return (
    <div className="buttons-place">
      
      <input type="checkbox" id="checkbox" className="buttons-place__checkbox"/>
        <label onClick={handleMenu} htmlFor="checkbox">
            <div className="buttons-place__hamburger">
                <span className="buttons-place__hamburger_bar bar1"></span>
                <span className="buttons-place__hamburger_bar bar2"></span>
                <span className="buttons-place__hamburger_bar bar3"></span>
                <span className="buttons-place__hamburger_bar bar4"></span>
            </div>
        </label>

      <button onClick={handleMovies} className="button navigation__auth-button">
        Фильмы
      </button>

      <button
        onClick={handleSavedMovies}
        className="button navigation__auth-button"
      >
        Сохранённые фильмы
      </button>

      <div className="navigation__auth-user">
        <button
          onClick={handleProfile}
          className="button navigation__auth-button"
        >
          Аккаунт
        </button>
        <div className="navigation__auth-avatar">
          <img alt="Аватар пользователя" src={avatar}></img>
        </div>
      </div>
    </div>
  );
}
export default NavigationForAuthorised;
