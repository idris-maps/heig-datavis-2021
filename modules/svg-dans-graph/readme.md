# Utiliser des dessins svg dans un graphique

1. Optimiser le dessin avec [SVGO](https://jakearchibald.github.io/svgomg/) si nécessaire

2. Extraire la `viewBox` et les attributs `d`

```js
const img = {
  viewBox: '0 0 209.66 50.192',
  d: 'M0 45.578v-4.613l1.751-...',
}
```

3. Ajouter un svg à l'intérieur du svg, lui donner une largeur et une position

```svg
<svg viewBox="0 0 100 100">
  <svg viewBox="0 0 1000 1000" width="20" x="10" y="20">
    -- contenu --
  </svg>
</svg>
```