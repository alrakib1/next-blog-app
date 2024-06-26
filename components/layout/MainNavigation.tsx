import Link from "next/link";
import React from "react";
import Logo from "./Logo";

import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/" passHref>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
