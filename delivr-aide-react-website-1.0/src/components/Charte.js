import React from 'react'
import '../styles/style.css';
import logo from '../props/logo/logo-delivraide-app-landing.png'
import { useEffect } from "react";

function Charte() {
    function ScrollToTopOnMount() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
        return null;
    }
    return (
        <>
            <ScrollToTopOnMount />
            <div className="sub-section-bg">
                <div className="sub-section-navbar">
                    <a href="/">
                        <img src={logo} alt="delivr'aide logo" className="sub-section-hero-logo" />
                    </a>
                </div>
                <div className="about-section-validation">
                    <h3>CHARTRE DE CONFIDENTIALITE DU SITE DELIVR’AIDE</h3>
                    <p className="p-confidentialité">Les données enregistrées par le biais du formulaire de la présente plateforme sont sauvegardées dans un fichier informatisé par l’association l’Équipage Solidaire (NRA n°W751258357) dont les délégués à la protection des données, MM. PIGENET Yovann et ALIN Ismael veillent à une utilisation conforme à la <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000801164">loi n°2004-575 du 21 juin 2004</a> pour la confiance dans l’économie numérique, la <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460/">loi n°78-17 du 6 janvier 1978</a>, relative à l’informatique, aux fichiers et libertés (modifiée par la <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000037085952">loi n°2018-493 du 20 juin 2018</a> relative à la protection et au traitement de données à caractères personnels) et au <a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees">règlement européen 2016/679</a> du Parlement européen. L’association traite les données collectées pour pouvoir mettre en relation les livreurs et les bénéficiaires et leur permettre de recevoir leurs paniers alimentaires et produits de première nécessite directement à domicile.</p>
                    <p className="p-confidentialité">Les renseignements rassemblés seront communiqués aux seuls destinataires suivants Mme. HANNA Jennifer et Mme. RAKI Rania. Ces données feront l’objet de traitement dans notre département logistique et seront transmises aux livreurs en charge de la commande. À noter que ces fichiers pourront être envoyés à nos filiales localisées à Montpellier et Lyon si les bénéficiaires se situent dans ces villes, afin que leur demande puisse être prise en charge. La condition de conservation de vos données se feront dans un délai déterminé par les critères suivants: validation du numéro de commande associée à votre inscription et à vos données personnelles.</p>
                    <p className="p-confidentialité">Vous garderez un droit de regard sur vos informations. Vous pourriez y accéder, les rectifier, demander leur modification et suppression et exercer votre droit à la limitation du traitement. Vous pourrez exercer ces droits à tout moment. Pour cela, vous pourriez contacter notre Service juridique :</p>
                    <div className="div-li">
                        <li>Par mail: equipagesolidaire@gmail.com ;</li>
                        <li>Par courrier postal à l’adresse 23 rue pierre semard, 75009, Paris.</li>
                    </div>
                    <p className="p-confidentialité">Aussi, vous pouvez retirer votre consentement au traitement de vos données à tout moment ou vous opposer au traitement de vos données. Vous pouvez également exercer un droit à la portabilité sur vos données personnelles.</p>
                    <p className="p-confidentialité">Si après avoir contacté notre service juridique, vous constatez que vos droits « Informatiques et Libertés » ne sont pas respectés, vous pourrez adresser une réclamation à la Commission nationale de l’Informatique et des Libertés <br /><br /> (CNIL), 3 Places de Fontenoy, 75007 Paris.</p>
                    <p className="p-confidentialité">Note : Les informations demandées sont obligatoires et doivent impérativement être fournies. Il s’agit de renseignements nécessaires à la livraison de votre panier alimentaire ou produits de première nécessité. </p>
                    <p className="p-confidentialité"></p>
                </div>
            </div>
        </>
    )
}

export default Charte
