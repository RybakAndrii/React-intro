import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import News from "../News/News";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Banner />
      <div className="main-content">
        <Blog />
        <News />
      </div>
    </div>
  );
};

export default Layout;
