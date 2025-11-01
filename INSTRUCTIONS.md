# Instructions de démarrage - BrainUp Technology

## 🚀 Installation et démarrage

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### 3. Build pour la production

```bash
npm run build
```

### 4. Prévisualiser le build

```bash
npm run preview
```

## 📋 Comptes de démonstration

### Compte Administrateur
- **Email**: admin@brainup.cm
- **Mot de passe**: password

### Compte Étudiant
- **Email**: student@brainup.cm
- **Mot de passe**: password

## 🎯 Fonctionnalités principales

### Pages publiques
- ✅ Page d'accueil avec toutes les sections
- ✅ Catalogue de formations avec filtres
- ✅ Détails de chaque formation
- ✅ Système d'inscription en ligne
- ✅ Page concours avec formulaire de participation
- ✅ Boutique d'équipements
- ✅ Blog avec articles
- ✅ Page contact
- ✅ Page à propos

### Espace étudiant (authentification requise)
- ✅ Dashboard personnalisé
- ✅ Mes cours avec progression
- ✅ Visionneuse de cours
- ✅ Suivi de progression
- ✅ Téléchargement d'attestations

### Espace administrateur (rôle admin requis)
- ✅ Dashboard admin
- ✅ Gestion des inscriptions
- ✅ Gestion des cours
- ✅ Gestion des étudiants
- ✅ Génération d'attestations

## 🎨 Technologies utilisées

- **React 18** - Framework JavaScript
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form** - Gestion des formulaires
- **Lucide React** - Icônes
- **React Toastify** - Notifications
- **Vite** - Build tool

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   └── common/          # Composants réutilisables
├── pages/
│   ├── Home/            # Page d'accueil
│   ├── Formations/      # Catalogue et détails
│   ├── Inscription/     # Formulaire d'inscription
│   ├── Auth/            # Login, Register
│   ├── Dashboard/       # Espace étudiant
│   ├── Admin/           # Espace administrateur
│   ├── Concours/        # Page concours
│   ├── Boutique/        # Boutique
│   ├── Contact/         # Contact
│   ├── Blog/            # Blog
│   └── About/           # À propos
├── contexts/            # Context API (Auth)
├── data/                # Données statiques
├── utils/               # Fonctions utilitaires
└── styles/              # Styles globaux
```

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet (voir `.env.example`)

### Personnalisation

1. **Couleurs** : Modifiez `tailwind.config.js`
2. **Données** : Modifiez les fichiers dans `src/data/`
3. **Logo** : Remplacez `public/logo.svg`

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔐 Sécurité

- Authentification JWT (simulation)
- Protection des routes privées
- Validation des formulaires
- Protection CSRF (à implémenter en production)

## 🚀 Déploiement

### Netlify / Vercel

1. Connectez votre repository GitHub
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Build manuel

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

## 📞 Support

Pour toute question ou problème :
- Email: contact@brainup-tech.cm
- Téléphone: +237 690 00 00 00

## 📝 Notes importantes

### Backend API

Ce projet utilise actuellement des données mockées. Pour une version production :

1. Créez une API backend (Node.js/Express, Laravel, Django, etc.)
2. Implémentez les endpoints suivants :
   - `/api/auth/login` - Authentification
   - `/api/auth/register` - Inscription
   - `/api/formations` - Liste des formations
   - `/api/inscriptions` - Gestion des inscriptions
   - `/api/courses` - Contenu des cours
   - `/api/certificates` - Génération d'attestations

3. Remplacez les appels mockés dans les contextes et pages

### Intégration paiement

Pour intégrer les paiements Mobile Money :
1. Inscrivez-vous auprès d'un agrégateur (MTN MoMo API, Orange Money API)
2. Obtenez vos clés API
3. Implémentez le flux de paiement dans `src/pages/Inscription/`

### Email

Pour l'envoi d'emails automatiques :
1. Utilisez un service comme SendGrid, Mailgun, ou EmailJS
2. Configurez les templates d'emails
3. Implémentez l'envoi dans le backend

## 🎓 Prochaines étapes recommandées

1. ✅ Implémenter un backend API complet
2. ✅ Intégrer un système de paiement réel
3. ✅ Ajouter un système de chat en direct
4. ✅ Implémenter les notifications push
5. ✅ Ajouter un système de notation des cours
6. ✅ Créer une application mobile (React Native)
7. ✅ Ajouter l'analyse de données (Google Analytics)
8. ✅ Implémenter le SEO avancé
9. ✅ Ajouter des tests automatisés
10. ✅ Mettre en place un CDN pour les médias

## 📄 Licence

© 2024 BrainUp Technology. Tous droits réservés.
