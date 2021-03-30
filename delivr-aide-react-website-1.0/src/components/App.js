import React from 'react'
import Slider from "react-slick";
import logo from '../props/logo/logo.png';
import heroCover from '../props/img/delivery-bag.jpeg'
import freshProduct from '../props/img/fresh-product.png'
import hygieneProduct from '../props/img/produit_hygiene.jpg'
import franceMap from '../props/img/map-france-pin.png'
import groupTestOne from '../props/img/group-test.jpg'
import groupTestTwo from '../props/img/group-test-2.jpg'
import groupTestThree from '../props/img/group-test-3.jpg'
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
        slidesToScroll: 1
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
                    <img className="slide-img one" src={groupTestOne} alt="grouptest" />
                    <img className="slide-img two" src={groupTestTwo} alt="grouptest" />
                    <img className="slide-img three" src={groupTestThree} alt="grouptest" />
                </Slider>
            </div>
        </>
    )
}

export default App
