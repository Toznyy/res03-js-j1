let prenom = window.prompt("Quel est ton prénom ?");
let nom = window.prompt("Quel est ton nom de famille ?");
let jourNaissance = window.prompt("Quel jour es-tu né ? (nombre)");
let moisNaissance = window.prompt("Quel est ton mois de naissance (nombre)?");
let anneeNaissance = window.prompt("Quelle est ton année de naissance ?");
let date = new Date();
let jour = date.getDay();
let mois = date.getMonth()
let annee = date.getFullYear();
let age;
if (mois < moisNaissance){
    if (jour < jourNaissance) {
        age = annee - anneeNaissance - 1;
    }
    else {
        age = annee - anneeNaissance;
    }
}
else {
    age = annee - anneeNaissance;
}
console.log(`Salut ${prenom} ${nom}, cette année tu as ${age} ans !`);