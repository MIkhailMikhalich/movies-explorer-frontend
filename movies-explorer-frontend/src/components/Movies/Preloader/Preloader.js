import preloader from "../../../images/loading.svg";
import React from "react";

function Preloader(props) {
  const [isMessageShown, setIsMessageShown] = React.useState(false)
  React.useEffect(()=>{
    setIsMessageShown(false)
    if (props.list.length === 0)
    setIsMessageShown(true)
  }, [props.list.length] );
  
  return (
    <section className="preloader">
       {!isMessageShown?  (<img className="preloader__image" src={preloader} alt="Загрузка..."></img>):
        (<p className="preloader__message">Ничего не найдено</p>)}
    </section>
  );
}

export default Preloader;
