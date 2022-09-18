import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
// import Seo from "../components/seo"

const ResumePage = () => {
  return (
    <Layout pageTitle="Resume">
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />
export const Head = () => <title>Resume</title>

export default ResumePage;
