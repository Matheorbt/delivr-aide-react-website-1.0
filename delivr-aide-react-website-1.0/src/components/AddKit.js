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

    function sendEmail(e) {
        e.preventDefault();
        init("user_aG1Z8D5rPKDmniQSHKKH9");
        emailjs.sendForm('service_fdhkoz3', 'template_wnlrxrk', '#formKit')
            .then(function (response) {
                window.alert("Merci ta demande a bien été prise en compte ! 👍")
            }, function (error) {
                window.alert("Un problème est survenu, merci de réessayer ultérieurement, si le problème persiste merci de nous contacte à : equipagesolidaire@gmail.com")
                console.log('FAILED...', error);
            });
        e.target.reset()
    }
    return (
        <>
            <ScrollToTopOnMount />
            <div className="main-wrapper-flex">
                <div className="main-wrapper-add-kit">
                    <div className="form-main-wrapper">
                        <p className="add-kit-hero-title">Recevoir mon kit</p>
                        <form id="formKit" className="form-wrapper" onSubmit={sendEmail}>
                            <div className="form-firstname-lastname">
                                <div className="form-last-name">
                                    <label>Nom :</label>
                                    <input type="name" name="lastName" id="firstName" className="addKitInputForm" required></input>
                                </div>
                                <div className="form-first-name">
                                    <label>Prénom :</label>
                                    <input type="name" name="firstName" id="lastName" className="addKitInputForm" required></input>
                                </div>
                            </div>
                            <div className="form-city-info">
                                <div className="form-city-name">
                                    <label>Ville :</label>
                                    <select type="text" name="city" id="city" className="addKitInputForm" required>
                                        <option value="">Choisis ta ville</option>
                                        <option value="Paris">Paris</option>
                                        <option value="Montreuil">Montreuil</option>
                                        <option value="Viroflay">Viroflay</option>
                                        <option value="Vélizy-Villacoublay">Vélizy-Villacoublay</option>
                                        <opion value="Lyon">Lyon</opion>
                                        <option value="Montpellier">Montpellier</option>
                                    </select>
                                </div>
                                <div className="form-zip-code">
                                    <label>Code postal :</label>
                                    <input type="number" name="zipCode" id="zipCode" className="addKitInputForm" required></input>
                                </div>
                            </div>
                            <div className="form-city-name">
                                <label>Adresse :</label>
                                <input type="text" name="adress" id="adress" className="addKitInputForm" required></input>
                            </div>
                            <div className="form-account-connexion">
                                <div className="form-number">
                                    <label>Tél. :</label>
                                    <input type="tel" name="phoneNumber" id="phoneNumber" className="addKitInputForm" required></input>
                                </div>
                                <div className="form-email">
                                    <label>E-mail :</label>
                                    <input type="email" name="mail" id="mail" className="addKitInputForm" required></input>
                                </div>
                            </div>
                            <div className="politique-div"><input type="checkbox" id="confidentialité" name="confidentialité" required /><label htmlFor="confidentialité">J'accepte que ces informations soient <a href="/charte">enregistrées et traitées</a> par l'asssociation l'Equipage Solidaire conformément à sa <a href="/politique">politique de confidentialité</a>.</label></div>
                            <button type="submit" className="form-submit">Valider</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddKit;