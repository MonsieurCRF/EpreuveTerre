/*Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.


Exemples d’utilisation :
$> python exo.py 5 2
résultat: 2
reste: 1


$> python exo.py 10 0
erreur.


$> python exo.py 3 5
erreur.
*/








const dividende = process.argv[2]
const diviseur = process.argv[3]
if (dividende == 0 || diviseur == 0) { console.log("on ne peut pas diviser par 0") }
else {


        console.log('resultat: ' + dividende / diviseur);
        console.log('reste: ' + dividende % diviseur);

}
