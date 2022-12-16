import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import styles from "./Header.module.css";
import React, { useState } from "react";
const Header = () => {
  // func button search
  function handleClickSearch() {
    window.location.replace("./search");
  }

  const [clickDate, setClickDate] = useState(false);

  // func input date
  function handleClickDate() {
    setClickDate(true);
    if (clickDate) {
      console.log("render date range");
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerList}>
        <h1 className={styles.headerTitle}>
          A lifetime of discounts? It's Genius.
        </h1>

        <p className={styles.headerDesc}>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free acount
        </p>

        <button className={styles.headerBtn}>Sign in / Register</button>

        <div className={styles.headerSearch}>
          <div className={styles.headerSearchItem}>
            <FontAwesomeIcon icon={faBed} className={styles.headerIcon} />
            <input
              type="text"
              placeholder="where are you going?"
              className={styles.headerSearchInput}
            />
          </div>

          <div
            className={styles.headerSearchItem}
            onClick={() => handleClickDate()}
          >
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={styles.headerIcon}
            />
            <span className={styles.headerSearchText}>
              {/* <input type="date" />
              <span>
                <p>to</p>
              </span>
              <input type="date" /> */}
              date to date
            </span>
          </div>

          <div className={styles.headerSearchItem}>
            <FontAwesomeIcon icon={faPerson} className={styles.headerIcon} />
            <span className={styles.headerSearchText}>
              2 adults 2 children 1 room
            </span>
          </div>

          <div className={styles.headerSearchItem}>
            <button
              className={styles.headerBtnSearch}
              onClick={() => handleClickSearch()}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
