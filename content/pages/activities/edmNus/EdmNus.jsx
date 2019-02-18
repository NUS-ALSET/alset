import React from "react";

import Layout from "../../../../src/components/layout/layout";
import styles from "./EdmNus.module.scss";

import { DateTimeVenueWithRegistration } from "../../../../src/components/toolkit/dateTimeVenue/DateTimeVenue";
import SeeMoreComponent from "../../../../src/components/toolkit/seeMoreComponent/SeeMoreComponent";

export default function EdmNus() {
  const eventInfo = {
    date: "25 February 2019",
    time: "9:00am to 5:00pm",
    venue: "Lecture Theatre (LT) 50, University Town",
    registrationLink:
      "https://myaces.nus.edu.sg:443/CoE/ViewEvent?actionParam=VIEWEVENT&eventID=92039"
  };
  return (
    <Layout>
      <article className={styles.article}>
        <h2>ALSET for Data-Driven Decision-Making (3DM@NUS) 2019</h2>
        <h3>Overview</h3>
        <p>
          The National University of Singapore strongly believes in data-driven decision-making.
          Rather than making decisions based on one’s “gut” or “experiences”, data-driven
          decision-making relies on the collection and processing of relevant data into a form
          decision-makers can easily interpret.
        </p>
        <p>
          This year, ALSET is challenging the NUS community to identify a decision students have to
          make that could be improved. Then, using the principles of data-driven decision-making,
          teams will prototype solutions to improve their chosen decision and present their efforts
          to NUS decision-makers.
        </p>
        <h3>Details:</h3>
        <p>
          Registration Opening: Friday, February 1, 2019
          <br />
          Registration Closing: Saturday, February 23, 2019 @ 5:00pm
        </p>
        <h3>Live Event:</h3>
        <DateTimeVenueWithRegistration eventInfo={eventInfo}>
          <a className={styles.mapLink} href="https://bit.ly/UTownDirections">
            Getting to UTown
          </a>
        </DateTimeVenueWithRegistration>
        <h3>Event Activities:</h3>
        <ul>
          <li>Brainstorming</li>
          <li>Rapid prototyping</li>
          <li>Workshops designed to further your projects</li>
          <li>Lunch on us</li>
          <li>Data storytelling</li>
          <li>Project presentations</li>
        </ul>
        <h3>Prizes</h3>
        <ul>
          <li>Certificate of Excellence for all members of recognised teams</li>
          <li>Certificate of Participation for all members of qualifying teams</li>
        </ul>
        <h3>Eligibility</h3>
        <ul>
          <li>The entire NUS community</li>
        </ul>
        <h3>Coordinators</h3>
        <ul>
          <li>Chris Boesch (ChrisBoesch@nus.edu.sg) </li>
        </ul>
        <h3>Frequently Asked Questions </h3>
        <SeeMoreComponent>
          <ul>
            <li>How do I register?</li>
            <ol type="a">
              <li>
                Anyone with an NUSNET ID can register at the{" "}
                <a href="https://myaces.nus.edu.sg/CoE/jsp/coeMain.jsp">Calendar of Events</a> page.
              </li>
            </ol>
            <li>How many participants will there be in the live event?</li>
            <ol type="a">
              <li>
                We are aiming to have enough people to assemble at least 15 teams of four during the
                event. If there is overwhelming interest, we can accommodate as many as 100 people.
              </li>
            </ol>
            <li>Who is eligible?</li>
            <ol type="a">
              <li>
                Anyone who is part of the NUS community can participate in 3DM@NUS. Team members can
                be from any academic background. You can signup as a team before the event or we can
                help you to form a team once you arrive at the event venue. <br />
                <br />
                Note: The UTown seating arrangements appear optimal for teams of four.
              </li>
            </ol>
            <li>Can people come to watch?</li>
            <ol type="a">
              <li>
                While the event would be much more exciting if everyone actively participated
                throughout the day, there may be additional seats for members of the NUS community
                to watch the activities and presentations.
              </li>
            </ol>
            <li>What platform will be used?</li>
            <ol type="a">
              <li>
                All team monitoring will be done through the ALSET Achievements application. If you
                would like, you can get a headstart on registering with Achievements by following{" "}
                <a href="https://achievements-prod.firebaseapp.com/#/courses/-LWsic9p08iyWsbG9H8O">
                  this link
                </a>
                . The password is <i>betteringnus</i>
                <br />
                <br />
                At the start of the event, we will use Achievements to identify members of each
                team. We will also use the application to track the completion of the milestones
                throughout the day. Once members of a team are registered, only one team member
                needs to submit the milestones for everyone on the team to receive credit for it.
              </li>
            </ol>
            <li>What will the scope of the activities be?</li>
            <ol type="a">
              <li>
                The day will begin with a brainstorming session and work through a prototyping
                design process. At some point, we will present you with a set of data, give you some
                questions to think about, and see how you answer them. Anyone who has completed
                GER1000 should be able to make headway with the data we will provide. The end
                results will be evaluated as much on presentation quality as the accuracy of those
                results.
              </li>
              <li>Lunch will be provided to all event attendees.</li>
              <li>
                In the afternoon, we will continue developing prototypes. Selected teams will be
                given 5 minutes to present their projects and receive feedback about their ideas
                from the audience.
              </li>
            </ol>
            <li>
              For event day: What’s the deal with these questions and milestones on Achievements?
            </li>
            <ul>
              <li>
                There are 3 questions and 6 milestones your team will have the opportunity to
                complete in 3DM@NUS 2019. We will explain each in turn.
              </li>
            </ul>
            <ol type="a">
              <li>
                NUSET ID - We are asking for your NUSNET ID to make sure you are a member of the NUS
                community and to be able to notify you later through official NUS channels.
              </li>
              <li>
                Academic programme - We are asking for your academic programme to give us insight
                into what kinds of backgrounds 3DM@NUS 2019 participants have.
              </li>
              <li>
                Team name - Every member of your team needs to enter the same team name so that we
                can give all teammates credit whenever an individual teammate submits a milestone.
              </li>
              <br />
              <br />
              <li>
                <a href="http://bit.ly/alset-3dm-2019">Milestone 1 description</a>
                <br />
                After finding a team, preferably a team of 4, the first thing you will want to do is
                brainstorm a list of decisions NUS students have to make. The list can include the
                big decisions, the trivial ones, and everything in between. Spend some time to make
                the list as complete as you can. When you absolutely have no more ideas, submit a
                link to your list as Milestone 1.{" "}
              </li>
              <li>
                <a href="http://bit.ly/alset-3dm-2019">Milestone 2 description</a>
                <br />
                Working from your team’s brainstormed list of decisions, pick one decision that you
                think you could improve by using the data NUS collects (or should collect) about its
                students or faculty. The{" "}
                <a href="http://bit.ly/alset-NSSD">
                  NUS Synthetic Student Dataset Data Catalog
                </a>{" "}
                provides a description of much of the data NUS collects about students. After your
                team selects a decision it wants to improve, provide a description of what the
                decision is, why it is difficult for students or faculty, and some evidence to
                support your claims. Submit the link to your brief as Milestone 2.
              </li>
              <li>
                <a href="http://bit.ly/alset-3dm-2019">Milestone 3 description</a>
                <br />
                Now that your team knows what is trying to improve, make a low resolution prototype
                that you could use to test whether your idea would improve making the decision. Low
                resolution prototypes can include pieces of paper that you can show someone so they
                can simulate using your solution. Low resolution prototypes also include interactive
                PowerPoint or Google Slides slideshows that hyperlink slides together to simulate a
                decision-making experience. When you have a testable prototype, submit the link as
                Milestone 3. Don’t worry, prototypes aren’t perfect and they don’t have to look
                pretty. They are just starting points for testing an idea and getting people
                talking.
              </li>
              <li>
                <a href="http://bit.ly/alset-3dm-2019">Milestone 4 description</a>
                <br />
                With your prototype in hand, test it with some people. Have them imagine making the
                decision you want to improve and let them use your prototype as part of their
                decision making process. Film it and link the video of people using your team’s
                prototype to make the decision as Milestone 4.
              </li>
              <li>
                <a href="http://bit.ly/alset-3dm-2019">Milestone 5 description</a>
                <br />
                As you test your prototype with people, be sure to record how they use your
                prototype and how they made the decision you intended to improve. Collect data that
                will help you decide whether your prototype would improve the decision making
                process.
                <br />
                Note: Your prototype doesn’t have to work at this stage. That is why you are testing
                it. However, your user tests should be designed to help you decide your next steps.
                <br />
                Submit a link to your team’s user test results as Milestone 5.
              </li>
              <li>
                <a href="http://bit.ly/alset-3dm-2019">Milestone 6 description</a>
                <br />
                Looking back over Milestones 1 through 5, create a slide deck that quickly
                summarises your project in 3 to 5 slides. Imagine the audience for your slideshow is
                a group of NUS decision makers that are weighing whether to pursue your solution to
                improve a decision NUS students have to make. In short, make your slides compelling.
                Submit a link to your slides as Milestone 6.
              </li>
            </ol>
            <li>What about these Paths? Are they important?</li>
            <ol type="a">
              <li>
                We have given everyone access to Paths (ie. tutorials) that cover simple ways to
                analyse and visualise data. Depending on who is on your team, they may be of some
                interest or use. <br />
                The Intro to the Data Lake Path provides a set of activities that may help you make
                sense of the kinds of data NUS collects about its students and how you can quickly
                make use of it. <br />
                The Vue Path may help you quickly create some dashboard components that you could
                test with people.
                <br /> The Python Basics Path is for people new to Python.
                <br /> The Machine Learning Path is for people who would like to know a little more
                about how Machine Learning works. <br />
                Again, qualification for 3DM@NUS is only dependent on the quality of the Milestones
                you deliver and not the number of path activities you complete.
              </li>
            </ol>
            <li>My team submitted everything before the presentation. What do we do next?</li>
            <ol type="a">
              <li>
                First, completing everything is amazing in itself! Your team has already proven
                itself! Now your team can sit back and relax or further refine your submission.
              </li>
            </ol>
          </ul>
        </SeeMoreComponent>
      </article>
    </Layout>
  );
}
