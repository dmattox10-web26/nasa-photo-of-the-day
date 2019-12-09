import React from 'react'

const Video = (props) => {
    return (
        <div className='thumbnail'>
            <iframe className='left' width='530' height='470' src={props.src} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen title='video'></iframe>
        </div>
    )
}

export default Video