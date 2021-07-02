import cross from "../../images/close.svg";
import error from "../../images/Error.svg";
import React from "react";

function CongratsWindow(props) {
      
  return (
    <section className={`modalwindow ${props.isOpen && "modalwindow_visible"}`}>
      <button onClick={props.onCLose} className="button modalwindow__overlay" />
      <div className="modalwindow__window">
        <button
          onClick={props.onCLose}
          className="modalwindow__close-button button"
        >
          <img
            className="modalwindow__close-pic"
            src={cross}
            alt="Крестик"
          ></img>
        </button>
        <div className="modalwindow__message-area">
          <h1 className="modalwindow__heading">Все хорошо! 👍</h1>
        </div>
        <button onClick={props.onCLose} className=" congrats__button button">Ок</button>
      </div>
    </section>
  );
}

export default CongratsWindow;
