//Créez un programme qui détermine si une liste d’entiers est triée ou pas.
let string = process.argv.slice(2)
let stringEntiers = string.map(arg => parseInt(arg)) //pour crée un tableau puis passez de "2" a 2 chiffre par exemple
let triée= true 


for (i = 1; i < stringEntiers.length; i++) {
    if (stringEntiers[i] < stringEntiers[i - 1]) {
         triée=false
        break;
    }

}
if(triée){console.log("la liste est triée");}
else{console.log("la liste n'est pas triée");}

