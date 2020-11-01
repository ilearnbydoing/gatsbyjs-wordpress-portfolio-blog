import React from "react"
import TestimonialCard2 from "../components/TestimonialCard2"

export default function Testimonials2() {
    return (
        <div id="testimonials" className="flex items-center justify-center w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
        <div className="max-w-6xl mx-auto">
            <div className="flex-col items-center ">
                <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
                    <p className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">My customers love
                        my solutions
                    </p>
                    <h2
                        className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                        Testimonials</h2>
                    <p className="my-6 text-xl font-medium text-gray-500">Don't just take my word for it, read from our
                        extensive
                        list of projects and customer testimonials.</p>

                </div>
                <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
                        <div className="w-full xl:w-1/2 xl:pr-8">
                    <TestimonialCard2 testimonialText="It's amazing to work with him, he is super fast in WordPress development." clientName="Priyanka S." companyNamePosittion="CEO, Organic Disha Company" profilePhoto="https://source.unsplash.com/256x256/?indian,women,face" />
                    <TestimonialCard2 testimonialText="Durgesh has been very supprtive even the project got completed he helped a lot to getup and running many things." clientName="Amita A." companyNamePosittion="Founder, Trainer Website" profilePhoto="https://source.unsplash.com/256x256/?indian,female,face" />
                            </div>
                            <div className="w-full xl:w-1/2 xl:pl-8">
                    <TestimonialCard2 testimonialText="He got amazing skills in web development, you name a problem he got a solution." clientName="Satheesh" companyNamePosittion="CEO, Journal Publication" profilePhoto="https://source.unsplash.com/256x256/?indian,man,face" />
                    <TestimonialCard2 testimonialText="I worked with Durgesh on a organic website and he delivered us one of the best project that I ever worked with" clientName="Rajan" companyNamePosittion="CEO, Organic Sutra" profilePhoto="https://source.unsplash.com/256x256/?indian,male,face" />
                    </div>
                </div>


            </div>
        </div>
    </div>
    )
}