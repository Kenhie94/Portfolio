import "./aboutstyle.css";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export default function About() {
  return (
    <div>
      <div id="about" className="container aboutContainer d-flex flex-row align-items-center justify-content-between">
        {/* Left Side - Text */}
        <div className="textContent d-flex flex-column">
          <h1>About Me</h1>
          <p>
            Hey there! I'm <span>Kenjy</span>, a Full-Stack Developer from California who loves problem-solving, coding, and using tech to build cool and meaningful stuff.
          </p>
          <p>
          I'm always diving into new technologies, and right now, I'm really into <span>Next.js</span>. I love learning, experimenting with different frameworks, and keeping up with the ever-changing world of web development.
          </p>
          <p>
            I'm a fast learner and super motivated when I have a goal in sight. Working with passionate developers keeps me inspired to push my limits, ask meaningful questions, and improve my skills. I am self-motivated but excel equally well in teams, where I can contribute to building a positive and encouraging environment and share knowledge along the way.
          </p>
          <p>
            Outside of coding, you'll probably find me rock climbing, camping, or jamming to live music. I'm also a huge gamer—whether it's FPS, MMORPGs, or TCG/Board Games, I'm always down for a good
            match.
          </p>
          <p>
            If you’d like to connect, feel free to reach out to me on{" "}
            <span className="spanLink">
              <a href="https://www.linkedin.com/in/kenjyjap/">LinkedIn</a>
            </span>{" "}
            or{" "}
            <span className="spanLink">
              <a href="https://github.com/Kenhie94">GitHub</a>
            </span>
            . You can also contact me via email at <strong>kenhiebusiness@gmail.com</strong>. Let's chat!
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="imageContainer">
          <img src="/images/Profile_02.jpg" alt="Kenjy Jap" className="profileImage" />
        </div>
      </div>

      <div id="resume" className="container aboutContainer d-flex flex-row align-items-center justify-content-between">
        <div className="textContent d-flex flex-column">
          <h1 className="sectionTitle">Experience</h1>
          <div className="timeline">
            {/* <!-- Experience Item 1 --> */}
            <div className="timelineItem">
              <div className="timelineIcon"></div>
              <div className="timelineContent">
                <h3>
                  Software Developer <span className="company">@Fab Finder</span>
                </h3>
                <p className="date">December 2024 - Present</p>
                <ul>
                  <li>Designed and developed a web application to optimize card search functionality and provide the latest decklists for new players.</li>
                  <li>Leveraged the Next.js full-stack framework with MongoDB and Node.js to build a scalable and efficient platform.</li>
                  <li>Improved system efficiency by integrating API calls, ensuring accurate and up-to-date card information retrieval.</li>
                </ul>
              </div>
            </div>

            {/* <!-- Experience Item 2 --> */}
            <div className="timelineItem">
              <div className="timelineIcon"></div>
              <div className="timelineContent">
                <h3>
                  Software Developer <span className="company">@UX/UI Boot Camp</span>
                </h3>
                <p className="date">August 2024 - November 2024</p>
                <h4>
                  <span>Birdle</span>
                </h4>
                <ul>
                  <li>Led a three-person development team in designing and building a web-based game application.</li>
                  <li>Developed a Wordle-inspired game using JavaScript, HTML, and CSS, focusing on responsive design and user-friendly gameplay mechanics.</li>
                  <li>Implemented game logic and state management, ensuring smooth interactivity and real-time feedback.</li>
                </ul>
                <h4>
                  <span>TamaPudgy</span>
                </h4>
                <ul>
                  <li>
                    Developed TamaPudgy, a full-stack MERN web app that gamifies fitness tracking, featuring a Tamagotchi-inspired companion that gains or loses weight based on users' daily caloric
                    intake.
                  </li>
                  <li>Designed and developed the TamaPudgy UI using Tailwind CSS, leveraging its utility-first approach to create a visually appealing and responsive user experience.</li>
                  <li>Implemented a robust back-end system to securely manage user data, track progress, and optimize performance for a seamless fitness tracking experience.</li>
                </ul>
              </div>
            </div>

            {/* <!-- Experience Item 3 --> */}
            <div className="timelineItem">
              <div className="timelineIcon"></div>
              <div className="timelineContent">
                <h3>
                  Software Developer <span className="company">@Yelpcamp</span>
                </h3>
                <p className="date">June 2024 - July 2024</p>
                <ul>
                  <li>Developed a campground review app using JavaScript and EJS, enabling users to create and explore campgrounds across the US.</li>
                  <li>Integrated Cloudinary for efficient image storage and management.</li>
                  <li>Implemented a dynamic rating system with user authentication and personalized review listings.</li>
                </ul>
              </div>
            </div>
          </div>
          <h1>Education</h1>
          <div className="timeline">
            {/* <!-- Education Item --> */}
            <div className="timelineItem">
              <div className="timelineIcon"></div>
              <div className="timelineContent">
                <h3>
                  UX/UI Software Development Boot Camp <span className="company">@University of Irvine</span>
                </h3>
                <p className="date">August 2024 - November 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel showThumbs={false} showStatus={false} infiniteLoop>
            {/* Image 1 */}
            <div className="imageContainer">
              <img src="/images/Resume.jpg" alt="Another Certification" className="carouselImage" />
            </div>

            {/* Image 2 */}
            <div className="imageContainer">
              <img src="/images/UCI-bootcamp-certification.jpg" alt="Kenjy Jap Certification" className="carouselImage" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
