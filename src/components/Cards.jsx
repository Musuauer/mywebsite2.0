import PropTypes from 'prop-types'
import React from 'react'
import { css, cx } from 'emotion'

import Card from './Card'

const Cards = ( { items, hideLastItemOnMobile = false } ) => {
    const stylez = css`
        .card_container {
            margin-bottom: 8rem;
        }

    `

    return (
        <div className={ cx( stylez, 'cards' ) }>
            {items.map( item => (
                <div
                  className='card_container'
                  key={ item.id }
                >
                    <Card { ...item } />
                </div>
            ) )}
        </div>
    )
}

Cards.propTypes = {
    items: PropTypes.arrayOf( PropTypes.object ).isRequired,
}

export default Cards
