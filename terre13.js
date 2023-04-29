/*Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.


Exemples d’utilisation :
$> ruby exo.rb 11 40 34
34

$> ruby exo.rb 2 1 3
2

$> ruby exo.rb 2 2 2
erreur.
*/

let A = parseInt(process.argv[2]);
let B = parseInt(process.argv[3]);
let C = parseInt(process.argv[4]);


if (A < B && B < C) { console.log(B); }
else if (A < C && C < B) { console.log(C); }
else if (B < A && A < C) { console.log(A); }
else if (B < C && C < A) { console.log(C); }
else if (C < A && A < B) { console.log(A); }
else if (C < B && B < A) { console.log(B); }
else console.log("erreur");