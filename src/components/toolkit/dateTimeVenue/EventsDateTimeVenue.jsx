import React, { useState } from "react";
import styles from "./DateTimeVenue.module.scss";

import calendar from "../../../../content/assets/icons/calendar.svg";
import clock from "../../../../content/assets/icons/clock.svg";
import mapPin from "../../../../content/assets/icons/map-pin.svg";
import text from "../../../../content/assets/icons/file-text.svg";
import more from "../../../../content/assets/icons/more-horizontal.svg";

export default function EventsDateTimeVenue(props) {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div>
      <h3>{props.eventInfo.title}</h3>
      <section className={styles.sectionLeader}>
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
        <section className={`${styles.section} ${styles.stretchSection}`}>
          <img src={mapPin} alt="map-pin-icon" />
          <div>
            <p>{props.eventInfo.venue}</p>
          </div>
        </section>
      </section>
      <section className={styles.section}>
        <img src={text} alt="text-icon" />
        <div>
          <p>{props.eventInfo.excerpt}</p>
        </div>
        <button className={styles.button}>
          <img
            src={more}
            alt="more-info-icon"
            onClick={() => setSeeMore(!seeMore)}
          />
        </button>
      </section>
      {seeMore && (
        <section className={styles.section}>
          <div>{props.children}</div>
        </section>
      )}
    </div>
  );
}
