import icon from "../../../images/icon.svg";
import React from "react";

function SearchForm(props) {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <img className="search-form__icon" alt="Лупа" src={icon}></img>
        <input className="search-form__input" placeholder="Фильмы"></input>
        <button className="button search-form__button" type="submit">Найти</button>
      </form>
        <input id="search-form__checkbox" className="search-form__checkbox" type="checkbox" />
        <label for="search-form__checkbox" className="search-form__label">Короткометражки</label>
    </section>
  );
}
export default SearchForm;
