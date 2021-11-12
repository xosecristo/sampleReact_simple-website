import React from 'react'
import '../Styles/Card.css'
import cardimg from '../media/card-preview.jpg'

export const Card = (props) => {
    return (
        <div className='card' alt='card preview'>
            <img src={cardimg} />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button>{props.cta}</button>
        </div>
    )
}
