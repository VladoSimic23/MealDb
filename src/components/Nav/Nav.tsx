import { NavLink } from "react-router-dom";
import styles from "./styles/nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/category"
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
