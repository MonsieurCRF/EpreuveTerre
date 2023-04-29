
/*Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..


Exemples d’utilisation :
$> ruby exo.rb 2
pair

$> ruby exo.rb 5
impair


$> ruby exo.rb Bonjour
Tu ne me la mettras pas à l’envers.

$> ruby exo.rb
Tu ne me la mettras pas à l’envers.


Attention : gérez aussi les entiers négatifs
*/


const nombre = process.argv[2];

if (nombre < 0) {
    if (nombre % 2 == 0) {
        console.log('pair (négatif)');
    } else {
        console.log('impair (négatif)');
    }
} else if (nombre % 2 == 0) {
    console.log('pair');
} else {
    console.log('impair');
}

