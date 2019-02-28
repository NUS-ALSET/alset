import React from "react";
import { Link } from "gatsby";

export const edmNusDetails = {
  date: "25 Feb 2019",
  time: "9:00am to 5:00pm",
  venue: "Lecture Theatre (LT) 50, University Town",
  title: "ALSET for Data-Driven Decision-Making (3DM@NUS) 2019",
  excerpt:
    "Members of the NUS Community are invited to make a difference in the key decisions that students make in their varsity life."
};

export default function EdmNus() {
  return (
    <article>
      <p>
        The National University of Singapore strongly believes in data-driven decision-making (3DM).
        Rather than making decisions based on one's "gut" or "experiences," data-driven
        decision-making relies on the collection and processing of relevant data into a form that
        decision-makers can easily interpret.
      </p>
      <p>
        This year, ALSET for 3DM@NUS is challenging the NUS community to identify decisions students
        and faculty have to make that could be improved by harnessing potentially accessible data
        sources. Then, using the principles of data-driven decision-making, teams will prototype
        solutions to improve their chosen decision.
      </p>
      <p>
        During the morning of 25 Feb 2019, ALSET staff will help facilitate teams as they work
        through the design process. Teams will start with a brainstorming session and conclude with
        presentations showcasing their prototypes developed throughout the event. Workshops will be
        held to help teams further develop their prototypes into solutions NUS could easily deploy.
        Lunch will be provided.
      </p>
      <p>
        Click <Link to="/events/3dm@nus">here</Link> to view the main events page.
      </p>
    </article>
  );
}
