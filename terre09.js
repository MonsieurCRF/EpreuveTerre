/*Créez un programme qui affiche la racine carrée d’un entier positif.


Exemples d’utilisation :
$> node exo.js 9
3

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.*/
let x = process.argv[2];
if (x === undefined) { console.log("il faut rentrer quelque chose"); }
else if (x < 0) { console.log("ce programme prend en compte uniquement les entiers positif") }
else if (isNaN(x)) { console.log("ceci n'est pas un nombre"); }
else {
    let racine = x ** (1 / 2); // mettre un nombre puissance 0,5 donne sa racine carré
    console.log(racine)
}
