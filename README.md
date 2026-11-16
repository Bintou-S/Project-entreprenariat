# RainRoot

Site de démonstration pour le projet de valorisation des eaux de pluie à Dakar (groupe 129).

## Lancer le site
1. Ouvrez le dossier `rainroot` dans VS Code (Fichier, Ouvrir le dossier).
2. Installez l'extension « Live Server » (Ritwick Dey), puis clic droit sur `index.html` et « Open with Live Server ».
   Sans extension, vous pouvez aussi double-cliquer sur `index.html`.
3. Il faut internet pour afficher la carte (OpenStreetMap).

## Comptes de démonstration
- Habitant : sans compte
- Maraîcher : numéro à 9 chiffres (ex. 77 123 45 67), code `1234`
- Mairie : `mairie` / `mairie2026`
- Administrateur : `admin` / `rainroot2026` (lien « Équipe du projet » en bas de l'accueil)

## Les fichiers
- `index.html` : la page unique.
- `styles.css` : l'apparence. Les couleurs sont dans `:root` en haut.
- `data.js` : les données (prix de l'eau `prix`, volume max `max`, réservoirs `res` avec `lat` et `lng`, commandes, utilisateurs) et les mots de passe de démonstration `MDP`.
- `app.js` : le fonctionnement de chaque écran.

## Modifier
- Nom du projet : cherchez « RainRoot » dans `index.html` et `app.js`.
- Couleurs : `styles.css`, variables `--pri` (principale), `--acc` (action), `--ink` (texte).
- Tarif : `prix` dans `data.js`, ou depuis l'espace Administrateur, Réglages.
- Réservoirs : `res` dans `data.js` (nom, capacité `cap`, niveau `niv`, `lat`, `lng`).
- Remettre les données à zéro : Administrateur, Réglages, « Réinitialiser la démonstration ». Les données sont gardées dans le navigateur (localStorage).

## Passer à une vraie version
1. Serveur et base de données (par exemple Node.js avec PostgreSQL) pour remplacer `data.js` et le localStorage.
2. Vraie authentification (comptes, mots de passe chiffrés, rôles vérifiés côté serveur). Aujourd'hui la connexion est simulée et ne protège rien.
3. API Wave et Orange Money pour les vrais paiements (fonction `pay()` dans `app.js`).
4. Capteurs de niveau d'eau dans les réservoirs, qui envoient leurs mesures au serveur à la place des variations aléatoires de `app.js`.
5. Hébergement en ligne (Netlify, GitHub Pages, ou un serveur).
