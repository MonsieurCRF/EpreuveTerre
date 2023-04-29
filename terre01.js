//affiche le nom de ton fichier
const routefichier = process.argv[1]
const nomfichier= routefichier.split('/').slice(5)
console.log(nomfichier);


//sortie :MBP-de-Leo:terre leopicano$ node terre01.js
//[ 'terre01.js' ]