import React from 'react'
import '../styles/style.css';
import logo from '../props/logo/logo-delivraide-app-landing.png'

function PageNotFound() {
    return (
        <>
            <div className="not-found-bg">
                <div className="not-found-navbar">
                    <a href="/">
                        <img src={logo} alt="delivr'aide logo" className="not-found-hero-logo" />
                    </a>
                </div>
                <div className="not-found-text-wrapper">
                    <p className="not-found-text">Aller, on retourne sur la page d'accueil👋<br /><span>(ps: clic sur le logo 😉)</span></p>
                </div>
            </div>

        </>
    )
}

export default PageNotFound
