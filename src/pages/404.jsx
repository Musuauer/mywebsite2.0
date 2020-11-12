import React from 'react'
import Layout from '../layouts/Layout'
import SiteMetadata from '../components/SiteMetadata'

const ErrorPage = () => (
    <Layout>
        <SiteMetadata title='Error 404' description="The page doesn't exists" />

        <div className=''>
            <div className=''>
                <div className=''>
                    <h1 className=''>
            Error 404
                    </h1>

                    <h2 className=''>
            The page doesn't exists.
                    </h2>
                </div>
            </div>
        </div>
    </Layout>
)

export default ErrorPage
