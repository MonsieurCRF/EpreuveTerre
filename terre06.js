/*Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.


Exemples d’utilisation :
$> node exo.js “Hello world!”
!dlrow olleH


$> node exo.js “lehciM”
Michel

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
*/

const string = process.argv[2]

if (string === undefined) { //si l'utilisateur ne rentre rien 
    console.log("Erreur : veuillez saisir une chaîne de caractères en argument.")
}
else {
    let stringinverse = ""

    for (let i = string.length - 1; i >= 0; i--) //string.length-1 pour indiquer la derniere position de la chaines de caracteres
    //i>= pour atteindre la 1ere position de la chaine
    //i-- pour parcourir du debit a la fin
    { stringinverse += string[i]; }//pour eviter davoir les mot donné qui safiche horizontalement lettre par lettre
    // comme ceci console.log(string[i]);

    console.log(stringinverse);
}

