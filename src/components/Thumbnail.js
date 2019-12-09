import React from 'react'

const Thumbnail = (props) => {
    return (
        <div className='thumbnail'>
            <img className='left' src={ props.imgsrc } alt='NASA A.P.O.D.'/>
        </div>
    )
}

export default Thumbnail