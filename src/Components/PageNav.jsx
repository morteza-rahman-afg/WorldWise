import { Link, NavLink } from "react-router-dom";
import stayles from "./PageNav.module.css";
import Logo from "./Logo";
export default function PageNav() {
  return (
    <nav className={stayles.nav}>
      <Logo />
      <ul className={stayles.ul}>
        <li>
          <NavLink className={stayles.a} to="/product">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink className={stayles.a} to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li>
          <Link className={stayles.ctaLink} to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
