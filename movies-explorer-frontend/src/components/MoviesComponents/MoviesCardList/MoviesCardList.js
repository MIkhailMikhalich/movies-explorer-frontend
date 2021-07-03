import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";

function MoviesCardList(props) {
  
  return (
    <section className="movies">
      {props.cards.map((item) => (
        <MoviesCard
          onUpdate={props.onUpdate}
          onSave={props.onSave}
          onDelete={props.onDelete}
          key={item.id}
          isInSaved={props.isInSaved}
          nameRU={item.nameRU}
          savedMovies={props.savedMovies}
          duration={item.duration}
          image={item.image}
          trailerLink={item.trailerLink}
          cardinfo={item}
        />
      ))}
    </section>
  );
}
export default MoviesCardList;
