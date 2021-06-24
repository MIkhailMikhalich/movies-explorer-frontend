import React from "react";

function NavTab(props) {
  return (
    <div className="navtab">
      <div className="navtab__sign">
        <p className="navtab__heading">
          Учебный проект студента факультета Веб-разработки.
        </p>
        <div className="navtab__buttons-place">
          <a href="#about-project" className="link navtab__link" >
            <button className="button navtab__about-button">О проекте</button>
          </a>
          <a href="#techs" className="link navtab__link">
            <button className="button navtab__about-button">Технологии</button>
          </a>
          <a href="#student" className="link navtab__link">
            <button className="button navtab__about-button">Студент</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default NavTab;
