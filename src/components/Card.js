import React from 'react'

import Thumbnail from './Thumbnail'
import RightSide from './RightSide'
const Card = () => {
    return (
        <div className='card'>
            <Thumbnail />
            <RightSide />
            <h5></h5>
            <h6></h6>
        </div>
    )
}

export default Card