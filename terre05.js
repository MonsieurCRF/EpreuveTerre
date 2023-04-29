//programme qui affiche le résultat et le reste d’une division entre deux nombres.









const dividende =process.argv[2]
const diviseur = process.argv[3]
if (dividende==0 || diviseur==0){console.log("on ne peut pas diviser par 0")}
else {

 
        console.log('resultat: ' + dividende / diviseur);
        console.log('reste: ' + dividende % diviseur);
   
}
