// Stap 1: Importeer React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Definieer je component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About us">
      <p>Artist Agency was founded in 1977 by founder, John Doe. AA continues to be at the forefront of art by establishing the careers of our talents on a holistic level -- and setting trends within the industry. </p>
      </Layout>
    </main>
  )
}

// Stap 3: Exporteer je component
export default AboutPage