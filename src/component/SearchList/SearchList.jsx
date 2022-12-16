import styles from "./SearchList.module.css";
import searchData from "../../data/search.json";

const SearchList = () => {
  return (
    <div className={styles.searchItem}>
      {/*map data*/}
      {searchData.map((x) => (
        <div className={styles.srcList}>
          <img src={x.image_url} alt={x.name} className={styles.srcImg} />

          <div className={styles.srcDesc}>
            <h1 className={styles.srcTitle}>{x.name}</h1>
            <span className={styles.srcDistance}>{x.distance}</span>
            <span className={styles.srcTaxi}>{x.tag}</span>
            <span className={styles.srcType}>{x.type}</span>
            <span className={styles.srcDescription}>{x.description}</span>

            {/* free_cancel = true => render  "Free cancellation" / false => "" */}
            <span className={styles.srcCancel}>
              {x.free_cancel ? "Free cancellation" : ""}
            </span>

            {/* like span 1 with diferent css*/}
            <span className={styles.srcCancelItem}>
              {x.free_cancel
                ? "You can cancel later, so lock in this great price today!"
                : ""}
            </span>
          </div>

          <div className={styles.srcDetails}>
            <div className={styles.srcRating}>
              <span className={styles.srcRate_text}>{x.rate_text}</span>
              <button className={styles.srcRate}>{x.rate}</button>
            </div>

            <div className={styles.srcDetailTexts}>
              <span className={styles.srcPrice}>${x.price}</span>
              <span className={styles.srcTaxOp}>Includes taxes and fess</span>
              <button className={styles.srcButton}>See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
