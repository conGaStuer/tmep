import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faUser, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
function Navbar() {
  return (
    <section className="navbar">
      <div className="logo">
        <FontAwesomeIcon icon={faTiktok} className="nav-icon nav-logo" />
      </div>
      <input className="search" placeholder="Search" />
      <div className="user">
        <div className="user-login">
          <FontAwesomeIcon icon={faMessage} className="nav-icon" />
        </div>
        <div className="user-notify">
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
