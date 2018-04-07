import React, { Component } from 'react';
import styled from 'styled-components'

class PostPage extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Date>{data.markdownRemark.frontmatter.date}</Date>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }}></div>
      </div>
    );
  }
}

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
        slug: {
          eq: $slug
        }
    }) {
      html
      frontmatter {
        title
        date(formatString: "dddd, MMMM DD YYYY")
      }
    }
  } 
`
const Date = styled.div`
  padding: 0 15px 25px;
`