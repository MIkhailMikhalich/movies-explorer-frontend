import React from "react";

function Profile(props) {
  const profilename = "Виталий";
  return (
    <section className="profile">
      <h1 className="profile__heading">{`Привет, ${profilename}`}</h1>
      <form className="profile__form">
        <div className="profile__input-container">
          <p className="profile__input-name">Имя</p>
          <input className="profile__input"></input>
        </div>
        <div className="profile__input-container">
          <p className="profile__input-name">Почта</p>
          <input className="profile__input"></input>
        </div>
      </form>
      <div className="profile__buttons">
        <button type="button" className="button">
          Редактировать
        </button>
        <button type="button" className="button profile__exit">
          Выйти из аккаутна
        </button>
      </div>
    </section>
  );
}
export default Profile;
