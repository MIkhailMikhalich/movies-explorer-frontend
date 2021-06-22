import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesComponents/MoviesCardList/MoviesCardList";

import cards from "../../utils/cards.json"

function Movies(props) {
  return (
    <main>
    <SearchForm/>
    <MoviesCardList cards={cards}/>
    <div className="movies__button-container">
    <button className="button movies__button" type="button">Ещё</button>
    </div>
    </main>
  );
}

export default Movies;
