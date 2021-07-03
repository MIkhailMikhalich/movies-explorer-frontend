import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";
import Preloader from "../../Movies/Preloader/Preloader";
import React from "react";

function SavedMoviesCardList(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);

    setTimeout(function () {
      setIsLoading(false);
    }, 1500);
  }, [props.cards]);
  return isLoading ? (
    <Preloader list={props.cards} />
  ) : (
    <section className="movies">
      {props.cards.map((item) => (
        <SavedMoviesCard
          onUpdate={props.onUpdate}
          onSave={props.onSave}
          onDelete={props.onDelete}
          key={item._id}
          nameRU={item.nameRU}
          duration={item.duration}
          image={item.image}
          trailerLink={item.trailerLink}
          cardinfo={item}
        />
      ))}
    </section>
  );
}
export default SavedMoviesCardList;
