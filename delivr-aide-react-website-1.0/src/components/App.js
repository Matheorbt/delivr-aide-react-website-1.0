import React from 'react'
import logo from '../props/logo/logo.png';
import heroCover from '../props/img/Delivry-bag.jpeg'

function App() {
    return (
        <>
            <nav className="navbar-wrapper">
                <img src={logo} alt="delivr'aide logo" className="navbar-brand" />
                <button className="btn-primary-red btn-nav">Nous contacter !</button>
            </nav>
            <div className="introduction-wrapper">
                <div className="introduction-sub-wrapper">
                    <section className="introduction-column-wrapper">
                        <div className="left-column">
                            <p className="hero-title">Besoin d'aide ?<br />Delivr'aide</p>
                            <p className="hero-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum distinctio officiis aliquam placeat? Explicabo temporibus aliquid aliquam delectus facilis quod ab perferendis fugit modi, consectetur itaque, repudiandae eligendi quam amet?
                    </p>
                        </div>
                        <div className="right-column">
                            <img src={heroCover} alt="delivr'aide logo" className="hero-banner" />
                        </div>
                    </section>
                </div>
                <button className="btn-primary-blue introduction-btn">Recevoir mon kit !</button>
            </div>
        </>
    )
}

export default App
