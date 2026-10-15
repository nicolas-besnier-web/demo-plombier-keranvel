# Keranvel Plomberie Chauffage — site de démonstration

Site vitrine **fictif** réalisé par BALD (agence web, Rennes) comme exemple de réalisation pour des artisans et commerçants. L'entreprise, l'artisan, l'adresse, le téléphone (02 00 00 00 00) et l'e-mail (contact@exemple.fr) sont inventés. Le nom « Keranvel » a été recherché sur le web : aucune entreprise de plomberie/chauffage de ce nom trouvée à Rennes ou en Bretagne.

## Règles à ne jamais casser
- Bandeau « Projet de démonstration réalisé par BALD — entreprise fictive » en haut de chaque page.
- Aucun faux avis présenté comme réel (si ajout d'avis : chacun marqué « Exemple »).
- Le formulaire n'envoie rien : message « Ceci est un site de démonstration : aucun message n'est envoyé. »
- Aucune ressource externe (polices, images, scripts), aucun cookie, aucun traceur.
- Photos Unsplash uniquement, créditées dans `mentions-legales.html`.

## Structure
- `index.html` : page unique (accroche + appel, services, urgences, zone, artisan, contact).
- `mentions-legales.html` : mentions fictives + crédits photos/polices.
- `css/style.css`, `js/main.js` (formulaire factice uniquement).
- `fonts/` : Barlow Condensed (titres) et Source Sans 3 (texte), WOFF2, licence OFL.
- `img/` : 3 photos Unsplash redimensionnées (1400 px, JPEG).
- `docs/critique-et-references.md` : critique impeccable et références de la passe qualité.
- `captures/` : captures d'écran pour la page Réalisations du site BALD.

## Direction artistique
Bleu marine (#0b2545) et blanc, accent ambre (#f5b700) réservé aux boutons d'appel. Titres condensés robustes, texte sobre. Objectif : appeler en moins de 10 secondes (bouton d'appel dans l'accroche, en-tête et barre fixe mobile). Accessibilité : contrastes AA, focus visible, lien d'évitement, `prefers-reduced-motion`.

## Aperçu local
`python3 -m http.server 8080` dans ce dossier, puis http://localhost:8080

## Offre illustrée : Site vitrine Essentiel (790 €)
Une seule page, sans CMS ni espace de modification, sans nouvelle page (hors mentions légales). Ne pas ajouter de pages, de blog ni d'outil d'édition : ce site sert à montrer la différence avec l'offre Pro (démo boulangerie).
Les engagements (délai, horaires, garanties) sont des exemples étiquetés comme tels ; aucun label, certification ou avis inventé.
Mouvement : apparitions discrètes uniquement, désactivées par `prefers-reduced-motion` ; la page reste lisible sans JavaScript.
