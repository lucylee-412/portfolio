import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout"
// import Seo from "../components/seo"

const UnadatPage = () => {
  return (
    <Layout pageTitle="2021 Summer Internship at Unadat">
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />
export const Head = () => <title>Internship: Summer 2021</title>

export default UnadatPage;
