//Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.

let A = parseInt(process.argv[2]);
let B = parseInt(process.argv[3]);
let C = parseInt(process.argv[4]);


if (A < B && B < C) { console.log(B); }
else if (A < C && C < B) { console.log(C); }
else if (B < A && A < C) { console.log(A); }
else if (B < C && C < A) { console.log(C); }
else if (C < A && A < B) { console.log(A); }
else if (C < B && B < A) { console.log(B); } 
else console.log("erreur");