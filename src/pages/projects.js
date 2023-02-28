import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
// import Seo from "../components/seo"

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <ul>
        <li>Personal Coding Challenges</li>
          <ul>
            <li><Link to="/projects/2023-02-16">To-Do List</Link></li>
          </ul>
        <li>Internship at TYCA</li>
          <ul>
            <li><Link to="/projects/2022-08-16">PowerPoint Summary of Internship Work</Link></li>
          </ul>
        <li>Tech Talent Pipeline Bootcamp</li>
          <ul>
            <li><Link to="/projects/2022-01-28">Final Week: Capstone Project</Link></li>
          </ul>
        <li>Queensborough Community College 2021 Software Engineering Micro-Credential</li>
          <ul>
            <li>
              <Link 
                to="https://lucylee-412.github.io/microSE_2021/Index/index.html"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Final Project Portfolio
              </Link>
            </li>
          </ul>
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />
export const Head = () => <title>Projects</title>

export default ProjectsPage;
