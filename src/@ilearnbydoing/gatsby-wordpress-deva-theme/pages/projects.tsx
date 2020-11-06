import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Projects() {
    const data = useStaticQuery(
        graphql`{
            allSitesYaml {
              edges {
                node {
                  url
                  title
                  name
                  date
                  excerpt
                  childScreenshot {
                    screenshotFile {
                        childImageSharp {
                            resolutions(width: 384, height: 288) {
                              ...GatsbyImageSharpResolutions
                            }
                          }
                    }
                  }
                }
              }
            }
          }
        `
    )
    
    return (

        <Layout>
        <Header headerText="Projects" />
        <section className="container mx-auto">
          <FeaturedProjects />
            </section>
            </Layout>
    )
}
