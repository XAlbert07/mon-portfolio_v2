# Portfolio — Albert Sama

Portfolio professionnel d'**Albert Sama**, développeur web basé à Koudougou, Burkina Faso. Le site présente des projets web, des études de cas, les prestations proposées et plusieurs moyens de contact.

## Aperçu

Le portfolio est construit avec Next.js App Router et met en avant six projets issus de différents types de réalisation : applications web, outils métier, sites vitrines et landing pages.

### Projets présentés

| Projet | Présentation | Démo |
| --- | --- | --- |
| **Gestion de Stock** | Application de gestion de stock, ventes, fournisseurs et mouvements, avec une démonstration en lecture seule. | [Ouvrir la démo](https://gestion-stock-pied-three.vercel.app) |
| **FasoMarket** | Marketplace locale conçue pour connecter acheteurs et vendeurs au Burkina Faso. | [Ouvrir la démo](https://faso-market.vercel.app/) |
| **CV Creator Pro** | Générateur de CV avec aperçu en direct et export de documents. | [Code source](https://github.com/XAlbert07/Generator-CV) |
| **Web Digi** | Site vitrine d'une agence web et infographie. | [Ouvrir la démo](https://agence-web-phi.vercel.app/) |
| **Site vitrine restaurant** | Site de démonstration pour un restaurant, avec carte filtrable et interactions visuelles. | [Ouvrir la démo](https://restaurant-site-henna.vercel.app/) |
| **ConcoursElite** | Landing page pour un service de préparation aux concours. | [Ouvrir la démo](https://landing-page-c6efbe5g5-alberts-projects-394db913.vercel.app/) |

Les liens de démonstration pointent vers les adresses configurées dans le projet. Leur disponibilité dépend du déploiement correspondant.

## Fonctionnalités du portfolio

- Présentation personnelle et section « À propos ».
- Mise en avant d'un projet principal et présentation compacte des autres projets.
- Pages d'études de cas pour détailler le contexte, les défis, les résultats, la stack et les captures disponibles.
- Pages de services dédiées au développement React, au freelance Next.js et à la refonte frontend React.
- Formulaire de contact avec validation des champs et envoi via Resend ou un webhook configurable.
- Liens de contact : e-mail, WhatsApp, LinkedIn et GitHub.
- Métadonnées SEO, données structurées JSON-LD, image Open Graph, image Twitter, sitemap et robots.txt générés par Next.js.
- Images de projets servies depuis le dossier `public/`.

## Stack technique

- **Framework :** Next.js 16 (App Router)
- **Interface :** React 19
- **Langages :** TypeScript et JavaScript
- **Styles :** Tailwind CSS 4 et CSS personnalisé
- **Contact :** Resend ou webhook HTTP
- **Déploiement visé :** compatible avec Vercel

## Prérequis

- Node.js **20.9 ou supérieur** (recommandation de Next.js 16)
- npm

## Installation locale

Clone le dépôt et installe les dépendances :

```bash
git clone https://github.com/XAlbert07/mon-portfolio_v2.git
cd mon-portfolio_v2
npm install
```

Crée un fichier **`.env.local` à la racine** du projet. Pour le développement local, ajoute au minimum l'URL du site :

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Démarre le serveur de développement :

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Formulaire de contact

Le point d'entrée de l'API est `app/api/contact/route.ts`.

### Option A — Resend

Ajoute ces variables dans `.env.local` :

```dotenv
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_destination_email
CONTACT_FROM_EMAIL=your_verified_sender
```

`CONTACT_TO_EMAIL` et `CONTACT_FROM_EMAIL` sont facultatifs si les valeurs par défaut du projet conviennent. Pour envoyer des e-mails en production avec un domaine personnalisé, configure et vérifie l'adresse d'expéditeur auprès de ton fournisseur.

### Option B — Webhook

Si `RESEND_API_KEY` n'est pas défini, le formulaire peut transmettre les messages à un webhook :

```dotenv
CONTACT_FORM_WEBHOOK_URL=https://your-webhook-endpoint
CONTACT_FORM_WEBHOOK_SECRET=your_shared_secret
```

Le secret du webhook est facultatif. Le service de réception doit accepter les requêtes HTTP POST JSON. Sans Resend ni webhook configuré, l'API renvoie une réponse indiquant que l'envoi n'est pas configuré.

**Sécurité :** ne committe jamais `.env.local`, les clés d'API ou les secrets dans Git.

## Commandes disponibles

```bash
npm run dev    # Serveur local de développement
npm run lint   # Vérification ESLint
npm run build  # Build de production
npm run start  # Démarrer le build de production
```

Pour tester le build de production localement :

```bash
npm run build
npm run start
```

## Structure du projet

```text
.
├── app/
│   ├── api/contact/       # API du formulaire de contact
│   ├── components/        # Sections, présentation et études de cas
│   ├── data/projects.ts   # Données et liens des projets
│   ├── lib/               # Utilitaires, dont gestion des captures
│   ├── projets/           # Pages d'études de cas
│   ├── site-config.ts     # Identité, SEO et coordonnées du site
│   ├── sitemap.ts         # Génération du sitemap
│   └── robots.ts          # Règles d'indexation
├── public/
│   └── projets/           # Captures et vignettes des réalisations
├── scripts/               # Scripts utilitaires
├── next.config.ts
├── package.json
└── README.md
```

## Mise à jour des projets

Les projets présentés sur la page d'accueil sont définis dans `app/data/projects.ts`. Ce fichier centralise leurs titres, descriptions, défis, résultats, technologies, liens et images. Les pages de cas d'étude et les vignettes utilisent ces données et les ressources présentes dans `public/projets/`.

Lorsque tu ajoutes ou modifies un projet :

1. Mets à jour son entrée dans `app/data/projects.ts`.
2. Ajoute les captures nécessaires dans `public/projets/`.
3. Vérifie que les liens externes sont accessibles et que les captures référencées existent.
4. Lance `npm run lint` et `npm run build` avant de publier.

## Configuration SEO et URL du site

Le site utilise `NEXT_PUBLIC_SITE_URL` pour définir son URL canonique. En environnement Vercel, le code peut également utiliser les variables `VERCEL_PROJECT_PRODUCTION_URL` ou `VERCEL_URL). Pour la production, vérifie que la variable pointe vers le domaine public final afin que les métadonnées, le sitemap et les données structurées utilisent la bonne URL.

## Déploiement

Le projet est compatible avec Vercel :

1. Importe le dépôt dans Vercel.
2. Configure les variables d'environnement utilisées par le site et le formulaire de contact.
3. Définis `NEXT_PUBLIC_SITE_URL` sur le domaine de production.
4. Déploie, puis teste le formulaire de contact et les principales pages.

## État du projet

Ce dépôt contient le code du portfolio. Le fonctionnement des services de contact en production dépend de la configuration des variables d'environnement ; vérifie leur présence et teste l'envoi réel avant de considérer le formulaire comme opérationnel.
