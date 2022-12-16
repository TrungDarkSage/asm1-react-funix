import hotelTypeData from "../../data/type.json";
import styles from "./HotelType.module.css";

const HotelType = () => {
  return (
    <div className={styles.hotelType}>
      {/*render list from json*/}
      {hotelTypeData.map((a) => (
        <div className={styles.hotelTypeItem} key={a.name}>
          <img src={a.image} className={styles.hotelTypeImg}></img>
          <div className={styles.hotelTypeTitle}>
            <h1>{a.name}</h1>
            <h2>{a.count}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelType;
