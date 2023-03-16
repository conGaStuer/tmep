import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserFriends,
  faBell,
  faMessage,
  faPlusSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <section className="menu">
      <div className="menu-list">
        <FontAwesomeIcon icon={faHouse} className="menu-icon" />
        Home
      </div>
      <div className="menu-list">
        <FontAwesomeIcon icon={faUserFriends} className="menu-icon" />
        Friends
      </div>
      <div className="menu-list">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="menu-icon menu-icon-plus"
        />
        <FontAwesomeIcon icon={faPlus} className="menu-icon menu-icon-Plus" />
      </div>
      <div className="menu-list">
        <FontAwesomeIcon icon={faBell} className="menu-icon" />
        Notify
      </div>
      <div className="menu-list">
        <FontAwesomeIcon icon={faMessage} className="menu-icon" />
        Message
      </div>
    </section>
  );
}

export default Menu;
