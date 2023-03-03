import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout"
// import Seo from "../components/seo"

const TycaPage = () => {
  return (
    <Layout pageTitle="2022 Summer Internship at TYCA">
      <p>(Due to NDA, I cannot show any source code.)</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />
export const Head = () => <title>Internship: Summer 2022</title>

export default TycaPage;
