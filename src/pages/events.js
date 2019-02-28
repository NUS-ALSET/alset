import React from "react";
import Layout from "../components/layout/layout";
import styles from "./pages.module.scss";
import EventsDateTimeVenue from "../../src/components/toolkit/dateTimeVenue/EventsDateTimeVenue";
import { Link } from "gatsby";
import SEO from "../components/seo";

const upcomingEvents = [
  {
    details: require("../../content/pages/events/18032019-NCC/writeup").nccDetails,
    component: require("../../content/pages/events/18032019-NCC/writeup").default
  }
];

const pastEvents = [
  {
    details: require("../../content/pages/events/25022019-3DM@NUS/writeup.jsx").edmNusDetails,
    component: require("../../content/pages/events/25022019-3DM@NUS/writeup.jsx").default
  },
  {
    details: require("../../content/pages/events/20022019-fellowTeaTembusu/writeup")
      .fellowTeaTembusuDetails,
    component: require("../../content/pages/events/20022019-fellowTeaTembusu/writeup").default
  }
];

const highlights = [
  {
    link: "/events/ncc",
    title: "6th Annual Singapore National Coding Championships",
    image: require("../../content/assets/pictures/NCCandAOC/ncc2017.jpeg"),
    imageAlt: "students at NCC 2017 competition venue"
  },
  {
    link: "/events/3dm@nus",
    title: "ALSET for Data-Driven Decision-Making \n (3DM@NUS)",
    image: require("../../content/pages/activities/edmNus/edm.jpg"),
    imageAlt: "team discussion in progress"
  }
];
export function HighlightSection(props) {
  return (
    <React.Fragment>
      <Link to={props.highlight.link}>
        <section className={styles.section}>
          <img src={props.highlight.image} alt={props.highlight.imageAlt} />
          <h3>{props.highlight.title}</h3>
        </section>
      </Link>
      <br />
    </React.Fragment>
  );
}

export default function Events() {
  return (
    <Layout>
      <SEO title="Events" />
      <article className={styles.article}>
        <h1>ALSET: Translational Research Unit</h1>
        <h2>Highlights</h2>
        {highlights.map(item => (
          <HighlightSection highlight={item} key={item.title} />
        ))}
        <hr />
        <h2>Upcoming events</h2>
        {upcomingEvents.map(event => (
          <EventsDateTimeVenue eventInfo={event.details} key={event.details.title}>
            <event.component />
          </EventsDateTimeVenue>
        ))}
        <hr />
        <h2>Completed events</h2>
        {pastEvents.map(event => (
          <EventsDateTimeVenue eventInfo={event.details} key={event.details.title}>
            <event.component />
          </EventsDateTimeVenue>
        ))}
      </article>
      <br />
    </Layout>
  );
}
