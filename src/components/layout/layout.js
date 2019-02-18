import React from "react";

import styles from "./layout.module.scss";

import Header4Tabs from "./header4Tabs/header4Tabs";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    const headerProps = {
      logo: ["nusLogo", "alset_cobrand"],
      listItems: [
        // { link: "#challenges", name: "Challenges" },
        // { link: "/events", name: "Events" },
        // { link: "http://nus.edu.sg/alset/translation.html", name: "About" },
        // { link: "/blog", name: "Blog" }
      ]
    };
    return (
      <div>
        <Header4Tabs headerProps={headerProps} />
        <main className={styles.main}>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <p>
            icons from <a href="https://feathericons.com">Feather</a>
          </p>
        </footer> */}
      </div>
    );
  }
}

export default Layout;
