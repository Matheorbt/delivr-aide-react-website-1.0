import React from 'react'
import logo from '../props/logo/logo-delivraide-app-landing.png'
import { useEffect } from "react";

function Contact() {
    function ScrollToTopOnMount() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
        return null;
    }
    return (
        <>
            <ScrollToTopOnMount />
            <div className="contact-bg">
                <div className="sub-section-navbar">
                    <a href="/">
                        <img src={logo} alt="delivr'aide logo" className="sub-section-hero-logo" />
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
