import React from 'react'
import { Hero } from '../components/Hero'

export const Home = () => {
    return (
        <section id="home">
            <Hero
                title='H1 Title'
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptas consectetur unde illum incidunt doloribus."
                path="/cards"
                cta="Call to action" />
        </section>
    )
}
