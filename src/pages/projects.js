import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
// import Seo from "../components/seo"

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <ul>
      <li>Internship at TYCA</li>
        <ul>
          <li>PowerPoint Summary</li>
        </ul>
      <li>Tech Talent Pipeline Bootcamp</li>
        <ul>
          <li>Final Week: Capstone Project</li>
          <li>Assignment: API Practice</li>
        </ul>
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />
export const Head = () => <title>Projects</title>

export default ProjectsPage;
