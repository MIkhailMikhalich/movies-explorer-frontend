import React from "react";
import photo from "../../../images/RPK28IPCDNo.png";

function AboutMe(props) {
  return (
    <div id="student" className="student">
      <div className="student__content">
        <div className="component__heading-container">
          <h2 className="component__heading">Студент</h2>
        </div>
        <div className="student__data">
          <div className="student__about">
            <div className="student__article-container">
              <h3 className="student__heading">Михаил</h3>
              <p className="student__info">Студент, 19лет</p>
              <p className="student__text">
                Живу в Балашихе, учусь в Москве, в вузе по специальности
                "Информационная безопасность автоматизированных систем".
                Программированием увлекся с начала обучения в вузе и решил
                развится в сторону веб-разработки.Люблю слушать музыку и хожу в
                спортзал.
              </p>
            </div>
            <ul className="student__urls">
              <li>medvedsholeninov@yandex.ru</li>
              <li>medvedsholeninov@gmail.com</li>
              <li>
                <a className="link" href="https://github.com/MIkhailMikhalich">GitHub</a>
              </li>
            </ul>
          </div>
          <img
            className="student__photo"
            src={photo}
            alt="Фотография студента"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
