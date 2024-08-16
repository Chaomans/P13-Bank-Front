import styles from "./Login.module.scss";

const Login = () => {
  return (
    <section className={styles.signInContent}>
      <div className={styles.signInBox}>
        <div className={styles.iconDiv}>
          <img
            className={styles.signInIcon}
            src="/assets/user-circle.svg"
            alt="user icon"
          />
        </div>
        <h2 className={styles.title}>Sign In</h2>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <label className={styles.inputLabel} htmlFor="username">
              Username
            </label>
            <input className={styles.input} type="text" id="username" />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.inputLabel} htmlFor="password">
              Password
            </label>
            <input className={styles.input} type="password" id="password" />
          </div>
          <div className={styles.inputRemember}>
            <input className={styles.input} type="checkbox" id="remember-me" />
            <label className={styles.inputLabel} htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <button className={styles.signInButton}>Sign In</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
