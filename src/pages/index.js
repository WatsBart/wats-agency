import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Wats Agency!">
        <p>Lorem ipsum</p>
        <StaticImage
          alt="Artist image"
          src="../images/image1-min.jpg"
        />
      </Layout>
    </main>
  )
}

export default IndexPage