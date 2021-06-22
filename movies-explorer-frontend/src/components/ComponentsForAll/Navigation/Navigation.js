import React from "react";

function Navigation(props) {
  function handleRegistration() {
    props.onRegistration();
  }
  function handleEnter() {
    props.onEnter();
  }

  return (
    <div className="buttons-place">
      <button
        className=" button header__register-button"
        onClick={handleRegistration}
      >
        Регистрация
      </button>
      <button className=" button header__enter-button" onClick={handleEnter}
          >
        Войти
      </button>
    </div>
  );
}
export default Navigation;
