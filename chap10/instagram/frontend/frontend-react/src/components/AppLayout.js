import React from "react";
import { Input, Menu } from "antd";
import "./AppLayout.scss";
import StoryList from "./StoryList";
import SuggestionList from "./SuggestionList";
import LogoImage from "assets/logo.png";

function AppLayout({ children, sidebar }) {
  return (
    <>
      <div className="app">
        <div className="header">
          <h1 className="page-title">
            <img src={LogoImage} alt="logo" />
          </h1>
          <div className="search">
            <Input.Search />
          </div>
          <div className="topnav">
            <Menu mode="horizontal">
              <Menu.Item>menu1</Menu.Item>
              <Menu.Item>menu2</Menu.Item>
              <Menu.Item>menu3</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="contents">{children}</div>
        <div className="sidebar">{sidebar}</div>
        <div className="footer">&copy; 2020. Yejin Hw.</div>
      </div>
    </>
  );
}

export default AppLayout;
