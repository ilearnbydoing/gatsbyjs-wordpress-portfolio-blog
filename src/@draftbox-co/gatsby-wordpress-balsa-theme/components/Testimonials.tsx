import React from "react"
import TestimonialCard from "../components/TestimonialCard"

export default function Testimonials() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 min-w-screen">
        <div className="max-w-6xl px-10 mx-auto bg-gray-100">
            <div className="flex items-center">
                <div className="flex flex-col items-start justify-center w-1/2 sm:w-12/12 h-full pr-8">
                    <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">My customers loves my solutions
                    </p>
                    <h2
                        className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                        Testimonials</h2>
                    <p className="my-6 text-lg text-gray-600">Don't just take our word for it, read from my extensive list of
                        projects and customer testimonials.</p>
                    <a href="/contact"
                        className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">Contact me</a>
                </div>
                <div className="w-1/2 sm:12/12">
                    <TestimonialCard testimonialText="It's amazing to work with him, he is super fast in WordPress development." clientName="Priyanka S." companyNamePosittion="CEO, Organic Disha Company" profilePhoto="https://source.unsplash.com/256x256/?indian,women,face" />
                    <TestimonialCard testimonialText="Durgesh has been very supprtive even the project got completed he helped a lot to getup and running many things." clientName="Amita A." companyNamePosittion="Founder, Trainer Website" profilePhoto="https://source.unsplash.com/256x256/?indian,female,face" />
                    <TestimonialCard testimonialText="He got amazing skills in web development, you name a problem he got a solution." clientName="Satheesh" companyNamePosittion="CEO, Journal Publication" profilePhoto="https://source.unsplash.com/256x256/?indian,man,face" />
                </div>
            </div>
        </div>
    </div>)
}