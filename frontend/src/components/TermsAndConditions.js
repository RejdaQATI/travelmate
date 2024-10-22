import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

const TermsAndConditions = () => {
  return (
    <div>
      <Header />


      <div className="container mx-auto px-4 py-12 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Conditions Générales de Vente</h1>

        <p className="text-lg mb-4">
          Les présentes conditions générales de vente (CGV) régissent toutes les réservations effectuées sur notre site internet. En réservant un voyage, vous acceptez sans réserve les présentes conditions.
        </p>

        <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
        <p className="text-lg mb-4">
          Les présentes conditions générales de vente (CGV) régissent toutes les réservations effectuées sur notre site internet. En réservant un voyage, vous acceptez sans réserve les présentes conditions.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Réservation et Confirmation</h2>
        <p className="text-lg mb-4">
          La réservation devient définitive après la validation du paiement intégral ou partiel, conformément aux modalités précisées sur la page de réservation. Une fois la réservation confirmée, un e-mail de confirmation vous sera envoyé avec les détails de votre réservation.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Tarifs</h2>
        <p className="text-lg mb-4">
          Les prix des voyages sont indiqués en euros (€) et incluent toutes les taxes applicables, sauf mention contraire. Les tarifs peuvent varier en fonction de la période de réservation et des promotions en vigueur. Le prix total de la réservation sera précisé avant la validation du paiement.
        </p>

        <h2 className="text-2xl font-bold mb-4">4. Modalités de Paiement</h2>
        <p className="text-lg mb-4">
          Le paiement peut être effectué via les moyens de paiement acceptés sur notre plateforme, notamment par carte bancaire via Stripe. Le paiement est sécurisé, et aucune information bancaire n'est conservée sur notre site.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Annulation et Remboursement</h2>
        <p className="text-lg mb-4">
          Les conditions d'annulation sont les suivantes :
        </p>
        <ul className="list-disc ml-5 mb-4">
          <li>Annulation plus de 30 jours avant la date de départ : remboursement total moins les frais administratifs.</li>
          <li>Annulation entre 30 et 15 jours avant la date de départ : remboursement de 50% du montant total.</li>
          <li>Annulation moins de 15 jours avant la date de départ : aucun remboursement.</li>
        </ul>
        <p className="text-lg mb-4">
          Toute demande d'annulation doit être effectuée par écrit via notre adresse e-mail de support. Aucun remboursement ne sera effectué en cas de non-présentation à la date de départ.
        </p>

        <h2 className="text-2xl font-bold mb-4">6. Modifications de la Réservation</h2>
        <p className="text-lg mb-4">
          Toute modification de la réservation (nombre de participants, dates, etc.) doit être demandée par écrit et est soumise à disponibilité. Des frais de modification peuvent s'appliquer. Les modifications ne sont pas garanties, et si elles ne peuvent être effectuées, les conditions d'annulation s'appliquent.
        </p>

        <h2 className="text-2xl font-bold mb-4">7. Responsabilité</h2>
        <p className="text-lg mb-4">
          Nous nous efforçons de fournir les services annoncés dans nos offres. Toutefois, nous ne pouvons être tenus responsables des retards, annulations ou interruptions dus à des circonstances indépendantes de notre volonté, telles que des catastrophes naturelles, des conflits ou des décisions gouvernementales.
        </p>

        <h2 className="text-2xl font-bold mb-4">8. Assurances</h2>
        <p className="text-lg mb-4">
          Nous recommandons fortement à tous les participants de souscrire à une assurance voyage couvrant les accidents, les maladies, les pertes de bagages, ainsi que l'annulation ou l'interruption du voyage.
        </p>

        <h2 className="text-2xl font-bold mb-4">9. Droit de Rétractation</h2>
        <p className="text-lg mb-4">
          Conformément à l'article L121-20-4 du Code de la consommation, le droit de rétractation ne s'applique pas aux prestations de services d'hébergement, de transport, de restauration et de loisirs qui doivent être fournis à une date ou selon une périodicité déterminée.
        </p>

        <h2 className="text-2xl font-bold mb-4">10. Protection des Données</h2>
        <p className="text-lg mb-4">
          Les informations personnelles que vous nous fournissez lors de votre réservation sont traitées conformément à notre Politique de Confidentialité. Elles ne seront utilisées que pour le traitement de votre commande et la communication relative à votre réservation.
        </p>

        <h2 className="text-2xl font-bold mb-4">11. Litiges</h2>
        <p className="text-lg mb-4">
          Les présentes conditions générales de vente sont soumises au droit applicable dans le pays d'origine de l'entreprise. En cas de litige, une solution amiable sera recherchée avant tout recours judiciaire. À défaut d'accord, le litige sera porté devant les tribunaux compétents du siège de la société.
        </p>

        <h2 className="text-2xl font-bold mb-4">12. Acceptation des Conditions Générales de Vente</h2>
        <p className="text-lg mb-4">
          En validant votre réservation, vous reconnaissez avoir lu et accepté sans réserve les présentes Conditions Générales de Vente.
        </p>

        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-4">
          Pour toute question relative à ces Conditions Générales de Vente, merci de nous contacter à l'adresse suivante : travel-mate@gmail.com .
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
