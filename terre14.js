/*Créez un programme qui détermine si une liste d’entiers est triée ou pas.


Exemples d’utilisation :
$> ruby exo.rb 9 8 3
Pas triée !

$> ruby exo.rb 3 8 9 12
Triée !

$> ruby exo.rb “Salut”
erreur.
*/
let string = process.argv.slice(2)
let stringEntiers = string.map(arg => parseInt(arg)) //pour crée un tableau puis passez de "2" a 2 chiffre par exemple
let triée = true


for (i = 1; i < stringEntiers.length; i++) {
    if (stringEntiers[i] < stringEntiers[i - 1]) {//si le chiffre actuel dans la boucle est inferieur au precedents alors false
        triée = false
        break; // permet de mettre un terme a la boucle for si la liste d'entier n'est pas triée
    }

}
if (triée) { console.log("la liste est triée"); }
else { console.log("la liste n'est pas triée"); }

