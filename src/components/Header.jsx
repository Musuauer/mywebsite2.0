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
      .header {
        margin-bottom: 2rem;
      }
      .navi {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .menu_desktop {
          .menu_desktop_link {
            margin-left: 2rem;
          }
        }
      }
      .owner_name {
        font-family: ${ theme.fonts.secondary };
      }
  `

    return (
        <div className={ cx( stylez, 'header' ) }>

            <div className='navi'>
                <Link to='/'>
                    {/* <img alt='Logo' className='' src='logo.svg' /> */}
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

            {/* <button
              className='hamburger_menu'
              onClick={ () => setIsMenuOpen( true ) }
              aria-label='Open Menu'
            >
                <FaBars className='hamburger_icon' />
            </button> */}

            {/* <MenuMobile
              isOpen={ isMenuOpen }
              setIsOpen={ setIsMenuOpen }
              links={ site.data.menu }
            /> */}

        </div>
    )
}

export default Header
