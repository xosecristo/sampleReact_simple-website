import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Footer.css'

export const Footer = () => {
    return (
        <footer>
            <Link to='/'>Company Name © 2022</Link>
            <span>email@company.com</span>
        </footer>
    )
}
