import React from "react"

export default function ProjectCard(props) {
    return (
        <div className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
            <img className="h-56 rounded-t-lg" alt="article image"
                src={props.projectImage} />
            <div className="px-6 pt-4 mb-2 text-xl font-bold">
                <span>{props.projectTitle}</span>
            </div>
            <div className="px-6 pt-2">
                <small>{props.clientName} | {props.projectDate}</small>
                <div className="overflow-hidden h-16 ...">{props.projectExcerpt}</div>
            </div>
            <div className="px-6 pb-4">
                <a href={props.projectUrl} target="_blank"
                    className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full">#HTML</a>
                <a href="#"
                    className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full">#CSS</a>
                <a href="#"
                    className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-teal-400 rounded-full">#Web</a>
            </div>
        </div>
    </div>
      )
}