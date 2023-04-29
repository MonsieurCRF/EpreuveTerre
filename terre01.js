/*Créez un programme qui affiche son nom de fichier.


Exemples d’utilisation :
$> node exo.js
exo.js

$> node crevette.js
crevette.js

*/
const routefichier = process.argv[1]
const nomfichier = routefichier.split('/').slice(5)[0] //[0]accés au 1er elements du tableau cela evite que le resulat sois entre crochet
console.log(nomfichier);


