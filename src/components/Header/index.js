import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'


class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        this.wrapper.animate([
          { height: '30vh' },
          { height: '70vh' }
        ], {
            duration: 300,
            fill: 'forwards',
            ease: 'cubic-bezier(0.86, 0, 0.07, 1)',
            iterations: 1
          })
      } else {
        this.wrapper.animate([
          { height: '70vh' },
          { height: '30vh' }
        ], {
            duration: 300,
            fill: 'forwards',
            ease: 'cubic-bezier(0.86, 0, 0.07, 1)',
            iterations: 1
          })
      }
    }
  }

  render() {
    const { data, location } = this.props
    return (
      <HeaderContainer
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
        isHome={location.pathname === '/'} >
        <HeaderBody>
          <h1>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {data.site.siteMetadata.title}
            </Link>
            <div>{data.site.siteMetadata.description}</div>
          </h1>
        </HeaderBody>
        <MainNav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to={'/page-2'}>About</Link></li>
            <li><a href='http://www.tonydanza.com/'>Tony Danza</a></li>
          </ul>
        </MainNav>
        <Img
          sizes={data.background.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0.3
          }} />
      </HeaderContainer>

    );
  }
}

const HeaderContainer = styled.div`
  height: ${({ isHome }) => (isHome ? '70vh' : '30vh')};
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.45rem;
  padding: 0px 1.0875rem 1.45rem;
  background-color: #524763;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;

    li {
      z-index: 5;
      margin-left: 10px;

      a {
            text-decoration: none;
        color: #fff;

        &:hover {
            border-bottom: 3px solid #524763;
        }
      }
    }
  }
`

const HeaderBody = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`


export default Header