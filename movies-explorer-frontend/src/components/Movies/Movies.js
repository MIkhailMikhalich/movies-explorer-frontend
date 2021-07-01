import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "../MoviesComponents/MoviesCardList/MoviesCardList";
import React from "react";

function Movies(props) {
  const [filteredList, setFilteredList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showedList, setShowedList] = React.useState([]);
  const [numberOfMovies, setNunberOfMovies] = React.useState(0);
  function handleOnMore() {
    if (window.innerWidth >= 1280) {
      return setNunberOfMovies(numberOfMovies+3);
    } else if (window.innerWidth <= 1250) {
      return setNunberOfMovies(numberOfMovies+2);
    }
  }
  function handleWindow() {
    if (window.innerWidth >= 1280) {
      return setNunberOfMovies(3);
    } else if (window.innerWidth <= 1250) {
      return setNunberOfMovies(2);
    }
  }
  function handleResize(e) {
    setTimeout(function () {
      if (e.target.innerWidth >= 1280) {
        return setNunberOfMovies(3);
      } else if (e.target.innerWidth <= 1250) {
        return setNunberOfMovies(2);
      }
    }, 1000);
  }
  function HandleDeleteFromFilter(ID) {
    props.onDelete(ID);
  }

  React.useEffect(() => {
    setShowedList(filteredList.slice(0, numberOfMovies));
  }, [numberOfMovies]);

  React.useEffect(() => {
    handleWindow();
    window.addEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (
      filteredList.length >= numberOfMovies &&
      showedList.length !== filteredList.length
    )
      props.setIsExist(true);
    else props.setIsExist(false);
  }, [showedList]);

  React.useEffect(() => {
    setIsLoading(true);
    if (filteredList.length !== 0)
      setTimeout(function () {
        setIsLoading(false);
      }, 1000);
    setShowedList(filteredList.slice(0, numberOfMovies));
  }, [filteredList]);
  return (
    <main>
      <SearchForm
        numberOfMovies={numberOfMovies}
        setshowedList={setShowedList}
        onChange={handleWindow}
        onUpdate={props.onUpdate}
        setIsExist={props.setIsExist}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        savedMovies={props.savedMovies}
        movies={props.movies}
      />
      {isLoading ? (
        <Preloader list={filteredList} />
      ) : (
        <MoviesCardList
          onUpdate={props.onUpdate}
          filteredList={filteredList}
          savedMovies={props.savedMovies}
          onSave={props.onSave}
          onDelete={HandleDeleteFromFilter}
          cards={showedList}
        />
      )}
      <div
        className={`movies__button-container ${
          props.isExist && "movies__button-container_visible"
        }`}
      >
        <button
          onClick={handleOnMore}
          className="button movies__button"
          type="button"
        >
          Ещё
        </button>
      </div>
    </main>
  );
}

export default Movies;
