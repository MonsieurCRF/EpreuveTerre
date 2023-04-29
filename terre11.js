/*Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.


Exemples d’utilisation :
$> ruby exo.rb 23:40
11:40PM

Attention : midi et minuit.
*/
let f24 = process.argv[2]
let cut24 = ""

h24_00 = f24.slice(':').slice(0, 2)
m00_24 = f24.slice(':').slice(3)

//pour les heures comprise entre minuit 00:00 et 00:59
if (h24_00 <= 0 && h24_00 < 1) {
    cut = h24_00 + 12
    cut24 = cut + ':' + m00_24
    cut24bis = cut24.slice(2)
    console.log(cut24bis + 'AM')
}
//pour les heures comprise entre 1H et 12H59
else if (h24_00 >= 1 && h24_00 <= 12) {
    console.log(h24_00 + ':' + m00_24 + "AM");
}
//pour les heures comprise entre 13H et 23H59
else if (h24_00 >= 13 && h24_00 <= 23) {
    cut = h24_00 - 12
    cut13 = cut + ':' + m00_24
    cut13bis = cut13
    console.log(cut13bis + 'PM')
}







else { console.log('le seul format d\'heures valabe est (00:00)') }