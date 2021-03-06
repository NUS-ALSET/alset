import React from "react";

import RegisterButton from "../button/RegisterButton";

import styles from "./DateTimeVenue.module.scss";

import calendar from "../../../../content/assets/icons/calendar.svg";
import clock from "../../../../content/assets/icons/clock.svg";
import mapPin from "../../../../content/assets/icons/map-pin.svg";
import map from "../../../../content/assets/icons/map.svg";
import send from "../../../../content/assets/icons/send.svg";

export default function DateTimeVenue(props) {
  return (
    <div>
      <section className={styles.section}>
        <img src={calendar} alt="calendar-icon" />
        <div>
          <p>{props.eventInfo.date}</p>
        </div>
      </section>
      <section className={styles.section}>
        <img src={clock} alt="clock-icon" />
        <div>
          <p>{props.eventInfo.time}</p>
        </div>
      </section>
      <section className={styles.section}>
        <img src={mapPin} alt="map-pin-icon" />
        <div>
          <p>{props.eventInfo.venue}</p>
        </div>
      </section>
      <section className={styles.section}>
        <img src={map} alt="map-icon" />
        <div>{props.children}</div>
      </section>
    </div>
  );
}

export function DateTimeVenueWithRegistration(props) {
  return (
    <div>
      <section className={styles.section}>
        <img src={calendar} alt="calendar-icon" />
        <div>
          <p>{props.eventInfo.date}</p>
        </div>
      </section>
      <section className={styles.section}>
        <img src={clock} alt="clock-icon" />
        <div>
          <p>{props.eventInfo.time}</p>
        </div>
      </section>
      <section className={styles.section}>
        <img src={mapPin} alt="map-pin-icon" />
        <div>
          <p>{props.eventInfo.venue}</p>
        </div>
      </section>
      <section className={styles.section}>
        <img src={send} alt="register-icon" />
        <RegisterButton registrationLink={props.eventInfo.registrationLink} />
      </section>
      <section className={styles.section}>
        <img src={map} alt="map-icon" />
        <div>{props.children}</div>
      </section>
    </div>
  );
}
