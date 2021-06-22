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
      <input type="checkbox" id="checkbox" class="buttons-place__checkbox" />
      <label for="checkbox">
        <button className="buttons-place__menu button" onClick={handleMenu}>
          <div class="buttons-place__hamburger">
            <span id="bar1" class="buttons-place__hamburger_bar "></span>
            <span id="bar2" class="buttons-place__hamburger_bar "></span>
            <span id="bar3" class="buttons-place__hamburger_bar "></span>
            <span id="bar4" class="buttons-place__hamburger_bar "></span>
          </div>
        </button>
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
