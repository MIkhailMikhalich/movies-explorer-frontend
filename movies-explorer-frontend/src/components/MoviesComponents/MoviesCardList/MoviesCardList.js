import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";

function MoviesCardList(props) {
  return (
    <section className="movies">
      {props.cards.map((item) => (
        <MoviesCard isInSaved={props.isInSaved}  name={item.name}
        time={item.time}
        pic={item.pic} />
      ))}
    </section>
  );
}
export default MoviesCardList;
