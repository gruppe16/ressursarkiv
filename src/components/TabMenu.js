import { Link } from "react-router-dom";

export default function TabMenu() {
    return (
      <nav className="tab-menu">
        <Link to="/category/HTML" className="tabslink" id="html">
          HTML
        </Link>
        <Link to="/category/CSS" className="tabslink" id="css">
          CSS
        </Link>
        <Link to="/category/JavaScript" className="tabslink" id="javascript">
          JavaScript
        </Link>
        <Link to="/category/React" className="tabslink" id="react">
          React
        </Link>
        <Link to="/category/Sanity and headless CMS" className="tabslink" id="sanity-and-headless-cms">
          Sanity and headless CMS
        </Link>
      </nav>
    );
  }