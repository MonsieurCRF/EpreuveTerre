//programme qui affiche le nombre de caractères d’une chaîne de caractères passée en 


const a =process.argv[2]




    let count = 0;
    for (let i = 0; i < a.length; i++) {
      count++; //a chaque boucle effectuer la fonction count prend +1 
    }
    console.log("Le nombre de caractères dans la chaîne est : " + count);
