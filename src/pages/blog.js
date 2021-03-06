import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import styles from "./pages.module.scss";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <section className={styles.article}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <article className={`${styles.sectionBlog} ${styles.section}`}>
                <img src={node.frontmatter.image.childImageSharp.resolutions.src} />
                <div key={node.fields.slug}>
                  <h3>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              </article>
            );
          })}
        </section>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              id
              childImageSharp {
                id
                resolutions {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
