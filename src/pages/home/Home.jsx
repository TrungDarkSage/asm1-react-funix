import NavBar from "../../component/NavBar/NavBar";
import NavItem from "../../component/NavBar/NavItem";
import Header from "../../component/Header/Header";
import City from "../../component/City/City";
import HotelType from "../../component/HotelType/HotelType";
import Hotel from "../../component/Hotel/Hotel";
import MailSub from "../../component/MailSub/MailSub";
import Footer from "../../component/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      {/* HEAD */}
      <NavBar />
      <NavItem />
      <Header />

      {/* BODY */}
      <div className={styles.homeContainer}>
        <City />
        <h1 className={styles.homeTitle}>Browse by property type</h1>
        <HotelType />
        <h1 className={styles.homeTitle}>Homes guests love</h1>
        <Hotel />
        <MailSub />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
