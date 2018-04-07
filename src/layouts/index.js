import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: `${data.site.siteMetadata.description}` },
        { name: 'keywords', content: 'tester, tester123' },
      ]}
    />
    <Header data={data} location={location} />
    <Content>
      {children()}
    </Content>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  background: imageSharp(id: { regex: "/background.jpg/" }) {
    sizes(maxWidth: 1240) {
      ...GatsbyImageSharpSizes
    }
  }
}
`

export default TemplateWrapper
