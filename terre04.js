
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


const nombre = process.argv[2]




if (nombre % 2 == 0) { console.log('pair'); } //le modulo est le reste d'une division euclidienne ex:dans 10 il y a 3 fois 3 donc il reste 1 donc impair et inversement avec 5 sur 10 il y est 2 fois donc paire
else if (nombre % 1 == 0) { console.log('impaire'); }
else (console.log('Tu ne me la mettras pas à l’envers.'))
