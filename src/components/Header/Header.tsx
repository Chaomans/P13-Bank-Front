import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

type HeaderProps = {
  isConnected?: boolean;
};

const Header = ({ isConnected = false }: HeaderProps) => {
  return (
    <nav className={styles.mainNav}>
      <NavLink className={styles.mainNavLogo} to={"/"}>
        <img
          src="/assets/argentBankLogo.png"
          alt="argentbank logo"
          className={styles.mainNavLogoImage}
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </NavLink>
      <div className={styles.mainNavUser}>
        <NavLink className={styles.user} to={"/sign-in"}>
          <img
            src="/assets/user-circle.svg"
            alt="user icon"
            className={styles.userCircle}
          />
          <p>{isConnected ? " User name" : "Sign In"}</p>
        </NavLink>

        {isConnected && (
          <div className={styles.logout}>
            <img
              src="/assets/sign-out.svg"
              alt="logout icon"
              className={styles.logoutIcon}
            />
            <p>Sign Out</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
