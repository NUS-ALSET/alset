import React from "react";

export const nccDetails = {
  date: "18 Mar 2019",
  time: "9:00am to 5:00pm",
  venue:
    "Lecture Theatre (LT) 50, LT 51 and Auditorium 1, Stephen Riady Centre, University Town",
  title: "ALSET for National Coding Championships 2019",
  excerpt:
    "The 6th Annual National Coding Championships is here again with a big bang!"
};

export default function NCC() {
  return (
    <article>
      <p>
        Each year, ALSET strives to introduce more kids to coding in a fun and
        engaging way. Sec1, Sec2, Sec3 students from MOE schools (junior
        category) and Sec4, sec5, JC, high school, ITE and polytechnic students
        (senior category) are invited to participate in ALSET for National
        Coding Championships 2019.
      </p>
      <p>
        The top 12 schools in the junior and senior categories can elect to send
        2 teams to the competition. This year, join us again in the finals on
        18th March 2019 at NUS. To watch the students code their way to success
        through gaming is an adrenaline pumping experience!
      </p>
    </article>
  );
}
