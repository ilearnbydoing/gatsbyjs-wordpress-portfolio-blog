import React from "react"
import ProjectData from "../content/projects.yaml"
import ProjectCard from "../components/projectCard"

export default function featuredProject() {
    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-10 sm:flex-row">
              {ProjectData.map((data, index) => {
                  return     <ProjectCard key={`${index}`} projectImage={data.projectImage} projectTitle={data.projectTitle} clientName={data.clientName} projectDate={data.projectDate} projectExcerpt={data.projectExcerpt} projectUrl={data.projectUrl} />
      })}
    {/* <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" />
    <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" />
    <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" />
    <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" /> */}
    
</div>
        
    )
}