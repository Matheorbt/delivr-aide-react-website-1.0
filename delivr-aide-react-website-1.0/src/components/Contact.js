import React from 'react'
import logo from '../props/logo/logo-delivraide-app-landing.png'

function Contact() {
    return (
        <>
            <div className="contact-bg">
                <div className="contact-navbar">
                    <a href="/">
                        <img src={logo} alt="delivr'aide logo" className="contact-hero-logo" />
                    </a>
                </div>
                <section className="contact-page-contact instagram">Notre insta:</section>
                <section className="contact-page-contact linkedin">Notre linkedin:</section>
                <section className="contact-page-contact mail">Notre mail:</section>
            </div>
        </>
    )
}

export default Contact