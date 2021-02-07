import React from "react"
import Img from "gatsby-image"

export default function ProjectCard(props) {
    return (
        <div className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
            {/* <img className="h-56 rounded-t-lg" alt="article image"
                    src={props.projectImage} /> */}
                             <a href={props.projectUrl} target="_blank" rel="nofollow"
                    className=""><Img className="h-56 rounded-t-lg" 
              resolutions={props.projectResolution}
              alt={props.projectTitle}
            /></a>
            {/* <div className="px-6 pt-4 mb-2 text-xl font-bold">
                <span>{props.projectTitle}</span>
            </div>
            <div className="px-6 pt-2">
                <small>{props.clientName} | {props.projectDate}</small>
                <div className="overflow-hidden h-16 ...">{props.projectExcerpt}</div>
            </div> */}
        </div>
    </div>
      )
}