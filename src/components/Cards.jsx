import PropTypes from 'prop-types'
import React from 'react'
import Card from './Card'

const Cards = ( { items, hideLastItemOnMobile = false } ) => {
    return (
        <div className='cards'>
            <div className=''>
                {items.map( item => (
                    <div
                      className='card_container'
                      key={ item.id }
                    >
                        <Card { ...item } />
                    </div>
                ) )}
            </div>
        </div>
    )
}

Cards.propTypes = {
    items: PropTypes.arrayOf( PropTypes.object ).isRequired,
}

export default Cards
