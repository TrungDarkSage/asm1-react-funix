import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../component/NavBar/NavBar";
import NavItem from "../../component/NavBar/NavItem";
import Footer from "../../component/Footer/Footer";
import detailData from "../../data/detail.json";
import styles from "./Detail.module.css";
const Detail = () => {
  return (
    <div>
      <Navbar />
      <NavItem />

      <div className={styles.hotelContainer}>
        <div className={styles.hotelWrapper}>
          {/* hotel */}
          <h1 className={styles.hotelTitle}>{detailData.name}</h1>
          <div className={styles.hotelAddress}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{detailData.address}</span>
          </div>
          <span className={styles.hotelDistance}>{detailData.distance}</span>
          <span className={styles.hotelPrice}>{detailData.price}</span>
          <button className={styles.btnBookNow}>Reserve or Book Now!</button>

          {/* array photo */}
          {/* image: every one have 1 dif name => key */}
          <div className={styles.hotelImages} key={detailData.photos}>
            {detailData.photos.map((ele, index) => (
              <div className={styles.hotelImgWrapper}>
                <img
                  key={index}
                  src={ele}
                  alt={index}
                  className={styles.hotelImg}
                />
              </div>
            ))}
          </div>

          {/* detail */}
          <div className={styles.hotelDetails}>
            <div className={styles.hotelDetailTexts}>
              <h1 className={styles.hotelTitle}>{detailData.title}</h1>
              <p className={styles.hotelDesc}>{detailData.description}</p>
            </div>

            <div className={styles.hotelDetailPrice}>
              <h1>Perfect for a 9-night stay!</h1>

              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>

              <h2>
                <b>${detailData.nine_night_price}</b>(9 night)
              </h2>

              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
