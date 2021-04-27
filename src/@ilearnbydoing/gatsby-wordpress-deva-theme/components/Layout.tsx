import React, { useState } from "react"
import "@ilearnbydoing/gatsby-wordpress-deva-theme/src/styles/style.css";
import "@ilearnbydoing/gatsby-wordpress-deva-theme/src/styles/prism.css";
// import "../styles/style.css";
// import Navbar from "@ilearnbydoing/gatsby-wordpress-deva-theme/src/Navbar";
import Footer from "./Footer";
import { ArmadaFormsProvider } from "@ilearnbydoing/gatsby-wordpress-deva-theme/src/context/form-context";
import { useStaticQuery, graphql, Link } from "gatsby";
import { SettingsAndSlugs } from "@ilearnbydoing/gatsby-wordpress-deva-theme/src/models/settings-and-page-slugs.model";
import Helmet from "react-helmet";

const Layout: React.FC = ({ children }) => {
  // client test = https://drafbox-backend-dev.herokuapp.com/api/project/5ea1575f8c9344001f9a89ff/forms
  const [isExpanded, toggleExpansion] = useState(false)
  const data = useStaticQuery<SettingsAndSlugs>(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          apiUrl
          header {
            navigation {
              url
              label
            }
          }
          footer {
            copyright
            navigation {
              label
              url
            }
          }
          socialLinks {
            twitter
            facebook
            instagram
            linkedin
            github
            pinterest
            youtube
            dribbble
            behance
            externalLink
            whatsapp
          }
          logoUrl
          siteTitle
          language
        }
      }
    }
  `);

  return (
      <>
      <Helmet htmlAttributes={{ lang: data.site.siteMetadata.language }} />
              <div className="relative z-20 w-full h-24 px-8 pt-2 bg-white">

<div className="container flex items-center justify-between h-full max-w-6xl mx-auto">
    <a href="/" className="relative flex items-center inline-block h-5 h-full font-black">
        <svg  className="w-auto h-8 mt-1" viewBox="0 0 215 151" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="56.965%" y1="53.262%" x2="7.891%" y2="29.24%" id="b"><stop stopColor="#FFCD26" offset="0%"/><stop stopColor="#FFDF95" offset="100%"/></linearGradient><path d="M95.655.001c-24.386 0-43.538 13.864-52.36 34.66-5.144 12.126-3.711 24.522.084 29.027 2.435-5.804 11.57-15.424 29.476-15.424h79.952c29.783 0 54.375-30.377 61.963-48.263H95.655zM67.693 65.916C23.419 65.916.085 105.344 0 137.666v.345c.011 4.322.439 8.517 1.291 12.466 2.433-5.804 19.956-36.297 47.062-36.297h23.225c29.783 0 54.375-30.378 61.963-48.264H67.693z" id="a"/></defs><g fill="none" fillRule="evenodd"><mask id="c" fill="#fff"><use xlinkHref="#a"/></mask><path d="M95.655.001c-24.386 0-43.538 13.864-52.36 34.66-5.144 12.126-3.711 24.522.084 29.027 2.435-5.804 11.57-15.424 29.476-15.424h79.952c29.783 0 54.375-30.377 61.963-48.263H95.655zM67.693 65.916C23.419 65.916.085 105.344 0 137.666v.345c.011 4.322.439 8.517 1.291 12.466 2.433-5.804 19.956-36.297 47.062-36.297h23.225c29.783 0 54.375-30.378 61.963-48.264H67.693z" fill="url(#b)" mask="url(#c)"/></g></svg>
        <span className="ml-3 text-2xl font-black">DurgeshGupta</span>
    </a>

    <div id="nav" className={`${ isExpanded ? `block` : `hidden` } absolute top-0 left-0 block w-full mt-20 border-b border-gray-200 sm:border-none sm:px-5 sm:block sm:relative sm:mt-0 sm:px-0 sm:w-auto`}>
        <nav className="flex flex-col items-center py-3 bg-white border border-gray-100 sm:flex-row sm:bg-transparent sm:border-none sm:py-0">
            <a href="/" className="relative px-1 mb-1 mb-5 mr-0 text-base font-bold sm:mb-0 sm:mr-4 lg:mr-8">Home<span className="absolute bottom-0 left-0 w-full h-1 -mb-2 bg-yellow-300 rounded-full"></span></a>
            {/* <a href="#_" className="px-1 mb-1 mb-5 mr-0 text-base font-bold sm:mb-0 sm:mr-4 lg:mr-8">Pages</a> */}
            <a href="/about" className="px-1 mb-1 mb-5 mr-0 text-base font-bold sm:mb-0 sm:mr-4 lg:mr-8">About</a>
            <a href="/blog" className="px-1 mb-1 mb-5 mr-0 text-base font-bold sm:mb-0 sm:mr-4 lg:mr-8">Blog</a>
            <a href="/projects" className="px-1 mb-1 mb-5 mr-0 text-base font-bold sm:mb-0 sm:mr-4 lg:mr-8">Projects</a>
            <a href="/contact" className="relative mb-5 sm:mb-0">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded"></span>
                <span className="relative inline-block w-full h-full px-3 py-1 text-base font-bold transition duration-100 bg-white border-2 border-black rounded fold-bold hover:bg-yellow-400 hover:text-gray-900">CONTACT</span>
            </a>
        </nav>
    </div>
    <button onClick={() => toggleExpansion(!isExpanded)}>
            <div id="nav-mobile-btn" className={`${isExpanded ? `close` : ``} absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none sm:hidden sm:mt-10`}>
        <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
        <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
            </div>
            </button>
</div>
</div>


        <hr />
        {children}
        <Footer footerData={data} />
      </>
              

  );
};

export default Layout;
