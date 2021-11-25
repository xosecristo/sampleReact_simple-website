import React from 'react'
import '../Styles/Card.css'
import placeholderimg from '../media/card-preview.jpg'

export const Card = (props) => {
    return (
        <div className='card'>
            <img src={placeholderimg} alt='card preview' />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button>{props.cta}</button>
        </div>
    )
}
