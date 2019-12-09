import React from 'react'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Thumbnail from './Thumbnail'
import Video from './Video'
import RightSide from './RightSide'

const Card = (props) => {
    return (
        <div className='card'>
            { props.media === 'image' 
                ? <Thumbnail imgsrc={ props.url } />
                : <Video src={ props.url } /> 
            }
            <RightSide title={ props.title } author={ props.copyright } text={ props.explanation } />
            <h5>{ props.day }</h5>
            <h6>{ props.month }</h6>
        </div>
    )
}

export default Card