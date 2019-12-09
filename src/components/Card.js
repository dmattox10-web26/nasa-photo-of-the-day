import React, { useState, useEffect } from 'react'


import Thumbnail from './Thumbnail'
import RightSide from './RightSide'
import { tsPropertySignature } from '@babel/types'

const Card = (props) => {
    return (
        <div className='card'>
            <Thumbnail imgsrc={ props.url } />
            <RightSide title={ props.title } author={ props.copyright } text={ props.explanation } />
            <h5>{ props.day }</h5>
            <h6>{ props.month }</h6>
        </div>
    )
}

export default Card