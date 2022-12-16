/*import data from json (array) */

import NavBarData from "../../data/navBar.json";
import styles from "./NavItem.module.css";
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBed,
//   faPlane,
//   faCar,
//   faTaxi,
// } from "@fortawesome/free-solid-svg-icons";

const NavItem = () => {
  // state hover item
  const [hover, setHover] = useState(false);
  // func change state
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className={styles.navbarItem}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarList}>
          {/*map data from json / render*/}
          {NavBarData.map((a) => (
            <div
              // moi Item mot type khac nhau => dung lam key
              key={a.type}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`${styles.navbarListItem} ${
                a.active && styles.active
                // ((a.active = hover), a.active && styles.active)
              }`}
            >
              <label>{a["icon"]}</label>
              {/* <FontAwesomeIcon icon={`${a.icon}`} /> */}
              <span>{a.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavItem;

// "icon": "faPlane",
// "icon": "faCar",
// "icon": "faBed"
// "icon": "faTaxi",
