import styles from "./MailSub.module.css";

const MailSub = () => {
  return (
    <div className={styles.mailList}>
      <h1 className={styles.mailTitile}>Save time, save money!</h1>
      <span className={styles.mailDesc}>
        Sign up and we'll send the best deals to you
      </span>
      <div className={styles.mailInputContainer}>
        <input
          type="text"
          placeholder="Your Email"
          className={styles.inputText}
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailSub;
