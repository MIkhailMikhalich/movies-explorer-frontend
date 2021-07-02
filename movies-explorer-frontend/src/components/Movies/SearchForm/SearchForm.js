import icon from "../../../images/icon.svg";
import React from "react";

function SearchForm(props) {
  const [isChecked, setIsChecked] = React.useState(false);
  function handleShort() {
    setIsChecked(!isChecked);
  }
  React.useEffect(()=>{
    document.querySelector(".search-form__input").value=props.searchLine;
    filterList();
  },[])
  React.useEffect(() => {
   filterList();
  }, [props.searchLine, isChecked]);

  function filterList()
  {
    props.setFilteredList(
      props.movies
         .filter((item) => {
           
           return item.nameRU.toLowerCase().includes(props.searchLine);
         })
     );
     if (props.searchLine==="") props.setFilteredList("")
     if (isChecked && props.searchLine !== "")
       props.setFilteredList(
         props.movies
           .filter((item) => {
             if (item.duration < 40)
               return item.nameRU.toLowerCase().includes(props.searchLine);
           })
           
       );
  }
  function handleChange(e) {
    e.preventDefault();
  }
  function handleFind(e) {
    e.preventDefault();
    props.setSearchLine(document.querySelector(".search-form__input").value);
    props.setSearchLine(document.querySelector(".search-form__input").value.toLowerCase());
    filterList();
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
