import React, { useState } from "react";
import Link from "../utils/Link";

const Navigation = ({ setIsNavOpen, isNavOpen }) => {
  return (
    <nav
      className={`navigation ${
        isNavOpen ? "navigation__display--on" : "navigation__display--off"
      }`}
    >
      <ul className="navigation__ul">
        <li className="navigation__li" onClick={() => setIsNavOpen(false)}>
          <Link href="/" activeClassName="navigation__a--active">
            <a className="navigation__a">Home</a>
          </Link>
        </li>
        <li className="navigation__li" onClick={() => setIsNavOpen(false)}>
          <Link href="/fake" activeClassName="navigation__a--active">
            <a className="navigation__a">Fake Profile Data</a>
          </Link>
        </li>
        <li className="navigation__li" onClick={() => setIsNavOpen(false)}>
          <Link href="/randompassword" activeClassName="navigation__a--active">
            <a className="navigation__a">Generate Random Password</a>
          </Link>
        </li>
        <li className="navigation__li" onClick={() => setIsNavOpen(false)}>
          <Link href="/randomemail" activeClassName="navigation__a--active">
            <a className="navigation__a">Generate Random Email</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
