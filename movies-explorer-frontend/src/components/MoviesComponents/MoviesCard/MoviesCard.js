import React from "react";

function MoviesCard(props) {
  
  const [saved, setSaved] = React.useState(false);
  const mins = props.duration;
  
  React.useEffect(()=>{
    
    props.savedMovies.forEach((item)=>{if (item.movieId===props.cardinfo.id){setSaved(true)}})
  },[])

  function time(mins)
  {
    let hours=Math.trunc(mins/60);
    let minutes= mins%60;
    if (hours!=0)
    return (`${hours}ч ${minutes}м`)
    else
    return(`${minutes}м`)
  }
  function handleSave()
  {
    if(!saved){
    props.onSave(props.cardinfo);
    setSaved(true);
  }
    else{
    props.onDelete(props.cardinfo.id);
    setSaved(false);
    props.onUpdate();

  }
  
}
  return (
    <section className="card ">
      <div className="card__name-container">
        <div className="card__info">
          <p className="card__name">{props.nameRU}</p>
          <span className="card__time">{time(mins)}</span>
        </div>
        <button type="button" onClick={handleSave} className="button card__button">
          
          <div
            className={`card__button_icon ${saved && "card__button_saved-in-movies"}`} 
          ></div>
          
        </button>
      </div>
      <a className="card__link" href={props.trailerLink}>
      <img
        className="card__pic"
        src={`https://api.nomoreparties.co${
          props.image.url }`}
        alt={`Постер к фильму: ${props.nameRU}`}
      />
      </a>
    </section>
  );
}
export default MoviesCard;
