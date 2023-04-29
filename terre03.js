//programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.


const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const lettre = process.argv[2].toLocaleLowerCase();

let start = alphabet.indexOf(lettre);

for (let i = start; i < alphabet.length; i++) {
  console.log(alphabet[i]);
}
