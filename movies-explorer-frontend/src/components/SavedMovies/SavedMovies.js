import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesComponents/MoviesCardList/MoviesCardList";

import cards from "../../utils/cards.json"

function SavedMovies(props) {
  return (
    <main>
    <SearchForm/>
    <MoviesCardList isInSaved={props.isInSaved}  cards={cards}/>
    </main>
  );
}

export default SavedMovies;
