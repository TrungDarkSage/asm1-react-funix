import styles from "./City.module.css";
import cityData from "../../data/city.json";

const City = () => {
  return (
    <div className={styles.listCity}>
      {/* Truy cập dữ liệu json và render ra value */}
      {cityData.map((a) => (
        <div className={styles.listCityItem} key={a.name}>
          <img src={a.image} className={styles.listCityImg}></img>
          <div className={styles.listCityTitle}>
            <h1>{a.name}</h1>
            <h2>{a.subText}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default City;
