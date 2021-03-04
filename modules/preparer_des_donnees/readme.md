# Formats de données

Comme nous allons utiliser des technologies "web" pour créer nos visualisation, il nous faut convertir les données en un format utilisable en javascript.

## JSON

Le fichiers de type [JSON](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation), (JavaScript Object Notation), sont, comme le nom l'indique, déjà dans un format que javascript comprends.

Prenons ce jeu de données: [Noms de famille par code postal](https://opendata.swiss/fr/dataset/nachnamen-pro-plz) de la poste. Il s'agit des noms de famille les plus fréquents par code postal.

Imaginons que nous souhaitons connaître les noms de familles les plus communs pour les femmes dans le code postal 1400 (Yverdon).

### Télécharger le fichier

```
curl https://swisspost.opendatasoft.com/api/v2/catalog/datasets/nachnamen_proplz/exports/json > noms.json
```

[curl](https://curl.haxx.se/) est un logiciel qui permet de faire une requête sur un serveur. Le résultat est affiché dans la console. Avec `> noms.json`, nous prenons le texte de la console et le sauvons dans le fichier `noms.json`.

### Préparer les données

Un script [`preparer.js`](json/preparer.js):

```js
const data = require('./noms.json')

const femmesAYverdon = d => d.plz === '1400' && d.sexcode === 'w'

const resultat = data
  .filter(femmesAYverdon)
  .map(d => ({ nom: d.nachname, nombre: d.anzahl }))
  .sort((a, b) => a.nombre > b.nombre ? -1 : 1)

console.log(resultat)
```

Nous chargeons les données JSON, avec `require`.

`femmesAYverdon` est une fonction qui prends un élément de `data` et retourne `true` s'il concerne le code postal 1400 et les femmes.

Nous utilisons cette fonction pour filtrer les éléments de `data`, `.filter(femmesAYverdon)`.

Seul le nom et le nombre nous intéressent: `.map(d => ({ nom: d.nachname, nombre: d.anzahl }))`.

Nous utilisons la méthode `.sort` pour ordonner la liste. 

Pour finir nous envoyons le résultat à la console, `console.log(result)`.

Quand nous lançons le scripte:

```
node preparer
```

nous voyons le résultat dans la console

```js
[
  { nom: 'Favre', nombre: 72 },
  { nom: 'Martin', nombre: 71 },
  { nom: 'Chevalley', nombre: 49 },
  { nom: 'Perret', nombre: 46 },
  { nom: 'Muminovic', nombre: 45 }
]
```

Si nous souhaitons sauver ces données dans un fichier, il nous faut convertir le résultat en chaîne de caractères. Pour cela, utilisons [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

```js
console.log(JSON.stringify(result))
```

Pour sauver le résultat dans un fichier `data.json`:

```
node preparer > data.json
```

Comme lors du téléchargement, `>`sert à sauver le texte affiché dans la console dans un fichier.

## CSV

Le format [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values), Comma Separated Values. Comme son nom l'indique, il ressemble à ça:

```csv
A,B,C
1,2,3
4,5,6
```

C'est comme une feuille excel avec uniquement les données (sans les fonctions). Chaque cellule est séparée par une virgule.

| A | B | C |
|---|---|---|
| 1 | 2 | 3 |
| 4 | 5 | 6 |

Prenons le fichier CSV: [éléctions au conseil national 2019](https://opendata.swiss/en/dataset/eidg-wahlen-2019/resource/001dbea9-820a-48ef-a88b-1b986f07852c).

```
curl https://www.bfs.admin.ch/bfsstatic/dam/assets/9386468/appendix > data.csv
```

### Convertir en JSON

Un scripte [toJSON.js](csv/toJSON.js)

```js
const fs = require('fs')

const file = fs.readFileSync('data.csv', 'utf-8')
```

N'étant pas un format compréhensible par javascript en tant que tel, il nous faut l'ouvrir avec [`fs`](https://nodejs.org/api/fs.html) (File System), la librairie `nodejs` qui permet d'interagir avec les fichiers sur l'ordinateur. Cette librairie est installée en même temps que `nodejs`. Pas besoin de la télécharger.

[`fs.readFileSync`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) nous permet d'ouvrir un fichier. Elle prends deux argument, le chemin vers le fichier à ouvrir, `data.csv`, et l'encodage, [`utf-8`](https://fr.wikipedia.org/wiki/UTF-8). 

Si nous envoyons ce fichier à la console

```js
console.log(file)
```

Nous en voyons le contenu.

Divisons le fichier par ligne avec [`.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

```js
console.log(file.split('\n'))
```

```
node toJSON
```

Nous voyons

```js
[
  'wahl_jahr;kanton_nummer;kanton_bezeichnung;partei_id;partei_bezeichnung_de;partei_bezeichnung_fr;partei_bezeichnung_it;partei_bezeichnung_en;anzahl_listen;anzahl_kandidierende;anzahl_kandidierende_f;anzahl_kandidierende_m;anzahl_gewaehlte;anzahl_gewaehlte_f;anzahl_gewaehlte_m;letzte_wahl_anzahl_gewaehlte;letzte_wahl_anzahl_gewaehlte_f;letzte_wahl_anzahl_gewaehlte_m;differenz_anzahl_gewaehlte;differenz_anzahl_gewaehlte_f;differenz_anzahl_gewaehlte_m;fiktive_waehlende;letzte_wahl_fiktive_waehlende;differenz_fiktive_waehlende;partei_staerke;letzte_wahl_partei_staerke;differenz_partei_staerke;flag_staerkste_partei;partei_rang\r',
  '2019;0;Schweiz;1;FDP;PLR;PLR;FDP;64;523;195;328;29;10;19;33;7;26;-4;3;-7;366312.85289;413445.31517;-47132;15.110295632;16.39678712;-1.286491488;0;3\r',
  '2019;0;Schweiz;2;CVP;PDC;PPD;CVP;77;702;281;421;25;7;18;27;9;18;-2;-2;0;275854.99172;293652.36747;-17797;11.378935911;11.645930381;-0.26699447;0;5\r',
  '2019;0;Schweiz;3;SP;PS;PS;SP;76;604;308;296;39;25;14;43;25;18;-4;0;-4;408134.04423;475074.39668;-66940;16.835407268;18.840928807;-2.005521539;0;2\r',
  // ...
]
```

Nous avons maintenant un tableau de chaînes de caractères, chacun étant une ligne du fichier.

Divisons chaque ligne au niveau du point-virgule. Le format a beau s'appeler "**comma** separated values", le séparateur de cellules n'a pas besoin d'être une virgule.

```js
console.log(
  file.split(`\n`)
    .map(line => line.split(';'))
)
```

retourne

```js
[
  [
    'wahl_jahr',
    'kanton_nummer',
    'kanton_bezeichnung',
    'partei_id',
    'partei_bezeichnung_de',
    'partei_bezeichnung_fr',
    'partei_bezeichnung_it',
    'partei_bezeichnung_en',
    'anzahl_listen',
    'anzahl_kandidierende',
    'anzahl_kandidierende_f',
    'anzahl_kandidierende_m',
    'anzahl_gewaehlte',
    'anzahl_gewaehlte_f',
    'anzahl_gewaehlte_m',
    'letzte_wahl_anzahl_gewaehlte',
    'letzte_wahl_anzahl_gewaehlte_f',
    'letzte_wahl_anzahl_gewaehlte_m',
    'differenz_anzahl_gewaehlte',
    'differenz_anzahl_gewaehlte_f',
    'differenz_anzahl_gewaehlte_m',
    'fiktive_waehlende',
    'letzte_wahl_fiktive_waehlende',
    'differenz_fiktive_waehlende',
    'partei_staerke',
    'letzte_wahl_partei_staerke',
    'differenz_partei_staerke',
    'flag_staerkste_partei',
    'partei_rang\r'
  ],
  [
    '2019',         '0',            'Schweiz',
    '1',            'FDP',          'PLR',
    'PLR',          'FDP',          '64',
    '523',          '195',          '328',
    '29',           '10',           '19',
    '33',           '7',            '26',
    '-4',           '3',            '-7',
    '366312.85289', '413445.31517', '-47132',
    '15.110295632', '16.39678712',  '-1.286491488',
    '0',            '3\r'
  ],
  [
    '2019',         '0',            'Schweiz',
    '2',            'CVP',          'PDC',
    'PPD',          'CVP',          '77',
    '702',          '281',          '421',
    '25',           '7',            '18',
    '27',           '9',            '18',
    '-2',           '-2',           '0',
    '275854.99172', '293652.36747', '-17797',
    '11.378935911', '11.645930381', '-0.26699447',
    '0',            '5\r'
  ],
  // ...
]
```

Cela fait beaucoup de colonnes. Imaginons que nous nous intéressons uniquement au nombre d'élus, `'anzahl_gewaehlte'`,  par parti, `'partei_bezeichnung_fr'`, et par canton `'kanton_bezeichnung'`.

---

### :point_up: L'indexe d'un tableau

Pour extraire un élément d'un tableau nous utilisons son indexe, sa position dans le tableau. L'indexe commence par 0.

```js
const numbers = [1, 2, 3]
console.log(numbers[0]) // 1
console.log(numbers[2]) // 3

const letters = ['a', 'b', 'c']
console.log(letters[0]) // a
console.log(letters[2]) // c
```

---

Les indexes des colonnes qui nous intéressent:

* `anzahl_gewaehlte`: 12
* `partei_bezeichnung_fr`: 5
* `kanton_bezeichnung`: 2

Créons un objet javascript pour chaque ligne avec uniquement ces valeurs

```js
console.log(
  file.split(`\n`)
    .map(line => line.split(';'))
    .map(cells => ({
      elus: cells[12],
      parti: cells[5],
      canton: cells[2],
    }))
)
```

retourne

```js
[
  {
    elus: 'anzahl_gewaehlte',
    parti: 'partei_bezeichnung_fr',
    canton: 'kanton_bezeichnung'
  },
  { elus: '29', parti: 'PLR', canton: 'Schweiz' },
  { elus: '25', parti: 'PDC', canton: 'Schweiz' },
  { elus: '39', parti: 'PS', canton: 'Schweiz' },
  // ...
]
```

On y est presque. Trois détails à regler:

1. `elus` est une chaîne de caractères, nous voulons cette valeur sous forme de nombre
2. Le premier élément ne sert à rien, `{ elus: 'anzahl_gewaehlte', parti: ...}`
3. Enlever les lignes oû le nombre d'élus est `0` ou `null` (la dernière ligne)

```js
console.log(
  JSON.stringify(
    file.split(`\n`)
      .map(line => line.split(';'))
      .map(cells => ({
        elus: Number(cells[12]),
        parti: cells[5],
        canton: cells[2],
      }))
      .filter((d, i) => i > 0 && Boolean(d.elus))
  )
)
```

Sauvons le résultat dans un fichier `data.json`

```
node toJSON.js > data.json
```

### Utiliser une librairie pour lire les CSV

Nous n'avons pas besoin de faire ce travail de diviser par ligne, puis par cellule. Nous l'avons fait ici pour montrer comment ça marche. Mais il existe plusieurs librairies javascript qui font le travail pour vous.

```js
const fs = require('fs')
const d3 = require('d3')

const file = fs.readFileSync('data.csv', 'utf-8')

const { parse } = d3.dsvFormat(';')

console.log(
  parse(file)
    .map(d => ({
      elus: Number(d.anzahl_gewaehlte),
      parti: d.partei_bezeichnung_fr,
      canton: d.kanton_bezeichnung,
    }))
)
```

## XLS

XLS est le format utilisé par le logiciel Excel. La manière la plus facile d'utiliser ce type de fichier est de copier les cellules qui vous intéressent. Et les coller dans un éditeur de texte et sauver le fichier comme `.csv`.

