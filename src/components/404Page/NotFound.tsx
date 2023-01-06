import { NavLink } from "react-router-dom";
import styles from "./style/notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div>
        <h1>Page not found!</h1>
        <NavLink to={"/"}>Back Home</NavLink>
      </div>
    </div>
  );
};

export default NotFound;
