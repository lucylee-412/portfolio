import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout"
// import Seo from "../components/seo"

const MeopetsPage = () => {
  return (
    <Layout pageTitle="TTP Capstone Project: Meopets">
      <b>GitHub:</b>
      <ul>
        <li><a href="https://github.com/lucylee-412/meopets-frontend" target="_blank" rel="noopener noreferrer">Frontend</a></li>
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />
export const Head = () => <title>Bootcamp: Jan 2022</title>

export default MeopetsPage;
