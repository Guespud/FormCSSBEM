import React from "react";
import Presentacion from "../presentacion";
import Sidebar from "../siderbar";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container--siderbar">
          <Sidebar />
        </div>
        <div className="home__container--forms">
          <Presentacion/>
        </div>
      </div>
    </div>
  );
};

export default Home;
