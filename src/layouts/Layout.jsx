import React from 'react'
import 'typeface-inter'
import { ThemeProvider } from '@emotion/react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import FooterMobile from '../components/FooterMobile'
import '../styles/style.css'
import { theme } from '../styles/theme'
import { injectGlobal } from 'emotion'

import * as Habibi from '../assets/fonts/Habibi-Regular.ttf'
import * as OpenSansLight from '../assets/fonts/OpenSans-Light.ttf'
import * as OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf'
import * as OpenSansSemiBold from '../assets/fonts/OpenSans-Semibold.ttf'

injectGlobal`

    @font-face{
        font-family: 'Habibi';
        src: url(${ Habibi.default });
    }

    @font-face{
        font-family: 'OpenSans';
        src: url(${ OpenSansLight.default });
        font-weight: 100;
    }

    @font-face{
        font-family: 'OpenSans';
        src: url(${ OpenSansRegular.default });
        font-weight: 300;
    }

    @font-face{
        font-family: 'OpenSans';
        src: url(${ OpenSansSemiBold.default });
        font-weight: 600;
    }


    html, body {
        font-family: OpenSans, Helvetica, Arial, sans-serif;
        font-size: ${ theme.fontSize.small };
        color: ${ theme.colors.primary };
        a {
            color: ${ theme.colors.primary };
        }
        a:visited {
            color: ${ theme.colors.primary };
        }
    }

    .layout {
        width: 80%;
        margin: 2rem auto;
    }
    .children {
        margin-top: 8rem;
    }
    .footer_desktop {
        ${ theme.breakpoints.mobile } {
            display: none;
        }
    }
    .footer_mobile {
        display: none;
        ${ theme.breakpoints.mobile } {
            display: block;
        }
    }
    .contact_wrapper,.about_wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        .right_container {
            width: 25%;
        }
    }

`

const Layout = ( { children } ) => {
    return (
        <div className='layout'>
            <ThemeProvider theme={ theme }>

                <Header />
                {/* <HeaderMobile /> */}
                <div className='children'>
                    {children}
                </div>
                <Footer />
                <FooterMobile />
            </ThemeProvider>
        </div>
    )
}

export default Layout
