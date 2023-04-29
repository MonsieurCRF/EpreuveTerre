/*Créez un programme qui affiche la racine carrée d’un entier positif.


Exemples d’utilisation :
$> node exo.js 9
3

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.*/
let x = process.argv[2];
let racine = x ** (1 / 2); // mettre un nombre puissance 0,5 donne sa racine carré
console.log(racine)
