import React from "react";

function Techs(props) {
  return (
    <div id="techs" className="techs">
      <div className="techs__content">
        <div className="component__heading-container">
          <h2 className="component__heading">Технологии</h2>
        </div>
        <div className="techs__about">
          <div className="techs__article-container">
            <p className="techs__heading">7 технологий</p>
            <p className="techs__text">
              На курсе веб-разработки мы освоили технологии, которые применили в
              дипломном проекте.
            </p>
          </div>
          <div className="techs__buttons-place">
            <a href="https://html.spec.whatwg.org/multipage/" className="link techs__link">
              <button className="button techs__about-button">HTML</button>
            </a>
            <a href="https://www.w3.org/Style/CSS/Overview.en.html" className="link techs__link">
              <button className="button techs__about-button">CSS</button>
            </a>
            <a href="https://www.javascript.com/" className="link techs__link">
              <button className="button techs__about-button">JS</button>
            </a>
            <a href="https://reactjs.org/" className="link techs__link">
              <button className="button techs__about-button">React</button>
            </a>
            <a href="https://github.com/" className="link techs__link">
              <button className="button techs__about-button">Git</button>
            </a>
            <a href="https://expressjs.com/" className="link techs__link">
              <button className="button techs__about-button">Express.js</button>
            </a>
            <a href="https://www.mongodb.com/" className="link techs__link">
              <button className="button techs__about-button">mongoDB</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Techs;
