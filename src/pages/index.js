// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const IndexPage = ({ data }) => {
  return (
    // <main>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>
    <Layout pageTitle="Home Page">
      <p>I'm making this following the Gatsby Tutorial</p>
      <StaticImage src="../images/dachshund.webp" alt="explorer" />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
