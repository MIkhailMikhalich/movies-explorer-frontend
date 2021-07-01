import cross from "../../images/close.svg";
import error from "../../images/Error.svg";
import React from "react";

function ModalWindow(props) {
    let message = "Ошибка сервера";
    let status = "500";
    if (props.message.includes("Failed to fetch"))
    {
        message="Ошибка сервера";
        status="500";
    }
    else
    if (props.message.includes("409"))
    {
        message="Извините но почта уже занята";
        status="409";
    }
    else
    if (props.message.includes("403"))
    {
        message="Извините но у вас недостаточно прав";
        status="403";
    }
    else
    if (props.message.includes("401"))
    {
        message="Неверны почта или пароль";
        status="401";
    }
    else
    if (props.message.includes("400"))
    {
        message="Извините но отправленные данные не верны";
        status="409";
    }
    else
    if (props.message.includes("404"))
    {
        message="Не найдено";
        status="404";
    }
    
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
        <img
          className="modalwindow__pic"
          src={error}
          alt="Ой ой, что-то пошло не так"
        ></img>
        <div className="modalwindow__message-area">
          <h1 className="modalwindow__heading">Ой, ошибка 🤔</h1>
          <p className="modalwindow__status">{`Статус: ${status}`}</p>
          <p className="modalwindow__message">{`Сообщение: ${message}`}</p>
        </div>
      </div>
    </section>
  );
}

export default ModalWindow;
