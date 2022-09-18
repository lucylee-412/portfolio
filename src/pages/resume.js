import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'

import Layout from "../components/layout"
// import Seo from "../components/seo"

const ResumePage = () => {
  return (
    <Layout pageTitle="Resume">
      <StaticImage
        alt="Preview image of Lucy Lee's resume PDF"
        src="../images/ResumePreview.jpg"
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />
export const Head = () => <title>Resume</title>

export default ResumePage;
