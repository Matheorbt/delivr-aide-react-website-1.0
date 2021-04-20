import React from 'react'
import logo from '../props/logo/logo-delivraide-app-landing.png'
import '../styles/style.css';
import { useEffect } from "react";
import instagramLogo from '../props/svg/instagram_logo.svg'
import linkedinLogo from '../props/svg/linkedin-logo.svg'

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
                <p className="contact-page-title">Contact</p>
                <div className="contact-link-wrapper">
                    <p className="contact-page-contact">Notre insta:</p>
                    <a href="https://www.instagram.com/equipagesolidaire/" target="_blank" rel="noreferrer"><img className="contact-logo insta" src={instagramLogo} alt="instagram"></img></a>
                    <p className="contact-page-contact">Notre linkedin:</p>
                    <a href="https://www.linkedin.com/company/equipagesolidaire" target="_blank" rel="noreferrer"><img className="contact-logo linkedin" src={linkedinLogo} alt="linkedin"></img></a>
                    <p className="contact-page-contact mail">Notre mail: <br /><span>delivraide.beneficiaire@gmail.com</span></p>
                </div>
            </div>
        </>
    )
}

export default Contact
