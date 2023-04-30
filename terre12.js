/*Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.


Exemples d’utilisation :
$> ruby exo.rb 11:40PM
23:40

Attention : midi et minuit.
*/
let ValeurI = process.argv[2]


let h12_00 = parseInt(ValeurI.slice(':').slice(0, 2))
let m12_00 = ValeurI.slice(':').slice(3, 5)

//pour midi 12:00PM a 12:59 PM
if (h12_00 == 12 && ValeurI.includes("PM")) { console.log(h12_00 + ":" + m12_00); }

//pour minuit 12:00AM a 12:59 AM
else if (h12_00 == 12 && ValeurI.includes("AM")) {
    let cut = "00";
    console.log(cut + ":" + m12_00);
}
//pour 01:00AM a 11:59AM
else if (h12_00 >= 1 && h12_00 <= 11 && ValeurI.includes("AM")) { console.log(h12_00 + ":" + m12_00); }
//pour 01:00PM a 11:59PM
else if (h12_00 >= 1 && h12_00 <= 11 && ValeurI.includes("PM")) {
    cut = h12_00 + 12

    console.log(cut + ":" + m12_00);
}
else console.log("le format attendu est 00:00PM/AM");
//le code marche mais si lutilisateur tape 3:34pm le code va marcher mais afficher un resultat mauvais je reviendrai dessus