import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to your new Gatsby site.</h1>
    <p>Feel free to read any of my blog posts</p>
    <div>
      {
        data.allMarkdownRemark.edges.map(post => (
          <Link
            to={post.node.frontmatter.path}
            key={post.node.id}>
            { post.node.frontmatter.title }
          </Link>
        ))
      }
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`
    query IndexQuery {
      allMarkdownRemark(limit: 10) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
`;

export default IndexPage
