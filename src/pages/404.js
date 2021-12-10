import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="page-content">
        <h1>404: Page Not Found</h1>
        <p>
          Go back to the <Link to="/">home page</Link>.
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
