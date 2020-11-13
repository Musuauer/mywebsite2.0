import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'
import { useSiteInfoQuery } from '../queries/useSiteInfoQuery'

const Footer = () => {
    const { siteTitle } = useSiteInfoQuery()
    const {
        site: {
            meta: { links },
        },
    } = useStaticQuery( graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            facebook
            instagram
            pinterest
            twitter
          }
        }
      }
    }
  ` )

    return (
        <div className='container py-12 md:flex md:items-center md:justify-between'>
            <ul className='flex justify-center md:order-2'>
                <FooterLink href={ links.twitter } icon={ FaTwitter } label='Twitter' />
                <FooterLink href={ links.facebook } icon={ FaFacebook } label='Facebook' />
                <FooterLink
                  href={ links.instagram }
                  icon={ FaInstagram }
                  label='Instagram'
                />
                <FooterLink
                  href={ links.pinterest }
                  icon={ FaPinterest }
                  label='Pinterest'
                />
            </ul>
            <div className='mt-8 md:mt-0 md:order-1'>
                <p className='text-center text-sm md:text-base text-gray-700'>
          &copy; 2020 { siteTitle }. All rights reserved.
                </p>
            </div>
        </div>
    )
}

const FooterLink = ( { href, label, icon: Icon } ) => {
    return (
        <li className=''>
            <a
              href={ href }
              target='_blank'
              rel='noreferrer noopener'
              className=''
            >
                <span className=''>{label}</span>
                <Icon className='' />
            </a>
        </li>
    )
}

export default Footer
