import React from 'react'
import { Hero } from '../components/Hero'
import placeholderimg from '../media/card-preview.jpg'

export const About = () => {
    return (
        <section id="about">
            <Hero
                title="About Us"
                text="Lorem ipsum dolor amet consectetur adipisicing elit. Reprehenderit tenetur eligendi modi? sit amet consectetur adipisicing elit. Reprehenderit tenetur eligendi modi?"
                path="/"
                cta="Call to action" />
            <img src={placeholderimg} alt="about us placeholder image" />

        </section>
    )
}
