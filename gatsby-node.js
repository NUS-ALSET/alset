const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);

  pageList = [
    {
      path: "activities/ncc/Ncc",
      slug: "/events/ncc"
    },
    {
      path: "activities/edmNus/EdmNus",
      slug: "/events/3dm@nus"
    }
  ];
  createPagesDirectly = list => {
    list.map(item => {
      const listItem = path.resolve(`./content/pages/${item.path}.jsx`);
      createPage({
        path: item.slug,
        component: listItem
      });
    });
  };
  createPagesDirectly(pageList);

  // const Ncc = path.resolve(`./content/pages/activities/ncc/Ncc.jsx`);
  // createPage({
  //   path: "/activities/ncc",
  //   component: Ncc
  // });

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
