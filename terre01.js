/*Créez un programme qui affiche son nom de fichier.


Exemples d’utilisation :
$> node exo.js
exo.js

$> node crevette.js
crevette.js

*/
const routefichier = process.argv[1]
const nomfichier = routefichier.split('/').slice(5)
console.log(nomfichier);


//sortie :MBP-de-Leo:terre leopicano$ node terre01.js
//[ 'terre01.js' ]