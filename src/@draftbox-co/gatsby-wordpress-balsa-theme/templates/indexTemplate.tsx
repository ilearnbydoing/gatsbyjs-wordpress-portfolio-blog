import React from "react";
import Layout from "@draftbox-co/gatsby-wordpress-balsa-theme/src/components/Layout";
import { graphql } from "gatsby";
import { PostDescription } from "@draftbox-co/gatsby-wordpress-balsa-theme/src/models/all-post-description.model";
import { PaginationContext } from "@draftbox-co/gatsby-wordpress-balsa-theme/src/models/pagination.model";
import PostCard from "@draftbox-co/gatsby-wordpress-balsa-theme/src/components/PostCard";
import Pagination from "@draftbox-co/gatsby-wordpress-balsa-theme/src/components/Pagination";
import WebsiteMeta from "@draftbox-co/gatsby-wordpress-balsa-theme/src/components/meta/website-meta";
import url from "url";
import Hero from "../components/Hero";
import Testimonial2 from "../components/Testimonials2";
import classNames from "classnames";
import CtaMini from "@draftbox-co/gatsby-wordpress-balsa-theme/src/components/CtaMini";
import Header from "../components/Header";

type IndexPageProps = {
  data: {
    // allGhostPost: AllGhostPostDescription;
    // ghostSettings: {
    //   title: string;
    //   description: string;
    //   cover_image: string;
    // };
    allWordpressPost: {
      edges: {
        node: PostDescription;
      }[];
    };
    site: {
      siteMetadata: {
        siteTitle: string;
        siteDescription: string;
        coverUrl: string;
        siteUrl: string;
      };
    };
  };
  location: any;
  pageContext?: PaginationContext;
};

const IndexPage: React.FC<IndexPageProps> = ({
  data,
  location,
  pageContext,
}) => {
  const { site, allWordpressPost } = data;

  const backgroundImage = site.siteMetadata.coverUrl
    ? url.resolve(site.siteMetadata.siteUrl, site.siteMetadata.coverUrl)
    : null;

  return (
    <>
      <Layout>
        <WebsiteMeta />
        <Hero />
        <Header headerText="Latest From Blog" />
        <div className="spacer my-8"></div>
        <section className="px-4 container mx-auto">
          <div className="flex justify-center flex-wrap -mx-4">
            {allWordpressPost.edges.map(({ node }, i) => {
              return <PostCard post={node} key={i} />;
            })}
          </div>
        </section>

        {/* Pagination */}
        <Pagination pageContext={pageContext} />
        <Testimonial2 />
        <CtaMini />
      </Layout>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query wordpressQueryAndWordpressQuery($skip: Int!, $limit: Int!) {
    allWordpressPost(
      sort: { fields: [sticky, date], order: [DESC, DESC] }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...WordPressPostData
        }
      }
    }
    site {
      siteMetadata {
        siteTitle
        siteDescription
        coverUrl
        siteUrl
      }
    }
  }
`;
