
//inverse une chaine de caractere
const string = process.argv[2]
    let stringinverse = "";
    for (let i = string.length - 1; i >= 0; i--) //string.length-1 pour indiquer la derniere position de la chaines de caracteres
    //i>= pour atteindre la 1ere position de la chaine
    //i-- pour parcourir du debit a la fin
    { stringinverse += string[i]; }//pour eviter davoir les mot donné qui safiche horizontalement lettre par lettre
    // comme ceci console.log(string[i]);

    console.log(stringinverse);

