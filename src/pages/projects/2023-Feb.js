import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout"
// import Seo from "../components/seo"

const ToDoPage = () => {
  return (
    <Layout pageTitle="To-Do App">
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />
export const Head = () => <title>Project: Feb 2023</title>

export default ToDoPage;
