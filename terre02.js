
/*Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.


Exemples d’utilisation :
$> ruby exo.rb je suis solide !
je
suis
solide
!

*/

const args = process.argv.slice(2); //parcour le cheminement et ce qui est rentré dans la ligne de commande


for (let i = 0; i < args.length; i++) {
  console.log(args[i]);
}