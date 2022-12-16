import hotelData from "../../data/hotel_list.json";
import styles from "./Hotel.module.css";

const Hotel = () => {
  // fun to detail hotel
  function handleClick() {
    window.location.replace("./detail");
  }
  return (
    <div className={styles.hotelProperties}>
      {/*map data from json*/}
      {hotelData.map((a) => (
        <div
          className={styles.hotelPropertiesContainer}
          onClick={() => handleClick()}
          key={a.name}
        >
          <div className={styles.hotelPropertiesItem}>
            <img src={a.image_url} alt={a.name} className={styles.hotelImg} />
            <span className={styles.hotelName}>{a.name}</span>
            <span className={styles.hotelCity}>{a.city}</span>
            <span className={styles.hotelPrice}>Starting from ${a.price}</span>

            <div className={styles.hotelRating}>
              <button>{a.rate}</button>
              <span>{a.type}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotel;
