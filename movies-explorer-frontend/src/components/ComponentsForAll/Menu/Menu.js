import avatar from "../../../images/Avatar.svg";
import cross from "../../../images/close.svg"
import React from "react";

function Menu(props) {
  

  function handleMain() {
    props.onMain();
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
    <section className={`menu ${props.isMenuOpened && "menu__visible"} `}>
      <div className="menu__buttons-container">
        <button onClick={props.onMenu} className="menu__close-button button"><img alt="Крестик" src={cross} className="menu__close-img"/></button>
        <div className="menu__buttons-place">
          <button onClick={handleMain} className="button menu__button">
            Главная
          </button>
          <button onClick={handleMovies} className="button menu__button">
            Фильмы
          </button>

          <button onClick={handleSavedMovies} className="menu__button button">
            Сохранённые фильмы
          </button>
        </div>
        <div className="menu__user">
          <button onClick={handleProfile} className="menu__button button">
            Аккаунт
          </button>
          <div className="menu__avatar">
            <img alt="Аватар пользователя" src={avatar}></img>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Menu;
