import React from 'react'
import { Card } from '../components/Card'

export const Cards = () => {
    return (
        <section id="cards">
            <h1>Cards</h1>
            <div className="cards-container">
                <Card
                    title="h2 title"
                    desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                    cta="call to action" />
                <Card
                    title="h2 title"
                    desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                    cta="call to action" />
                <Card
                    title="h2 title"
                    desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                    cta="call to action" />
            </div>
        </section>
    )
}
