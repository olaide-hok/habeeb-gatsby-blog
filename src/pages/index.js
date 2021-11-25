import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"


const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: rebeccapurple;

  &:hover {
    color: black;
  }
`
const BlogBody = styled.div`
  text-align: justify;
`
export default ({ data }) => {
  console.log(data);
  return (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1> Habeeb's Thoughts on Fullstack Technologies</h1>
      {/* shows the number of blogpost <h4>{data.allMarkdownRemark.totalCount}</h4> */}
      {
        data.allMarkdownRemark.edges.map(({node}) => (
        <BlogBody key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              { node.frontmatter.title } - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </BlogBody>
        ))
      }
    </div>
  </Layout>)
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
