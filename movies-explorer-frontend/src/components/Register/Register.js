import logo from "../../images/logo.svg";
import React from "react";

function Register(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameToched, setNameToched] = React.useState(false);
  const [emailToched, setEmailToched] = React.useState(false);
  const [passwordToched, setPasswordToched] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const [emailErr, setEmailErr] = React.useState("Почта не может быть пустой");
  const [nameErr, setNameErr] = React.useState("Имя не может быть пустым");
  const [passwordErr, setPasswordErr] = React.useState(
    "Пароль не может быть пустым"
  );
  React.useEffect(() => {
    if (passwordErr || emailErr || nameErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailErr, passwordErr, nameErr]);
  function handleEmailChange(e) {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(e.target.value.toLowerCase())) {
      setEmailErr("Некорректная почта");
      if (e.target.value.length === 0) {
        setEmailErr("Почта не может быть пустой");
      }
    } else {
      setEmailErr("");
    }
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (e.target.value.length === 0) {
      setPasswordErr("Пароль не может быть пустым");
    } else if (e.target.value.length < 8) {
      setPasswordErr("Пароль должен быть минимум 8 символов");
    } else {
      setPasswordErr("");
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

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegistration(password, email, name);
  }

  function handleEnter() {
    props.onLogin();
  }
  function handleBlur(e) {
    switch (e.target.name) {
      case "password":
        setPasswordToched(true);
        break;
      case "email":
        setEmailToched(true);
        break;
      case "name":
        setNameToched(true);
        break;
    }
  }
  return (
    <div className="register">
      <div className="register-login__header">
        <button className="button" onClick={props.onLogo}>
          <img className="register-login__logo" src={logo} alt="Логотип" />
        </button>
        <h1 className="register-login__heading">Добро пожаловать!</h1>
      </div>
      <form onSubmit={handleSubmit} className="register-login__form">
        <p className="register-login__input_name">Имя</p>
        <input
          onBlur={handleBlur}
          id="name"
          name="name"
          className="register-login__input"
          onChange={handleNameChange}
        ></input>
        {nameToched && nameErr && (
            <span
              id="name-error"
              className="register-login__input_error-message"
            >
              {nameErr}
            </span>
          )}
        <p className="register-login__input_name">Email</p>
        <input
          onBlur={handleBlur}
          id="email"
          name="email"
          type="email"
          className="register-login__input"
          onChange={handleEmailChange}
        ></input>
        {emailToched && emailErr && (
            <span
              id="email-error"
              className="register-login__input_error-message"
            >
              {emailErr}
            </span>
          )}

        <p className="register-login__input_name">Пароль</p>
        <input
          onBlur={handleBlur}
          id="password"
          name="password"
          type="password"
          className="register-login__input register-login__input_last"
          onChange={handlePasswordChange}
          minLength="8"
        ></input>
        {passwordToched && passwordErr && (
          <span
            id="password-error"
            className="register-login__input_error-message"
          >
            {passwordErr}
          </span>
        )}

        <button disabled={!formValid} type="submit" className="button register-login__button">
          Зарегистрироватся
        </button>
        <button
          type="button"
          className="button register-login__button-to-login"
          onClick={handleEnter}
        >
          <p>Уже зарегистрированы?</p>
          <p className="register-login__text">Войти</p>
        </button>
      </form>
    </div>
  );
}
export default Register;
