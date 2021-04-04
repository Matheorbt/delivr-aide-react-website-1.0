import React from 'react'
import Slider from "react-slick";

//Image
import logo from '../props/logo/logo.png';
import heroCover from '../props/img/delivery-bag.jpeg'
import freshProduct from '../props/img/fresh-product.png'
import hygieneProduct from '../props/img/produit_hygiene.jpg'
import franceMap from '../props/img/map-france-pin.png'
import conditionIllustration from '../props/svg/condition-svg.svg'
import heart from '../props/svg/heart.svg'
import instagramLogo from '../props/svg/instagram_logo.svg'
import mailLetter from '../props/svg/mail-letter.svg'
import logoFooter from '../props/img/logo-footer.png'

//Caroussel picture
import carousselOne from '../props/img/caroussel-1.png'
import carousselTwo from '../props/img/caroussel-2.png'
import carousselThree from '../props/img/caroussel-3.png'
import carousselFour from '../props/img/caroussel-4.png'
import carousselFive from '../props/img/caroussel-5.png'
import carousselSix from '../props/img/caroussel-6.png'
import carousselSeven from '../props/img/caroussel-7.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    var deliveryMan = 14;
    var cityAvailaible = 6;
    var totalDelivery = 200;
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
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
                                Reçevez gratuitement votre panier repas et autres produits de première nécessité directement à votre domicile. Pour bénéficier d'un kit solidaire, renseignez simplement les informations en cliquant sur le bouton ci-dessous et nous vous contacterons sous 24h pour vous donner la date et l'heure de la livraison. <br />À très vite !
                    </p>
                        </div>
                        <div className="right-column">
                            <img src={heroCover} alt="delivr'aide logo" className="hero-banner" />
                        </div>
                    </section>
                    <button className="btn-primary-blue introduction-btn">Recevoir mon kit !</button>
                </div>
            </div>
            <div className="info-banner banner-fresh-product">
                <div className="info-banner-column-wrapper">
                    <p className="banner-text">Nous vous proposons des produits frais.</p>
                    <img className="banner-img" alt="fresh product" src={freshProduct}></img>
                </div>
            </div>
            <div className="available-city">
                <img src={franceMap} alt="map of france with every handled city" className="france-map-img"></img>
                <p className="france-map-text">Là où il y’a besoin d’aide Delivr’aide est là.</p>
            </div>
            <div className="info-banner-reverse banner-fresh-product">
                <div className="info-banner-column-wrapper">
                    <p className="banner-text">Nous vous offrons aussi des produits de première nécessité.</p>
                    <img className="banner-img" alt="hygiene product" src={hygieneProduct}></img>
                </div>
            </div>
            <section className="delivraide-info">
                <p className="delivraide-info-title"><span className="logo-delivr">Delivr</span><span className="logo-apostrophe">'</span><span className="logo-aide">aide</span><span className="delivraide-info-title-stroke"> c'est quoi ?</span></p>
                <p className="delivraide-info-stat-delivery-man"><span className="delivraide-info-stat-stroke">{deliveryMan}</span> Livreurs bénévoles</p>
                <p className="delivraide-info-stat-availaible-city"><span className="delivraide-info-stat-stroke">{cityAvailaible}</span> Villes</p>
                <p className="delivraide-info-stat-total-delivery"><span className="delivraide-info-stat-stroke">{totalDelivery}</span> Livraisons</p>
                <p className="delivraide-info-title"><span className="logo-delivr">Delivr</span><span className="logo-apostrophe">'</span><span className="logo-aide">aide</span><span className="delivraide-info-title-stroke"> c'est surtout</span></p>
            </section>
            <div className="caroussel-container">
                <Slider {...settings}>
                    <img className="slide-img four" src={carousselFour} alt="grouptest" />
                    <img className="slide-img two" src={carousselTwo} alt="grouptest" />
                    <img className="slide-img six" src={carousselSix} alt="grouptest" />
                    <img className="slide-img three" src={carousselThree} alt="grouptest" />
                    <img className="slide-img five" src={carousselFive} alt="grouptest" />
                    <img className="slide-img seven" src={carousselSeven} alt="grouptest" />
                    <img className="slide-img one" src={carousselOne} alt="grouptest" />
                </Slider>
            </div>
            <div className="info-banner banner-conditions">
                <div className="info-banner-column-wrapper">
                    <img className="checklist-illustration" alt="checklist" src={conditionIllustration}></img>
                    <div className="info-banner-avantage">
                        <p className="banner-text-avantage-hero">Les avantages</p>
                        <p className="banner-text-avantage">Pas besoin de se déplacer 😏</p>
                        <p className="banner-text-avantage">Pas de frais 😇</p>
                        <p className="banner-text-avantage">Nous demandons juste une carte étudiante 😉</p>
                    </div>
                </div>
            </div>
            <section className="delivraide-donation">
                <div className="donation-wrapper">
                    <div className="donation-column-wrapper">
                        <div className="donation-parapgraph">
                            <p className="donation-title">Envie de faire un don ?</p>
                            <p className="donation-description">Vos dons nous permettent de louer des locaux dans les différentes villes <br /> où nous sommes implantés afin de vous proposez de plus en plus d’aide.</p>
                        </div>
                        <img src={heart} alt="heart" className="donation-heart-illustration"></img>
                    </div>
                    <a className="btn-primary-red" href="https://www.helloasso.com/associations/l-equipage-solidaire/formulaires/2" target="_blank">Faire un don</a>
                </div>
                <section className="conclusion">
                    <section className="recap">
                        <p className="recap-hero-title">Convaincu ?</p>
                        <button className="btn-primary-blue">Recevoir mon kit !</button>
                        <p className="recap-sub-title">Envie de nous soutenir ?</p>
                        <p className="recap-sub-title">Tu es étudiant avec un moyen de locomotion ?</p>
                        <button className="btn-primary-red">Devenir Livreur</button>
                        <p className="recap-sub-title">Tu tiens un commerce et tu vends des denrées alimentaire <br /> ou des produits de prémière nécessité ?</p>
                        <button className="btn-primary-blue">Devenir Donateur</button>
                    </section>
                    <footer>
                        <div className="footer-column-wrapper">
                            <div className="footer-left-column">
                                <div className="footer-contact-section">
                                    <p className="footer-contact-title">Contact</p>
                                    <p className="footer-contact-description">Des question ? <br /> nous avons les réponses</p>
                                    <div className="contact-logo">
                                        <img className="instagram-logo" src={instagramLogo} alt="instagram"></img>
                                        <img className="mail-logo" src={mailLetter} alt="mail letter"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-right-column">
                                <img src={logoFooter} alt="delivraide logo"></img>
                            </div>
                        </div>
                        <hr></hr>
                        <p className="footer-copyright">Copyright ©{(new Date().getFullYear())} Delivr'aide. All Rights Reserved</p>
                    </footer>
                </section>
            </section>
        </>
    )
}

export default App
