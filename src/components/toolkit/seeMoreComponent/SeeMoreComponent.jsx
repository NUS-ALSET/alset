import React, { useState } from "react";
import styles from "./SeeMoreComponent.module.scss";

import plusSquare from "../../../../content/assets/icons/plus-square.svg";
import minusSquare from "../../../../content/assets/icons/minus-square.svg";

export default function SeeMoreComponent(props) {
  const [seeMore, setSeeMore] = useState(false);
  if (seeMore) {
    return (
      <React.Fragment>
        <section className={styles.section}>
          <p id={styles.labelParagraph}>See less</p>
          <button className={styles.button}>
            <img
              src={minusSquare}
              alt="minus-icon"
              onClick={() => setSeeMore(!seeMore)}
            />
          </button>
        </section>
        {props.children}
      </React.Fragment>
    );
  }
  return (
    <section className={styles.section}>
      <p id={styles.labelParagraph}>See more</p>
      <button className={styles.button}>
        <img
          src={plusSquare}
          alt="plus-icon"
          onClick={() => setSeeMore(!seeMore)}
        />
      </button>
    </section>
  );
}
