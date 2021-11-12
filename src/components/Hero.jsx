import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Hero.css'

export const Hero = (props) => {
    return (
        <div className='hero'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Link to={props.path}>
                <button>{props.cta}</button>
            </Link>
        </div>
    )
}
