import React from "react";
import currentUserContext from "../contexts/CurrentUserContext.js";
function Profile(props) {
  const currentUser = React.useContext(currentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const profileName=currentUser.name;
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(name, email);
  }
  return (
    <section className="profile">
      <h1 className="profile__heading">{`Привет, ${profileName}`}</h1>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile__input-container">
          <p className="profile__input-name">Имя</p>
          <input
            onChange={handleNameChange}
            className="profile__input"
            placeholder={`${name}`}
          ></input>
        </div>
        <div className="profile__input-container">
          <p className="profile__input-name">Почта</p>
          <input
            onChange={handleEmailChange}
            className="profile__input"
            placeholder={`${email}`}
          ></input>
        </div>
      </form>
      <div className="profile__buttons">
        <button type="button" onClick={handleSubmit} className="button">
          Редактировать
        </button>
        <button
          onClick={props.onExit}
          type="button"
          className="button profile__exit"
        >
          Выйти из аккаутна
        </button>
      </div>
    </section>
  );
}
export default Profile;
