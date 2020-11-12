import React from 'react'
import 'typeface-inter'
import '../styles/style.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ( { children } ) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
