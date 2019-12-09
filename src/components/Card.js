import React from 'react'
import { Link } from 'react-router-dom'
import { faStepBackward, faStepForward, faArrowDown } from "@fortawesome/free-solid-svg-icons";
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
            <ul>
                <li onClick={ props.decrementDay }><FontAwesomeIcon icon={ faStepBackward } /></li>
                <li onClick={ props.incrementDay }><FontAwesomeIcon icon={ faStepForward } /></li>
            </ul>
            <div className='fab'><Link to='/2'><FontAwesomeIcon icon={ faArrowDown } /></Link></div>
        </div>
    )
}

export default Card