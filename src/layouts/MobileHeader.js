import { Fragment, useContext, useState } from "react";
import { context } from "../context/context";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  const navContext = useContext(context);
  const { nav, changeNav } = navContext;

  const activeNav = (value) => (value == nav ? "active" : "");
  const onClick = (value) => {
    setToggle(false);
    changeNav(value);
  };

  return (
    <Fragment>
      <div className="edrea_tm_topbar">
        <div className="topbar_inner">
        <div className="logo">
          <a href="#" onClick={() => changeNav("home")}>
            <h2>P.Lange</h2>
          </a>
        </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`edrea_tm_mobile_menu ${toggle ? "opened" : ""}`}>
        <div className="inner">
          <div className="menu_list">
            <ul className="transition_link">
            <li className={activeNav("home")}>
              <a href="#home" onClick={() => changeNav("home")}>
                Home
              </a>
            </li>
            <li className={activeNav("about")}>
              <a href="#about" onClick={() => changeNav("about")}>
                About
              </a>
            </li>
            <li className={activeNav("projects")}>
              <a href="#projects" onClick={() => changeNav("projects")}>
                Projects
              </a>
            </li>
            <li className={activeNav("contact")}>
              <a href="#contact" onClick={() => changeNav("contact")}>
                Contact
              </a>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MobileHeader;
