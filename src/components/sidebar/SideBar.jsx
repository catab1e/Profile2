import "./side-bar.scss";
import React from "react";

const SideBar = ({ active, setActive }) => {
  return (
    <div
      className={active ? "sidebar active" : "sidebar"}
      onClick={() => setActive(false)}
    >
      <div className="sidebar--blur" />
      <div
        className="sidebar__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidebar__item">About</div>
        <div className="sidebar__item">Works</div>
        <div className="sidebar__item">Projects</div>
        <div className="sidebar__item">Interesting</div>
        <div className="sidebar__item">TO DO</div>
        <div className="sidebar__item">Contacts</div>
        <div className="sidebar__item">Help</div>
      </div>
    </div>
  );
};

export default SideBar;
