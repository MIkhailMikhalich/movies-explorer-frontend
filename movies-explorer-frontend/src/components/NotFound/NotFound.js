
import React from "react";

function NotFound(props) {
 function handleBack(){
     props.onBack()
 }
  return (
    <div className="not-found">
    <div className="not-found__container">
      <h1 className="not-found__error">404</h1>
      <p className="not-found__text">Страница не найдена</p>
    </div>
      <button className="button not-found__button" onClick={handleBack}>Назад</button>
    </div>
  );
}
export default NotFound;
