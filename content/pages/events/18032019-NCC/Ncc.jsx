import React from "react";
import styles from "./Ncc.module.scss";

import UtownLT51Map from "../../../assets/pictures/map/UtownLT51Map.png";
import aoc from "../../../assets/pictures/NCCandAOC/AOC2018.jpg";
import nccStudents from "../../../assets/pictures/NCCandAOC/ncc2017students.jpeg";
import Layout from "../../../../src/components/layout/layout";
import SEO from "../../../../src/components/seo";

import DateTimeVenue from "../../../../src/components/toolkit/dateTimeVenue/DateTimeVenue";
import SeeMoreComponent from "../../../../src/components/toolkit/seeMoreComponent/SeeMoreComponent";
import RegisterButton from "../../../../src/components/toolkit/button/RegisterButton";

export default function Ncc() {
  const eventInfo = {
    date: "18 March 2019",
    time: "9:00am to 5:00pm",
    venue: "Lecture Theatre (LT) 50, LT 51 and Auditorium 1, Stephen Riady Centre, University Town"
  };
  return (
    <Layout>
      <SEO title="NCC2019" />
      <article className={styles.article}>
        <h2>ALSET for National Coding Championships 2019</h2>
        <img className={styles.mapImage} src={nccStudents} alt="students at ncc 2017" />
        <h3>Overview</h3>
        <p>
          The National Coding Championships invites students to experience learning to code in a fun
          and engaging way. Guiding their on-screen characters through a series of progressively
          challenging coding quests, students can learn to write code and have fun at the same time!
        </p>
        <p>
          This invitation applies just as much to non-coding students as it does programming
          enthusiasts. All it takes for students to get started is just 5 minutes to setup and write
          some code, which can then open up a world of new opportunities.
        </p>
        <p>Intro Video:</p>
        <iframe
          src="https://www.youtube.com/embed/KeQoNG8dRwk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        {/* <iframe
          src="https://www.facebook.com/video/embed?video_id=2012100429004824"
          frameborder="0"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="NCC-registration-video"
        /> */}
        <a href="#eligibility">Check your eligibility</a>
        <br />
        <br />
        <RegisterButton registrationLink="#register" />
        <p>
          Furthermore, the top 16 qualifying schools in the junior and senior categories will be
          invited to attend the finals of the 2019 ALSET for National Coding Championships (18 Mar
          2019) with attractive <a href="#prizes">prizes</a> to be worn!
        </p>
        <br />
        <img
          className={styles.mapImage}
          src={aoc}
          alt="students with ALSET staff at ace of coders"
          name="register"
        />
        <h3>Registration</h3>
        <p>Registration Process Video:</p>
        <iframe
          src="https://www.youtube.com/embed/UlaYfr_vt9s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p>
          Please register under the category below that applies to you (watch video above as a
          guide):
          <ul>
            <li>
              <a href="https://achievements-prod.firebaseapp.com/#/cohorts/-LXNipwyqwMCw4tOGMr0">
                Junior Category
              </a>{" "}
              (Sec1, Sec2, Sec3)
            </li>
            <li>
              <a href="https://achievements-prod.firebaseapp.com/#/cohorts/-LXNj7hkRAg9hJL1o_nu">
                Senior Category
              </a>{" "}
              (Sec4, Sec5, JC, Poly, ITE)
            </li>
          </ul>
        </p>
        <h3>Finals:</h3>
        <DateTimeVenue eventInfo={eventInfo}>
          <SeeMoreComponent>
            <a className={styles.mapLink} href="https://bit.ly/UTownDirections">
              Getting to UTown
            </a>
            <img className={styles.mapImage} src={UtownLT51Map} alt="utown-Map" />
            <p>
              <i>
                LT51 is circled in red. Once you alight from Utown’s internal bus stop (only
                accessible by shuttle buses D1, D2, UT-CLB and UT-FoS), walk towards the shops,
                towards Food clique. Once at Food Clique, take the flight of stairs down. When you
                are at the ground floor (where Town Green is), look out for the drugstore, Guardian.
                LT 51 is one of the rooms to the left of Guardian. LT 50 is next door to LT 51.
              </i>
            </p>
          </SeeMoreComponent>
        </DateTimeVenue>
        <p name="prizes">
          <strong>Qualification Cut Off:</strong> Tuesday, March 12th, 5pm. (~5 days prior to the
          live event)
        </p>
        <p>
          <strong>Software Languages:</strong> Python 3.0 or Javascript
        </p>
        <h3>Prizes:</h3>
        <ul>
          <li>Recognition for top qualifying schools in each category</li>
          <li name="eligibility">Certificate of Participation for all qualifiers</li>
          <li>Honor and glory for all participating schools</li>
        </ul>
        <h3>Eligibility:</h3>
        <ul>
          <li>Junior Category - Sec1, Sec2, Sec3 students from MOE schools.</li>
          <li>Senior Category - Sec4, sec5, JC, high school, ITE and polytechnic students.</li>
        </ul>
        <h3>Coordinators:</h3>
        <ul>
          <li>Chris Boesch (ChrisBoesch@nus.edu.sg)</li>
        </ul>
        <h3>Current Finals Qualification Rankings</h3>
        <p>
          The top 16 schools in each of the junior and senior categories will be invited to the
          Finals on 18 March 2019.
        </p>
        <ul>
          <li>
            <a href="https://achievements-prod.firebaseapp.com/#/cohorts/-LXNipwyqwMCw4tOGMr0">
              Junior Category
            </a>{" "}
            (Sec1, Sec2, Sec3)
          </li>
          <li>
            <a href="https://achievements-prod.firebaseapp.com/#/cohorts/-LXNj7hkRAg9hJL1o_nu">
              Senior Category
            </a>{" "}
            (Sec4, Sec5, JC, Poly, ITE)
          </li>
        </ul>
        <h3>Passwords for individual school qualifying courses:</h3>
        <p>
          The course links and passwords will come later. Once they are issued, a school teacher may
          request for the password to be changed in order to limit which students can join the
          event. Teachers can contact Associate Professor Chris Boesch at NUS to have event
          passwords changed.
        </p>
        <h3>Frequently Asked Questions:</h3>
        <SeeMoreComponent>
          <ol>
            <li>How do students register?</li>
            <ol type="a">
              <li>
                Once students have signed in to the{" "}
                <a href="https://achievements-prod.firebaseapp.com/#/cohorts">
                  ALSET Achievements application
                </a>{" "}
                with their personal Gmail address, they can proceed to join the course for their
                school.
              </li>
            </ol>
            <li>How many participants will there be in the live events?</li>
            <ol type="a">
              <li>
                At least 64 students will be invited to attend the live junior event finals and at
                least 64 students will be invited to attend the live senior event finals. This year,
                Sec 4s and sec5s will be participating as part of the Senior Category.
              </li>
              <li>
                The top 16 schools in each of the junior and senior categories may elect to send 2
                teams to the competition. For mixed schools, the school must send two boys and two
                girls who participated in the qualification round (in two teams).
              </li>
            </ol>
            <li>Who is eligible?</li>
            <ol type="a">
              <li>Junior Category - All Sec1, Sec2, Sec3-aged students from MOE schools</li>
              <li>
                Senior Category - All Sec4+, JC, high school, ITE and polytechnic-aged students
              </li>
            </ol>
            <li>How will schools nominate/select the participants?</li>
            <ol type="a">
              <li>
                Schools can encourage their students to sign-in to the NUS ALSET Achievements
                application and then join the course for their school. If there is not yet a
                separate event for the student’s school, the students should proceed to join the
                “All Other Junior” or “All Other Senior” course. A dedicated qualification course
                will be setup for schools that register more than 5 students.
              </li>
              <li>
                Teachers will be asked to confirm which students will be representing their school.
                Confirmation requests will go out on March 11th, 2019. By default, schools can agree
                to nominate the top 2 (or 4 as long as they meet the above requirements) students
                from their school who have completed the most Achievements activities.
              </li>
              <li>
                The top 16 qualifying schools will be determined by which schools can get the most
                students to spend approximately 5-minutes to complete their first Achievements
                activity. For instance, the first Code Combat level only requires students to enter
                three lines of code:
              </li>
              <ol type="i">
                <li>hero.moveRight()</li>
                <li>hero.moveDown()</li>
                <li>hero.moveRight()</li>
              </ol>
              <li>
                Invitations will go out to students on the Wednesday before the live finals once
                schools have confirmed which students will be representing their school.
              </li>
            </ol>
            <li>Can people come to watch?</li>
            <ol type="a">
              <li>
                Yes. There will be additional seats in the afternoon where parents, teachers,
                friends and siblings can watch the live finals head-to-head matches.
              </li>
            </ol>
            <li>What platform will be used?</li>
            <ol type="a">
              <li>
                All registration and tracking will be done on the ALSET Achievements application and
                students can qualify by playing Code Combat and completing the other Achievements
                coding activities.
              </li>
              <li>
                The live event will be held as a multiplayer coding arena on the Code Combat
                platform.
              </li>
            </ol>
            <li>What will the scope of the problems be?</li>
            <ol type="a">
              <li>
                The finals will be similar to the Code Combat multiplayer arenas that the students
                can practice in advance. The last three few coding events that used the Code Combat
                platform had students competing in the Escort Duty, Tesla Tesoro, Zero Sum, Ace of
                Coders, and Sky Span arenas.
              </li>
            </ol>
            <li>
              Do students need a credit card or need to pay for any of the services that they join?
            </li>
            <ol type="a">
              <li>
                No. Code Combat provides hundreds of free levels for students to play. Students can
                skip all of the paid levels and just keep playing the free levels. The “red” levels
                are the free levels and the “blue” levels are the paid levels.
              </li>
            </ol>
          </ol>
        </SeeMoreComponent>
        <h3>
          <strong>Academic References:</strong> (click on links to download papers)
        </h3>
        <SeeMoreComponent>
          <p>
            “
            <a href="https://medium.com/@scboesch/2017-singapore-national-coding-championships-recap-7a2fcce75dc1">
              2017 Singapore National Coding Championships Recap
            </a>
            ”, by Chris Boesch, Medium.com.
          </p>
          <p>
            “
            <a href="http://ink.library.smu.edu.sg/sis_research/2046">
              Automated Mentor Assignment in Blended Learning Environments
            </a>
            ” by BOESCH, Shannon Christopher; STEPPE, Kevin, 2014, Klagenfurt.
          </p>
          <p>
            “
            <a href="http://ink.library.smu.edu.sg/sis_research/2047">
              Enabling National Software Development Competitions to Identify and Enhance Student
              Mentor Capability in Singapore
            </a>
            ” by BOESCH, Shannon Christopher; BOESCH, Sandra, 2014, Dublin.
          </p>
          <p>
            “
            <a href="http://ink.library.smu.edu.sg/sis_research/2229">
              Personalizing Software Development Practice Using Mastery-based Coaching
            </a>
            ” by BOESCH, Chris; BOESCH, Sandra, 2014, Canada International Conference on Education
            (CICE-2014).
          </p>
          <p>
            “
            <a href="http://ink.library.smu.edu.sg/sis_research/2045">
              Adaptive Gameplay for Programming Practice
            </a>
            ” by BOESCH, Chris; BOESCH, Sandra, 2013, 4th Annual International Conference on
            Computer Science Education: Innovation and Technology (CSEIT 2013): Proceedings: October
            28-29, Phuket, Thailand, GSTF, 36 - 38, Singapore.
          </p>
          <p>
            “
            <a href="http://ink.library.smu.edu.sg/sis_research/2050">
              Creating Adaptive Quests to Support Personalized Learning Experiences when Learning
              Software Languages
            </a>
            ” by BOESCH, Chris; BOESCH, Sandra, 2013, 2013 IEEE 63rd Annual Conference International
            Council for Educational Media (ICEM), IEEE, 1 - 7, Singapore.
          </p>
          <p>
            “<a href="http://ink.library.smu.edu.sg/sis_research/1707">Tournament-based Teaching</a>
            ” by BOESCH, Shannon Christopher; BOESCH, Sandra, 2012, Annual International Conference
            on Computer Science Education: Innovation and Technology, 3rd, 2012, 1 - 4, Singapore.
          </p>
          <p>
            “
            <a href="http://ink.library.smu.edu.sg/sis_research/1448">
              Case Study on Using a Programming Practice Tool for Evaluating University Applicants
            </a>
            ” by BOESCH, Shannon Christopher; BOESCH, Sandra, 2012, Annual International Conference
            on Computer Science Education: Innovation and Technology, 3rd, 2012, 1 - 4, Singapore.
          </p>
          <p>
            “
            <a href="http://ink.library.smu.edu.sg/sis_research/2247">
              Evolving an Information Systems Capstone Course to Align With the Fast Changing
              Singapore Marketplace
            </a>
            ” by BOESCH, Shannon Christopher; GAN, Benjamin Kok Siew, 2014, Capstone Design
            Conference 2014 Proceedings: 2-4 June, Columbus, Capstone Design Conference, 1 - 4,
            Columbus, OH.
          </p>
        </SeeMoreComponent>
      </article>
    </Layout>
  );
}
