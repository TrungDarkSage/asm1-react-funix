import styles from "./Footer.module.css";
import footerData from "../../data/footer.json";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLists}>
        {/*map data from json*/}
        {footerData.map((a) => (
          <div key={a.col_number}>
            <ul className={styles.footerList}>
              {/*get data from id, id/ar */}
              {a.col_values.map((val, id) => (
                <li key={id} className={styles.footerListItem}>
                  {val}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
