import saveicon from "../../../images/saveicon.svg";
import React from "react";

function MoviesCard(props) {
  return (
    <section className="card">
      <div className="card__name-container">
        <div className="card__info">
          <p className="card__name">{props.name}</p>
          <span className="card__time">{props.time}</span>
        </div>
        <button type="button" className="button card__button">
          
          <img
            className={`card__button_icon ${
              props.isInSaved && "card__button_saved"
            }`}
            src={saveicon}
            alt="Кнопка"
          ></img>
          
        </button>
      </div>
      <img
        className="card__pic"
        src={props.pic}
        alt={`Постер к фильму: ${props.name}`}
      />
    </section>
  );
}
export default MoviesCard;
