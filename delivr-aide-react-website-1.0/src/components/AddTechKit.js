import React from "react";
import "../styles/style.css";
import { useEffect } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
require("dotenv").config();

function AddTechKit() {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  }
  function sendEmail(e) {
    e.preventDefault();
    init("user_" + process.env.REACT_APP_USER_KEY_TECH);
    emailjs
      .sendForm(
        "service_" + process.env.REACT_APP_SERVICE_KEY_TECH,
        "template_" + process.env.REACT_APP_TEMPLATE_KEY_TECH,
        "#formKitTech"
      )
      .then(
        function (response) {
          window.alert("Merci ta demande a bien été prise en compte ! 👍");
        },
        function (error) {
          window.alert(
            "Un problème est survenu, merci de réessayer ultérieurement, si le problème persiste merci de nous contacter à : equipagesolidaire@gmail.com"
          );
          console.log("mailjs error : " + error);
        }
      );
    e.target.reset();
  }
  console.log(process.env.USER_KEY);
  return (
    <>
      <ScrollToTopOnMount />
      <div className="main-wrapper-flex">
        <div className="main-wrapper-add-kit">
          <div className="form-main-wrapper">
            <p className="add-kit-introduction">
              Face à l'ampleur de la fracture numérique révélée par le
              confinement au sein de la population étudiante, L'Equipage
              Solidaire a décidé d'agir avec l'aide de la Fondation Carrefour.
            </p>
            <div className="video-container">
              <iframe
                width="80%"
                height="80%"
                src="https://www.youtube.com/embed/5mEmOwGM_mY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p className="add-kit-hero-title-centered">
              Pour recevoir votre kit de matériel informatique, veuillez remplir
              les informations ci-dessous:
            </p>
            <form
              id="formKitTech"
              className="form-wrapper"
              onSubmit={sendEmail}
            >
              <div className="form-firstname-lastname">
                <div className="form-last-name">
                  <label>Nom :</label>
                  <input
                    type="name"
                    name="lastName"
                    id="firstName"
                    className="addKitInputForm"
                    required
                  ></input>
                </div>
                <div className="form-first-name">
                  <label>Prénom :</label>
                  <input
                    type="name"
                    name="firstName"
                    id="lastName"
                    className="addKitInputForm"
                    required
                  ></input>
                </div>
              </div>
              <div className="form-city-info">
                <div className="form-city-name">
                  <label>Ville :</label>
                  <input
                    className="addKitInputForm"
                    required
                    type="text"
                    name="city"
                    id="city"
                  ></input>
                </div>
                <div className="form-zip-code">
                  <label>Code postal :</label>
                  <input
                    type="number"
                    name="zipCode"
                    id="zipCode"
                    className="addKitInputForm"
                    required
                  ></input>
                </div>
              </div>
              <div className="form-city-name">
                <label>Adresse :</label>
                <input
                  type="text"
                  name="adress"
                  id="adress"
                  className="addKitInputForm"
                  required
                ></input>
              </div>
              <div className="form-account-connexion">
                <div className="form-number">
                  <label>Tél. :</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="addKitInputForm"
                    required
                  ></input>
                </div>
                <div className="form-email">
                  <label>E-mail :</label>
                  <input
                    type="email"
                    name="mail"
                    id="mail"
                    className="addKitInputForm"
                    required
                  ></input>
                </div>
              </div>
              <div className="politique-div">
                <input
                  type="checkbox"
                  id="confidentialité"
                  name="confidentialité"
                  required
                />
                <label htmlFor="confidentialité">
                  En cochant cette case, vous attestez sur l'honneur être
                  bénéficiaire d'une bourse de l'enseignement supérieure*
                </label>
              </div>
              <div className="politique-div">
                <input
                  type="checkbox"
                  id="confidentialité"
                  name="confidentialité"
                  required
                />
                <label htmlFor="confidentialité">
                  J'accepte que ces informations soient{" "}
                  <a href="/charte">enregistrées et traitées</a> par
                  l'asssociation l'Equipage Solidaire conformément à sa{" "}
                  <a href="/politique">politique de confidentialité</a>.
                </label>
              </div>
              <label htmlFor="confidentialité">
                <i>
                  *Un justificatif pourra vous être demandé lors de la
                  livraison.
                </i>
              </label>
              <button type="submit" className="form-submit">
                Valider
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTechKit;
