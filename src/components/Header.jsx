import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import MenuMobile from './MenuMobile'
import { css, cx } from 'emotion'
import { useTheme } from '@emotion/react'
// import { FaBars } from 'react-icons/fa'

const Header = () => {
    // const [ isMenuOpen, setIsMenuOpen ] = useState( false )

    const { site } = useStaticQuery( graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  ` )

    const theme = useTheme()

    const stylez = css`
        position: fixed;
        width: 80%;
        top: 0;
        left: 0;
        right: 0;
        margin: 2rem auto;
        z-index: 9;
      .navi {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .menu_desktop {

          .menu_desktop_link {
            margin-left: 5rem;
            font-weight: ${ theme.fontWeight.thin };
            padding: 0 5px;
            :hover {
              background-color: black;
              color: white;
            }
          }
          .menu_desktop_link_active {
            /* border-bottom: 2px solid black; */
            background-color: black;
            color: white;
          }
        }
      }
      .owner_name {
        font-family: ${ theme.fonts.secondary };
        font-weight: ${ theme.fontWeight.thin };

      }
  `

    return (
        <div className={ cx( stylez, 'header' ) }>

            <div className='navi'>
                <Link to='/'>
                    <h1 className='owner_name'>
                      Guillermo Gudiño
                    </h1>
                </Link>

                <div className='menu_desktop'>
                    {site.data.menu.map( ( link, key ) => (
                        <Link
                          key={ `menu_desktop_link${ key }` }
                          className='menu_desktop_link'
                          activeClassName='menu_desktop_link_active'
                          to={ link.to }
                        >
                            {link.name}
                        </Link>
                    ) )}
                </div>

            </div>

        </div>
    )
}

export default Header
