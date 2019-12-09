import React from 'react'
import { tsPropertySignature } from '@babel/types'

const Thumbnail = (props) => {
    return (
        <div className='thumbnail'>
            <img className='left' src={ props.imgsrc } alt='NASA Astronomy Photo of the Day'/>
        </div>
    )
}

export default Thumbnail