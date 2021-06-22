import React from "react";

function Portfolio(props) {
  return (
    <div className="portfolio">
      <div className="portfolio__content">
        <h2 className="portfolio__heading">Портфолио</h2>
        <ul className="portfolio__urls">
          <li className="portfolio__urls_element">
            <p className="portfolio__url-name">Статичный сайт</p>
            <a href="https://github.com/MIkhailMikhalich/how-to-learn" className="link portfolio__url">
              ↗
            </a>
          </li>
          <li className="portfolio__urls_element">
            <p className="portfolio__url-name">Адаптивный сайт</p>
            <a href="https://github.com/MIkhailMikhalich/russian-travel" className="link portfolio__url">
              ↗
            </a>
          </li>
          <li className="portfolio__urls_element">
            <p className="portfolio__url-name">Одностраничное приложение</p>
            <a href="https://github.com/MIkhailMikhalich/react-mesto-api-full" className="link portfolio__url">
              ↗
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Portfolio;
