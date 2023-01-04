let nb = "42";
let number = parseInt(nb);
let nombre ;
while (parseInt(nombre)!==number){
    nombre = window.prompt("Trouve le nombre");
    
    if (nombre < number){
        alert("C'est plus !");
    }
    else if (nombre > number){
        alert("C'est moins !");
    }
}
alert("C'est gagné ! Bien joué champion !");
