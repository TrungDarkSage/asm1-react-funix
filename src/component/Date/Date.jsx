import styles from "./Date.module.css";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Date = () => {
  const [clickDate, setClickDate] = useState([
    {
      startDate: new window.Date(),
      endDate: addDays(new window.Date(), 7),
      key: "selection",
    },
  ]);
  const [showRange, setShow] = useState(false);
  //   const handleClickDate = (date) => {
  //     setClickDate(date);
  //   };
  return (
    <span className={styles.date}>
      <input
        value={`${format(clickDate[0].startDate, "MM/dd/yyyy")} to ${format(
          clickDate[0].endDate,
          "MM/dd/yyyy"
        )}`}
        readOnly
        onClick={() => setShow((showRange) => !showRange)}
        className={styles.input}
      />
      {showRange && (
        <DateRange
          onChange={(item) => setClickDate([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={clickDate}
          months={2}
          direction="horizontal"
          className={styles.dateRange}
        />
      )}
    </span>
  );
};

export default Date;
