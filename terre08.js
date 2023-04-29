/*Créez un programme qui affiche le résultat d’une puissance.


L’exposant ne pourra pas être négatif.


Exemples d’utilisation :
$> node exo.js 2 3
8

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.*/

const a = process.argv[2];
const b = process.argv[3];

if (!a || !b) {
  console.log('Veuillez fournir deux nombres en arguments.'); // est ce quil y a (a) et (b)
} else if (isNaN(a) || isNaN(b)) {
  console.log('Les arguments doivent être des nombres.');//ce sont bien des chiffres ?
} else if (b < 0) {
  console.log("L'exposant doit être positif ou nul.");
} else {
  console.log(a ** b);
}
