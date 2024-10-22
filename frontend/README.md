# TravelMate - Frontend

Ce dépôt contient le frontend de l'application **TravelMate**. Cette application est un système de gestion de voyages avec un frontend en **React** et un backend en **Laravel**. Suivez les instructions ci-dessous pour configurer et démarrer l'application.


## Pré-requis


Assurez-vous d'avoir les éléments suivants installés sur votre machine avant de commencer :  
  
- **Node.js** (version 14 ou supérieure)  
- **npm** (ou **yarn**)  
- **Git** pour cloner le dépôt  
- **Backend** installé et fonctionnel (suivez les instructions dans le [dépôt backend]([https://github.com/RejdaQATI/travelmate-backend](https://github.com/RejdaQATI/travelmate-backend)))

## Installation du Frontend

**1.** Clonez ce dépôt :
```
git clone https://github.com/RejdaQATI/travelmate-frontend.git
cd travelmate-frontend
```

**2.** Installez les dépendances du projet :
```
npm install
```

**3.** Copiez le fichier `.env` à la racine du projet en vous basant sur le fichier `.env.example` :

```
cp .env.example .env
```

Dans ce fichier `.env`, assurez-vous de configurer l'URL de l'API pour qu'elle pointe vers le backend (par exemple http://localhost:8000 si le backend tourne localement).

**4.** Démarrez le serveur de développement :
```
npm start  
```
Le frontend sera accessible à l'adresse suivante : http://localhost:3000.

## API  
Le frontend communique avec le backend via des appels API REST. Assurez-vous que votre backend Laravel est correctement configuré et démarré.  

Pour configurer l'URL de l'API, modifiez le fichier `.env` dans le frontend, en spécifiant l'URL de votre backend Laravel :   
```
REACT_APP_API_URL=http://localhost:8000
```