import React from "react";
import Sidebar from "../siderbar";
import Forms from "../usuarios";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container--siderbar">
          <Sidebar />
        </div>
        <div className="home__container--forms">
          <Forms />
        </div>
      </div>
    </div>
  );
};

export default Home;
