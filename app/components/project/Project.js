"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import "./projectstyle.css";

// Sample Project Data
const projects = [
  {
    title: "FabFinder",
    description: "A comprehensive Flesh and Blood card search and deck-building platform that helps players find the latest decklists and explore card details.",
    image: "/images/gif/FabFinder.gif",
    github: "https://github.com/Kenhie94/FabFinder",
    demo: "#",
  },
  {
    title: "TamaPudgy",
    description:
      "A fun and interactive daily caloric tracker where your TamaPudgy, a virtual companion, gains or loses weight based on your real-life eating habits, encouraging healthier choices through gamification.",
    image: "/images/gif/TomoPudgy.gif",
    github: "https://github.com/anthonymoon2/TomoPudgy",
    demo: "https://tomopudgy.onrender.com/",
  },
  {
    title: "Birdle",
    description: "Enjoy a fresh take on your favorite browser word game with this Wordle remake, featuring the same addictive gameplay and daily word challenges.",
    image: "/images/gif/Birdle.gif",
    github: "https://github.com/Kenhie94/Birdle",
    demo: "https://kenhie94.github.io/Birdle/",
  },
  {
    title: "MangaStash",
    description: "Explore and discover new manga effortlessly with this web app powered by the MAL API, allowing you to search, track, and store your favorite titles in your personalized database.",
    image: "/images/gif/Portfolio.gif",
    github: "https://github.com/Kenhie94/Portfolio",
    demo: "https://kenjyjap.com",
  },
  {
    title: "Yelpcamp",
    description: "Discover and share campgrounds with user reviews, interactive maps, authentication, and a dynamic commenting system.",
    image: "/images/gif/Yelpcamp.gif",
    github: "https://github.com/Kenhie94/YelpCamp",
    demo: "https://yelpcamp-uhu4.onrender.com/",
  },
  {
    title: "Portfolio",
    description: "Built in React, this portfolio website is built to last and showcase my best work and skills. Thanks for checking it out!",
    image: "/images/gif/Portfolio.gif",
    github: "https://github.com/Kenhie94/Portfolio",
    demo: "https://kenjyjap.com",
  },
];

export default function Projects() {
  return (
    <div>
      <div id="about" className="container projectContainer d-flex flex-row align-items-center justify-content-between">
        <h1>Projects</h1>
      </div>
      <div id="projects" className="projectBox container">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card projectCard">
                <img src={project.image} className="card-img" alt={project.title} />
                <div className="card-img-overlay overlay">
                  <h3 className="projectTitle">{project.title}</h3>
                  <p className="projectDescription">{project.description}</p>
                  <div className="d-flex justify-content-center gap-3">
                    <Link href={project.github} target="_blank" className="link">
                      <FaGithub /> See on GitHub
                    </Link>
                    {project.demo && (
                      <Link href={project.demo} target="_blank" className="link">
                        <FaGlobe /> Try it Out
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center mt-3">
          <div className={"card comingSoonCard"}>
            <h3>More Projects Coming Soon...</h3>
            <p>Stay tuned!</p>
            <div className="d-flex justify-content-center gap-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
