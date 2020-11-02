import React from "react"
import ProjectCard from "../components/projectCard"

export default function featuredProject() {
    return (
        <section className="px-4 container mx-auto">
        <div className="flex flex-col items-center justify-center mt-10 mb-10 sm:flex-row">
    <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" />
    <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" />
    <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" />
    {/* <ProjectCard projectImage="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" projectTitle="WebAnaya.com" clientName="WebAnaya" projectDate="01-02-2020" projectExcerpt="WebAnaya.com is a corporate web agency website" projectUrl="https://www.webanaya.com" /> */}
    
</div>
        </section>
    )
}