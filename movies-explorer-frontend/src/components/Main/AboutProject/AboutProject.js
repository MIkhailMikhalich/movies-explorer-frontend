import React from "react";

function AboutProject(props) {
  return (
    <div id="about-project"  className="about-project">
      <div className="about-project__content">
        <div className="component__heading-container">
          <h2 className="component__heading">О проекте</h2>
        </div>
        <div className="about-project__articles-place">
          <div className="about-project__article">
            <p className="about-project__article_heading">Дипломный проект включал 5 этапов</p>
            <p className="about-project__article_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__article">
            <p className="about-project__article_heading">На выполнение диплома ушло 5 недель</p>
            <p className="about-project__article_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__bar">
            <div className="about-project__first-week">
                <p className="about-project__first-week_text">1 неделя</p>
                <p className="about-project__weeks_about">Back-end</p>
            </div>
            <div className="about-project__another-four-weeks">
                <p className="about-project__another-four-weeks_text">4 недели</p>
                <p className="about-project__weeks_about">Front-end</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default AboutProject;
