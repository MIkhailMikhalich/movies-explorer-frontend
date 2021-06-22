import React from "react";

function Footer(props) {
  return <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bar">
          <p className="footer__copyright">© 2021</p>
          <ul className="footer__urls">
              <li className="footer__url"><a className="link" href="#">Яндекс.Практикум</a></li>
              <li className="footer__url"><a className="link" href="#">GitHub</a></li>
              <li className="footer__url"><a className="link" href="#">Facebook</a></li>
          </ul>
      </div>
  </footer>;
}
export default Footer;
