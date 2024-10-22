import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalMentions = () => {
return (
    <div>
    <Header />
    <main className="container mx-auto px-4 py-8 mt-14">
        <h1 className="text-4xl font-bold mb-6">Mentions Légales</h1>
        
        <section className="space-y-6 text-lg leading-relaxed max-w-3xl">

        <div>
            <h2 className="text-2xl font-bold mb-2">1. Éditeur du site</h2>
            <p>
            Le site <strong>TravelMate</strong> est édité par la société Travel Mate.
            Numéro de téléphone : 0763586501 <br />
            Adresse e-mail : travelmate@gmail.com .
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-2">2. Hébergement</h2>
            <p>
            Le site <strong>TravelMate</strong> est hébergé par la société OVH. <br />
            Adresse : 2 rue Kellermann, 59100 Roubaix, France. <br />
            Numéro de téléphone : +33 9 72 10 10 07. <br />
            Site web : <a href="https://www.ovh.com" className="text-blue-500 hover:underline">https://www.ovh.com</a>.
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-2">3. Propriété intellectuelle</h2>
            <p>
            Tous les contenus présents sur le site <strong>TravelMate</strong> (textes, images, graphismes, logos, vidéos, icônes, etc.) sont protégés par les lois en vigueur sur la propriété intellectuelle.
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit préalable de <strong>TravelMate</strong>.
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-2">4. Protection des données personnelles</h2>
            <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 et au règlement européen RGPD (Règlement Général sur la Protection des Données), vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données vous concernant.
            Vous pouvez exercer ces droits en nous contactant à l'adresse suivante : travelmate@gmail.com. <br />
            Pour plus d'informations sur la gestion de vos données personnelles, consultez notre <a href="/politique-de-confidentialite" className="text-blue-500 hover:underline">Politique de confidentialité</a>.
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-2">5. Utilisation des cookies</h2>
            <p>
            Le site <strong>TravelMate</strong> utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Vous pouvez à tout moment gérer vos préférences en matière de cookies depuis les paramètres de votre navigateur ou en visitant notre <a href="/politique-cookies" className="text-blue-500 hover:underline">Politique relative aux cookies</a>.
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-2">6. Limitation de responsabilité</h2>
            <p>
            Le site <strong>TravelMate</strong> met tout en œuvre pour fournir des informations exactes et à jour. Toutefois, des erreurs ou omissions peuvent survenir. <strong>TravelMate</strong> ne pourra être tenu responsable en cas d'inexactitude des informations présentes sur ce site ou de dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site.
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-2">7. Modifications des mentions légales</h2>
            <p>
            <strong>TravelMate</strong> se réserve le droit de modifier ou de mettre à jour ces mentions légales à tout moment. Il est recommandé de les consulter régulièrement.
            </p>
        </div>
        </section>
    </main>
    <Footer />
    </div>
);
};

export default LegalMentions;
