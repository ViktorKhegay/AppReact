import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          <i class="fas fa-user-alt"></i> Profile
        </NavLink>
      </div>

      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          <i class="fas fa-envelope"></i> Messages
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          <i class="fas fa-newspaper"></i> News
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          <i class="fab fa-itunes-note"></i> Music
        </NavLink>
      </div>

      <br />
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          <i class="fas fa-cog"></i> Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
