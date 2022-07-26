/*
for(desde; hasta; actualización) {
 … //lo que se escriba acá se ejecutará mientras dure el ciclo
}
*/
/*
for (let i = 1; i <= 10; i++) {
    alert(i);
}
*/
/*
for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}
*/
//desafio Ciclo 26 - 07 - 22 - Cepoid
let nombre = prompt('Hola, cual es tu nombre?')
let edad = prompt('ingrese su edad: ' );
edadReal = parseInt(edad);
if (edadReal >= 18) {
    alert('Bienvenido '+ nombre);
    let clase = prompt('Ingrese el num de clase actual por la que va el curso de Javascript de Coderhouse: ');
    claseActual = parseInt(clase);
    let clasesRestantes = 16 - claseActual;
    alert('Clases restantes para la entrega final: '+ clasesRestantes +' clases')
    document.write(typeof clasesRestantes);
    for ( i = clasesRestantes; i <= 16 && i > 0 ; i-- ) {
        console.log(i);
        document.write( "clase " + i + "<br>" );
    }
}
else {
    alert('Acceso Denegado')
}
