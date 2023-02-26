<<<<<<< Updated upstream
function TabMenu() {
=======
import { Link } from "react-router-dom";

export default function TabMenu() {
>>>>>>> Stashed changes
    return (
      <nav className="tab-menu">
        <button className="tabslink" id="html-button">HTML</button>
        <button className="tabslink" id="css-button">CSS</button>
        <button className="tabslink" id="javascript-button">JavaScript</button>
        <button className="tabslink" id="react-button">React</button>
        <button className="tabslink" id="sanity-button">Sanity and headless CMS</button>
      </nav>
    );
  }
  
export default TabMenu;
