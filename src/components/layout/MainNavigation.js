import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add meetups</Link>
          </li>
          <li>
            <Link to="/favourites">My meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
