import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        {/*Web name */}
        <span className={styles.logo}>Booking Website</span>
        <div className={styles.navItems}>
          {/*button login/register*/}
          <button className={styles.navButton}>Register</button>
          <button className={styles.navButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
