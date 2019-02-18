import React from "react";
import { Link } from "gatsby";

import styles from "./header4Tabs.module.scss";

class Header4Tabs extends React.Component {
  render() {
    const { logo, listItems } = this.props.headerProps;
    return (
      <header className={styles.header}>
        <Link to="/" className={styles.headerLogo}>
          <img
            src={require("../" + logo[0] + ".png")}
            alt="NUS logo"
            className={styles.nusLogo}
          />
          <img
            src={require("../" + logo[1] + ".jpg")}
            alt="ALSET logo"
            className={styles.alsetCoBrand}
          />
        </Link>
        <ul className={styles.headerMenu}>
          {listItems.map(item => (
            <li key={item.name}>
              <a href={item.link} key={item.name}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Header4Tabs;
