/*Créez un programme qui affiche le résultat d’une puissance.


L’exposant ne pourra pas être négatif.


Exemples d’utilisation :
$> node exo.js 2 3
8

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.*/

const a = process.argv[2]

const b = process.argv[3]
if (b < 0) { console.log('l\'exposant est negatif ce n\'est pas possible'); }
else
  console.log(a ** b)

