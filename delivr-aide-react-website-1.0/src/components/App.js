import React from 'react'
import Slider from "react-slick";
import AOS from 'aos';
import { Link } from "react-router-dom";

//Image
import logo from '../props/logo/logo.png';
import heroCover from '../props/img/delivery-bag.jpeg'
import freshProduct from '../props/img/fresh-product.png'
import hygieneProduct from '../props/img/produit_hygiene.jpg'
import franceMap from '../props/img/map-france-pin.png'
import conditionIllustration from '../props/svg/condition-svg.svg'
import heart from '../props/svg/heart.svg'
import instagramLogo from '../props/svg/instagram_logo.svg'
import linkedinLogo from '../props/svg/linkedin-logo.svg'
import logoFooter from '../props/img/logo-footer.png'

//Logo media

import brutLogo from '../props/svg/Brut_logo.svg'
import figaroLogo from '../props/svg/Le_Figaro_logo.svg'
import interLogo from '../props/svg/France_Inter_logo.svg'


//Caroussel picture
import carousselOne from '../props/img/carousel/carousel-image_kit.JPG'
import carousselTwo from '../props/img/carousel/carousel-image_thanks.png'
import carousselFour from '../props/img/carousel/carousel-image_car.png'
import carousselFive from '../props/img/carousel/carousel-image_member_1.png'
import carousselSix from '../props/img/carousel/carousel-image_kit.JPG'
import carousselSeven from '../props/img/carousel/carousel-image_kit_example.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    AOS.init({
        duration: 2000
    });
    var deliveryMan = 145;
    var cityAvailaible = 6;
    var totalDelivery = 478;
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
                <Link to="/contact" className="btn-primary-red btn-nav">Nous contacter !</Link>
            </nav>
            <div className="introduction-wrapper">
                <div className="introduction-sub-wrapper">
                    <section className="introduction-column-wrapper">
                        <div className="left-column" data-aos="fade-up">
                            <p className="hero-title">Besoin d'aide ?<br />Delivr'aide</p>
                            <p className="hero-description">
                                Reçevez gratuitement votre panier repas et autres produits de première nécessité directement à votre domicile. Pour bénéficier d'un kit solidaire, renseignez simplement les informations en cliquant sur le bouton ci-dessous et nous vous contacterons sous 24h pour vous donner la date et l'heure de la livraison. <br />À très vite !
                    </p>
                        </div>
                        <div data-aos="fade-up" className="right-column">
                            <img src={heroCover} alt="delivr'aide logo" className="hero-banner" />
                        </div>
                    </section>
                    <Link to="/addkit" className="btn-primary-blue introduction-btn">Recevoir mon kit !</Link>
                </div>
            </div>
            <div className="info-banner banner-fresh-product">
                <div className="info-banner-column-wrapper">
                    <p className="banner-text" data-aos="fade-right">Nous vous proposons des produits frais.</p>
                    <img className="banner-img" alt="fresh product" src={freshProduct} data-aos="fade-left"></img>
                </div>
            </div>
            <div className="available-city">
                <img src={franceMap} alt="map of france with every handled city" className="france-map-img" data-aos="fade-right"></img>
                <p className="france-map-text" data-aos="fade-left">Là où il y’a besoin d’aide Delivr’aide est là.</p>
            </div>
            <div className="info-banner-reverse banner-fresh-product">
                <div className="info-banner-column-wrapper">
                    <p className="banner-text" data-aos="fade-right">Nous vous offrons aussi des produits de première nécessité.</p>
                    <img className="banner-img" alt="hygiene product" src={hygieneProduct} data-aos="fade-up"></img>
                </div>
            </div>
            <section className="delivraide-info">
                <p className="delivraide-info-title" data-aos="fade-left"><span className="logo-delivr">Delivr</span><span className="logo-apostrophe">'</span><span className="logo-aide">aide</span><span className="delivraide-info-title-stroke"> c'est quoi ?</span></p>
                <p className="delivraide-info-stat-delivery-man" data-aos="fade-right"><span className="delivraide-info-stat-stroke">{deliveryMan}</span> Livreurs bénévoles</p>
                <p className="delivraide-info-stat-availaible-city" data-aos="fade-left"><span className="delivraide-info-stat-stroke">{cityAvailaible}</span> Villes</p>
                <p className="delivraide-info-stat-total-delivery" data-aos="fade-right"><span className="delivraide-info-stat-stroke">{totalDelivery}</span> Livraisons</p>
                <p className="delivraide-info-title" data-aos="fade-left"><span className="logo-delivr">Delivr</span><span className="logo-apostrophe">'</span><span className="logo-aide">aide</span><span className="delivraide-info-title-stroke"> c'est surtout</span></p>
            </section>
            <div className="caroussel-container-wrapper" data-aos="fade-right">
                <div className="caroussel-container">
                    <Slider {...settings}>
                        <img className="slide-img four" src={carousselFour} alt="grouptest" />
                        <img className="slide-img two" src={carousselTwo} alt="grouptest" />
                        <img className="slide-img six" src={carousselSix} alt="grouptest" />
                        <img className="slide-img five" src={carousselFive} alt="grouptest" />
                        <img className="slide-img seven" src={carousselSeven} alt="grouptest" />
                        <img className="slide-img one" src={carousselOne} alt="grouptest" />
                    </Slider>
                </div>
            </div>
            <section className="media-section">
                <div className="media-wrapper">
                    <p className="media-caption">Ils parlent de nous</p>
                    <hr className="media-line"></hr>
                    <div className="media-logo-container">
                        <img className="france-inter" src={interLogo} alt="inter france" />
                        <img className="brut" src={brutLogo} alt="brut" />
                        <img className="figaro" src={figaroLogo} alt="le figaro" />
                    </div>
                </div>
            </section>
            <div className="info-banner banner-conditions">
                <div className="info-banner-column-wrapper">
                    <img className="checklist-illustration" alt="checklist" src={conditionIllustration} data-aos="fade-right"></img>
                    <div className="info-banner-avantage">
                        <p className="banner-text-avantage-hero" data-aos="fade-left">Les avantages</p>
                        <p className="banner-text-avantage" data-aos="fade-left">Des kits long terme ou court terme🍎</p>
                        <p className="banner-text-avantage" data-aos="fade-left">Livraison directement à domicile 🏠</p>
                        <p className="banner-text-avantage" data-aos="fade-left">Sans frais ✔️</p>
                    </div>
                </div>
            </div>
            <section className="delivraide-donation">
                <div className="donation-wrapper">
                    <div className="donation-column-wrapper">
                        <div className="donation-parapgraph">
                            <p className="donation-title" data-aos="fade-right">Envie de faire un don ?</p>
                            <p className="donation-description" data-aos="fade-right">Vos dons permettent l'achat de sacs, denrées alimentaires et produits hygiéniques par nos bénévoles pour compléter les kits distribués chaque semaine, mais aussi pour louer nos locaux, et payer l'hébergement ! Chaque geste compte !</p>
                        </div>
                        <div className="heartSvgContainer">
                            <img src={heart} alt="heart" className="donation-heart-illustration" data-aos="fade-left"></img>
                            <div className="heartContainerTextCopyright">Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        </div>
                    </div>
                    <a className="btn-primary-red" href="https://www.helloasso.com/associations/l-equipage-solidaire/formulaires/2/widget" target="_blank" rel="noreferrer" data-aos="fade-left">Faire un don</a>
                </div>
                <section className="conclusion">
                    <section className="recap">
                        <p className="recap-hero-title" data-aos="fade-right">Vous souhaitez participer au projet ? Vous êtes les bienvenus ! Comment souhaitez vous nous aider ?</p>
                        <Link to="/addkit" className="btn-primary-blue" data-aos="fade-right" data-aos-duration="2100">Recevoir mon kit !</Link>
                        <p className="recap-sub-title" data-aos="fade-right" data-aos-duration="2200">Envie de nous soutenir ?</p>
                        <p className="recap-sub-title" data-aos="fade-right" data-aos-duration="2300">1) Je souhaite rejoindre l'équipe de livreurs-bénévoles !</p>
                        <a href="https://forms.gle/86NQSw7ePixvuQv77" target="_blank" rel="noreferrer" className="btn-primary-red" data-aos="fade-right" data-aos-duration="2400">Devenir Livreur</a>
                        <p className="recap-sub-title" data-aos="fade-right" data-aos-duration="2500">2) Je souhaite faire un don pour permettre de constituer plus de kits !</p>
                        <a href="https://forms.gle/gU2J78wrS1QDENgS8" target="_blank" rel="noreferrer" className="btn-primary-blue" data-aos="fade-right" data-aos-duration="2600">Faire un don alimentaire</a>
                        <a href="https://www.helloasso.com/associations/l-equipage-solidaire/formulaires/2/widget" target="_blank" rel="noreferrer" className="btn-primary-blue" data-aos="fade-right" data-aos-duration="2600">Faire un don en argent</a>
                        <p className="recap-sub-title" data-aos="fade-right" data-aos-duration="2500">3) Je souhaite devenir membre de l'association et vous aider à transporter et préparer les kits !</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSehmlfM7T-9C67h0FLzua6VnDbiFCQAzQfRRnHobDQQAKSpIA/viewform" target="_blank" rel="noreferrer" className="btn-primary-red" data-aos="fade-right" data-aos-duration="2600">Nous rejoindre</a>
                    </section>
                    <footer>
                        <div className="footer-column-wrapper">
                            <div className="footer-left-column">
                                <div className="footer-contact-section">
                                    <p className="footer-contact-title">Contact</p>
                                    <p className="footer-contact-description">Des questions ? <br /> nous avons les réponses</p>
                                    <div className="contact-logo-container">
                                        <div className="contact-logo">
                                            <a href="https://www.instagram.com/equipagesolidaire/" target="_blank" rel="noreferrer"><img className="instagram-logo" src={instagramLogo} alt="instagram"></img></a>
                                            <a href="https://www.linkedin.com/company/equipagesolidaire" target="_blank" rel="noreferrer"><img className="instagram-logo" src={linkedinLogo} alt="linkedin"></img></a>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="btn-primary-blue">Plus d'info</Link>
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
