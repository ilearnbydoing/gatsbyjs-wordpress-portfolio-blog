import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

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
        <div className="flex flex-col items-center justify-center mt-10 mb-10 sm:flex-row">
              {data.allSitesYaml.edges.map(({ node }, index) => (
                  <ProjectCard key={`${index}`} projectResolution={node.childScreenshot.screenshotFile.childImageSharp.resolutions} projectTitle={node.title} clientName={node.name} projectDate={node.date} projectExcerpt={node.excerpt} projectUrl={node.url} />
              ))}
    
</div>
            </section>
            </Layout>
    )
}
