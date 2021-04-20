import React, { useState } from "react";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";
import { SidebarData } from "./data";
import "./styles.scss";
import { IconContext } from "react-icons";

const NavbarMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar__menu">
            <div className="navbar__menu--button">
            {/* <Link to="#" className="navbar__menu--button--link"> */}
              {/* <FcIcons.FcList onClick={showSidebar} /> */}
              <img src="https://img.icons8.com/carbon-copy/40/000000/menu.png" onClick={showSidebar}/>
            {/* </Link> */}
            </div>
            <div className="navbar__menu--title">
            <h2 className="prueba-txt">Prueba Front-end </h2>
            </div>
          </div>
          <div className="navbar__usuario">
            <h2 className="navbar__usuario--user">
            <img src="https://img.icons8.com/carbon-copy/45/000000/user-male-circle.png"/>
            &nbsp;Alejandro Guespud
            </h2>
            <Link to={`/`}>
              <button className="btn btn-link navbar__usuario--logout">
              <img src="https://img.icons8.com/carbon-copy/35/000000/export.png"/>
              </button>
            </Link>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FcIcons.FcList />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarMenu;
