import React from "react";
import styles from "./RegisterButton.module.scss";

export default function RegisterButton(props) {
  return (
    <a href={props.registrationLink} className={styles.registerButton}>
      Register to attend
    </a>
  );
}
