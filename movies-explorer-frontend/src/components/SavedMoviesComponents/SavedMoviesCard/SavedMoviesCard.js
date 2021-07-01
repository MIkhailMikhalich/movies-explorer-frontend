import React from "react";

function SavedMoviesCard(props) {
  const mins = props.duration;
  function time(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (hours != 0) return `${hours}ч ${minutes}м`;
    else return `${minutes}м`;
  }
  
  function handleDelete() {
    props.onDelete(props.cardinfo._id);
    props.onUpdate();
  }
  return (
    <section className="card ">
      <div className="card__name-container">
        <div className="card__info">
          <p className="card__name">{props.nameRU}</p>
          <span className="card__time">{time(mins)}</span>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="button card__button"
        >
          <div className="card__button_icon card__button_saved"></div>
        </button>
      </div>
      <a className="card__link" href={props.trailerLink}>
        <img
          className="card__pic"
          src={`${props.image}`}
          alt={`Постер к фильму: ${props.nameRU}`}
        />
      </a>
    </section>
  );
}
export default SavedMoviesCard;
