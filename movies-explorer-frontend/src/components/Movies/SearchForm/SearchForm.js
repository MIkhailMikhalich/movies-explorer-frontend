import icon from "../../../images/icon.svg";
import React from "react";

function SearchForm(props) {
  const [line, setLine] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  function handleShort() {
    setIsChecked(!isChecked);
  }
  React.useEffect(() => {
    props.setFilteredList(
     props.movies
        .filter((item) => {
          return item.nameRU.toLowerCase().includes(line);
        })
        
    );
    if (line === "") props.setFilteredList([]);
    if (isChecked && line !== "")
      props.setFilteredList(
        props.movies
          .filter((item) => {
            if (item.duration < 40)
              return item.nameRU.toLowerCase().includes(line);
          })
          
      );
  }, [line, isChecked]);

  function handleChange(e) {
    e.preventDefault();
    setLine(e.target.value.toLowerCase());
  }
  function handleFind(e) {
    e.preventDefault();
    setLine(document.querySelector(".search-form__input").value.toLowerCase());
  }
  return (
    <section className="search-form">
      <form className="search-form__form">
        <img className="search-form__icon" alt="Лупа" src={icon}></img>
        <input
          onChange={handleChange}
          className="search-form__input"
          placeholder="Фильмы"
        ></input>
        <button
          onClick={handleFind}
          className="button search-form__button"
          type="submit"
        >
          Найти
        </button>
      </form>
      <input
        id="search-form__checkbox"
        required="required"
        className="search-form__checkbox"
        type="checkbox"
      />
      <label
        onClick={handleShort}
        for="search-form__checkbox"
        className="search-form__label"
      >
        Короткометражки
      </label>
    </section>
  );
}
export default SearchForm;
