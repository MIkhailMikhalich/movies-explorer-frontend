import NavTab from "./NavTab/NavTab.js";
import AboutProject from "./AboutProject/AboutProject.js";
import Techs from "./Techs/Techs.js";
import AboutMe from "./AboutMe/AboutMe.js";
import Portfolio from "./Portfolio/Portfolio.js";
function Main(props) {
  return (
    <main>
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
