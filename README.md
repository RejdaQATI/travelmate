# TravelMate - Application de gestion de voyages

Ce projet est une application complète de gestion de voyages, incluant un frontend et un backend, déployée avec Docker. 

## Prérequis

- [Docker](https://www.docker.com/get-started) installé sur votre machine
- [Git](https://git-scm.com/) pour cloner le dépôt

## Installation

### Étape 1 : Cloner le dépôt

```bash
git clone https://github.com/RejdaQATI/travelmate.git
cd travelmate/
```

### Étape 2 : Créer le fichier `.env`

Un fichier `.env` est requis pour configurer l'application. Vous devez créer ce fichier en vous basant sur l'exemple fourni dans le dépôt : 

```bash
cp .env.example .env
```

### Étape 3 : Configuration des variables d'environnement

Ouvrez le fichier `.env` nouvellement créé et configurez les variables nécessaires. Voici un exemple de ce que vous devez renseigner :

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1  # L'adresse IP ou l'hôte de la base de données
DB_PORT=3306       # Le port de la base de données, par défaut 3306
DB_DATABASE=travel # Le nom de la base de données que vous souhaitez utiliser
DB_USERNAME=root   # Le nom d'utilisateur de la base de données
DB_PASSWORD=root   # Le mot de passe de la base de données
```

Assurez-vous de remplir les valeurs en fonction de votre propre configuration.

### Étape 4 : Lancer l'application

Avec Docker installé, vous pouvez lancer les services frontend et backend de l'application via Docker Compose.

```bash
docker-compose up --build
```

Cette commande va construire les images Docker pour les différents services et démarrer l'application.



