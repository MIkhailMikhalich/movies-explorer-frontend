import React from "react";
import currentUserContext from "../contexts/CurrentUserContext.js";
function Profile(props) {
  const currentUser = React.useContext(currentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [nameToched, setNameToched] = React.useState(false);
  const [emailToched, setEmailToched] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const [emailErr, setEmailErr] = React.useState("Почта не может быть пустой");
  const [nameErr, setNameErr] = React.useState("Имя не может быть пустым");
  const profileName = currentUser.name;

  

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);
  React.useEffect(() => {
    if(nameErr||emailErr||(name===currentUser.name)||(email===currentUser.email))
    {
      setFormValid(false)
    }
    else
    {
      setFormValid(true)
    }
  }, [nameErr, emailErr,name,email]);
  function handleBlur(e) {
    switch (e.target.name) {
      case "name":
        setNameToched(true);
        break;
      case "email":
        setEmailToched(true);
        break;
    }
  }
  function handleNameChange(e) {
    setName(e.target.value);
    if(e.target.value.length === 0)
    {
      setNameErr("Имя не может быть пустым")
    }
    else
    {
      setNameErr("")
    }
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test((e.target.value).toLowerCase()))
    {
      setEmailErr("Некорректная почта")
      if(e.target.value.length === 0){
      setEmailErr("Почта не может быть пустой")
      }
    }
    else
    {
      setEmailErr("")
    }
   
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
            value={name}
            onBlur={handleBlur}
            name="name"
            onChange={handleNameChange}
            className="profile__input"
            placeholder={`${name}`}
          ></input>
        </div>
        {nameToched && nameErr && (
            <span
              id="name-error"
              className="register-login__input_error-message"
            >
              {nameErr}
            </span>
          )}
        <div className="profile__input-container">
          <p className="profile__input-name">Почта</p>
          
          <input
            value={email}
            onBlur={handleBlur}
            name="email"
            onChange={handleEmailChange}
            className="profile__input"
            placeholder={`${email}`}
          ></input>
        </div>
        {emailToched && emailErr && (
            <span
              id="email-error"
              className="register-login__input_error-message"
            >
              {emailErr}
            </span>
          )}
      </form>
      <div className="profile__buttons">
        <button
        disabled={!formValid}
          type="button"
          onClick={handleSubmit}
          id="edit-button"
          className="button"
        >
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
