/*Créez un programme qui affiche l’alphabet en lettres minuscules suivi d’un retour à la ligne.


Exemples d’utilisation :
$> python exo.py
abcdefghijklmnopqrstuvwxyz
$>


Attention : votre programme devra utiliser une boucle.

*/
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let resultat = '';
for (i = 0; i < alphabet.length; i++) {
    resultat += alphabet[i]  //pour eviter que lalphabet s'affiche lettre par lettre


}
console.log(resultat + '\n');
