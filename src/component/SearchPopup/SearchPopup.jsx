import styles from "./SearchPopup.module.css";

const SearchPopup = () => {
  return (
    <div className={styles.searchPopup}>
      <h1 className={styles.srcTitle}>Search</h1>

      <div className={styles.srcItem}>
        <label>Destination</label>
        <input type="text" />
      </div>

      <div className={styles.srcItem}>
        <label>Check-in Date</label>
        <span>06/24/2022 to 06/24/2022</span>
      </div>

      <div className={styles.srcItem}>
        <label>Option</label>

        <div className={styles.srcOptions}>
          <div className={styles.srcOptionItem}>
            <span className={styles.srcOptionText}>
              Min price <small>per night</small>
            </span>
            <input type="number" className={styles.srcOptionInput} />
          </div>

          <div className={styles.srcOptionItem}>
            <span className={styles.srcOptionText}>
              Max price <small>per night</small>
            </span>
            <input type="number" className={styles.srcOptionInput} />
          </div>

          <div className={styles.srcOptionItem}>
            <span className={styles.srcOptionText}>Adult</span>
            <input
              type="number"
              className={styles.srcOptionInput}
              placeholder="1"
            />
          </div>

          <div className={styles.srcOptionItem}>
            <span className={styles.srcOptionText}>Children</span>
            <input
              type="number"
              className={styles.srcOptionInput}
              placeholder="0"
            />
          </div>

          <div className={styles.srcOptionItem}>
            <span className={styles.srcOptionText}>Room</span>
            <input
              type="number"
              className={styles.srcOptionInput}
              placeholder="1"
            />
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchPopup;
