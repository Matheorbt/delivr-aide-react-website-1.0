import React from 'react'
import '../styles/style.css';
import { useEffect } from "react";
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';

function AddKit() {
    function ScrollToTopOnMount() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
        return null;
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    const submitForm = () => {
        init("user_Nh0h5ghTV3VVccDb4TSqH");
        var templateParams = {
            day: dd,
            month: mm,
            year: yyyy,
            city: document.getElementById("city").value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            zipCode: document.getElementById("zipCode").value,
            phoneNumber: document.getElementById("phoneNumber").value,
            mail: document.getElementById("mail").value,
            adress: document.getElementById("adress").value,
        };
        emailjs.send("service_xrwqzwt", "template_51nprxi", templateParams, "user_Nh0h5ghTV3VVccDb4TSqH")
            .then(function (response) {
                console.log('Contact form send.', response.status, response.text);
            }, function (error) {
                window.alert("Erreur lors de l'envoi du formulaire veuillez reéssayer plus tard")
                console.log('Contact form sending encouter issue.', error);
            });
    }
    return (
        <>
            <ScrollToTopOnMount />
            <div className="main-wrapper-flex">
                <div className="main-wrapper-add-kit">
                    <div className="form-main-wrapper">
                        <p className="add-kit-hero-title">Recevoir mon kit</p>
                        <form className="form-wrapper">
                            <div className="form-firstname-lastname">
                                <div className="form-last-name">
                                    <label>Nom :</label>
                                    <input type="name" name="nom" id="firstName" required></input>
                                </div>
                                <div className="form-first-name">
                                    <label>Prénom :</label>
                                    <input type="name" name="prenom" id="lastName" required></input>
                                </div>
                            </div>
                            <div className="form-city-info">
                                <div className="form-city-name">
                                    <label>Ville :</label>
                                    <input type="text" name="ville" id="city" required></input>
                                </div>
                                <div className="form-zip-code">
                                    <label>Code postal :</label>
                                    <input type="number" name="code_postal" id="zipCode" required></input>
                                </div>
                            </div>
                            <div className="form-city-name">
                                <label>Adresse :</label>
                                <input type="text" name="adresse" id="adress" required></input>
                            </div>
                            <div className="form-account-connexion">
                                <div className="form-number">
                                    <label>Tél. :</label>
                                    <input type="tel" name="tel" id="phoneNumber" required></input>
                                </div>
                                <div className="form-email">
                                    <label>E-mail :</label>
                                    <input type="email" name="email" id="mail" required></input>
                                </div>
                            </div>
                            <div className="politique-div"><input type="checkbox" id="confidentialité" name="confidentialité" required /><label htmlFor="confidentialité">J'accepte que ces informations soient <a href="/charte">enregistrées et traitées</a> par l'asssociation l'Equipage Solidaire conformément à sa <a href="/politique">politique de confidentialité</a>.</label></div>
                            <button type="submit" className="form-submit" onClick={() => submitForm()}>Valider</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddKit
