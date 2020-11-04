import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import ProjectData from "../data/sites.yaml"
import ProjectCard from "../components/projectCard"

export default function featuredProject() {
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
        <div className="flex flex-col items-center justify-center mt-10 mb-10 sm:flex-row">
              {data.allSitesYaml.edges.map(({ node }, index) => (
                  <ProjectCard key={`${index}`} projectResolution={node.childScreenshot.screenshotFile.childImageSharp.resolutions} projectTitle={node.title} clientName={node.name} projectDate={node.date} projectExcerpt={node.excerpt} projectUrl={node.url} />
              ))}
    {/* <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" />
    <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" />
    <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" />
    <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" /> */}
    
</div>
        
    )
}
