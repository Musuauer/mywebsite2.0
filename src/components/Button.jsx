import PropTypes from 'prop-types'
import React from 'react'

const Button = ( { children, href } ) => {
    if ( href ) {
        return (
            <a
              href={ href }
              target='_blank'
              rel='noopener noreferrer'
              className=''
            >
                {children}
            </a>
        )
    } else {
        return (
            <button className=''>
                {children}
            </button>
        )
    }
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
}

Button.defaultProps = {
    href: null,
}

export default Button
