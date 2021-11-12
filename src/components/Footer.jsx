import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Footer.css'

export const Footer = () => {
    return (
        <footer>
            <Link to='/'>Company Name © 2022</Link>
            <a className="email" href="mailto:email@company.com" rel="noreferrer">email@company.com</a>
        </footer>
    )
}
