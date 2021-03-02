# Pourquoi `.enter()`?

Démonstration de l'usage de `.enter()` avec D3. Ainsi que `.merge()` et `.exit()`.

À chaque fois que le bouton enregistre un `click`, un nouveau tableau de lettre est généré.

Les lettres entrantes sont en vert. Les lettres sortantes sont en rouge. Les lettres présentes avant le `click` et inclues dans le nouveau tableau sont en noir. Après une seconde, les données entrantes et préexistantes sont placées par ordre alphabétique.

## Copier le code

Créer un dossier `mon-projet` avec tous les fichiers:

```
npx degit https://github.com/idris-maps/heig-datavis-2021/modules/enter_update_exit mon-projet
```

Installer les dépendances:

```
npm install
```

Démarrer le serveur de développement:

```
npm run dev
```
