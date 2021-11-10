import React from 'react'
import '../Styles/Home.css'

import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <section>
            <div className='hero'>
                <h1>title</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Unde quidem totam, dolores ratione odit velit.</p>
                <Link to='/Cards'>
                    <button>
                        call to action
                    </button>
                </Link>
            </div>
        </section>
    )
}
