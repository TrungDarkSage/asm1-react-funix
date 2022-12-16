import styles from "./Search.module.css";
import Navbar from "../../component/NavBar/NavBar";
import NavItem from "../../component/NavBar/NavItem";
import SearchList from "../../component/SearchList/SearchList";
import SearchPopup from "../../component/SearchPopup/SearchPopup";
import Footer from "../../component/Footer/Footer";
const Search = () => {
  return (
    <div>
      <Navbar />
      <NavItem />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          {/* component left : search */}
          <SearchPopup />
          <div className={styles.listResult}>
            {/* component right : result */}
            <SearchList />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
