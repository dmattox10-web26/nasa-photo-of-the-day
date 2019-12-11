import React from 'react'

const RightSide = (props) => {
    return (
        <div className='right'>
            <h1>{ props.title }</h1>
            
            <div className='separator'></div>
            <p>{ props.text }</p>
        </div>
    )
}

export default RightSide
/*
<div className='author'>
    <h2>{ props.author }</h2>
</div>
*/