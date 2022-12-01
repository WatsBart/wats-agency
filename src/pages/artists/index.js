import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Artist from "../../components/artist"
import {
  hero,
  section,
  subtitle,
  artists,
  description
} from "../../page.module.css"

// Imports

const ArtistsPage = ({
  data: {
    allWpArtist: { edges },
    wpPage: { artistsFields },
  },
}) => {
  const image = getImage(artistsFields.picture.localFile)
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      <GatsbyImage
      className={hero} 
        image={image}
        alt={artistsFields.picture.altText}
      />
      <section className={section}>
        <h2 className={subtitle}>{artistsFields.title}</h2>
        <div
        className={description}
          dangerouslySetInnerHTML={{
            __html: artistsFields.description,
          }}
        />
        <div className={artists}>
          {edges.map(({ node: artist }) => (
            <Artist key={artist.id} slug={artist.slug} artist={artist} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
// Page Query

export const query = graphql`
query {
  wpPage(slug: {eq: "artists"}){
    artistsFields {
      description
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        altText
      }
    }
  }
  allWpArtist {
    edges {
      node {
        artistMeta {
          artistName
          firstName
          lastName
          profilePicture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
              }
            }
            altText
          }
        }
        slug
        id
      }
    }
  }
}
`

export default ArtistsPage