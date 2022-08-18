//boton submit haga nada
function myFunction() {
    // en blanco
}
//Calculadora de riesgo economico parte 1: Rol MMORPG
const personaje1 = [];
//Creando Funcion armadora de elementos del array del personaje
function solicitarDato (elemento) {
personaje1.unshift(parseInt(elemento));
selector = parseInt(elemento);
if (selector == 3) {
    let resultado = personaje1.find((el) => el.elemento === 3);
    console.log(personaje1);
} else if (selector == 2){
    let resultado = personaje1.find((el) => el.elemento === 2);
    console.log(personaje1);
} else if (selector == 1 ) {
    let resultado = personaje1.find((el) => el.elemento === 1);
    console.log(personaje1);
} else {
    prompt('Error. Ingrese nuevamente el valor.');
}
}
//funcion de display
function display1() {
    out1.innerHTML = txt1.value;
}


//incorporacion de eventos
let Ie = display1() ; 
let F = display1() ; 
let Ai = display1();
//salida al display
btn1.addEventListener('click',display1,solicitarDato(Ie));
btn1.addEventListener('click',display1,solicitarDato(F));
btn1.addEventListener('click',display1,solicitarDato(Ai));


//Busqueda, Transformacion, y Calculo con Funcion de orden superior Reduce
let Total = personaje1.reduce((a,b) => a + b, 0);
console.log(Total);

//Asignacion de Rol
if ( Total == 9 ) {
    alert('Resultado:  MAGO . Sabes mucho. Eres un sobreviviente de la Argentina, dominarás el mundo');
} else if (Total <9 && Total >=4 ){
    alert('Resultado: GUERRERO . Algo sabes. La peleas todos los dias , defendiéndote de la inflación.  ');
} else if (Total <4 ){
    alert('Resultado: ELFO DOBBY . Te falta investigar. Como la alegoría de Platón, saldrás de la cueva en la que vives y verás el sol.');
}

/*//Alerta de Bienvenida
alert('Bienvenido a la calculadora de riesgo del Banco Central de la Republica Argentina');
//Ingreso de Nombre
let Nombre = prompt('Ingrese su nombre: ');

//Ingreso de Intelecto
let Ie = prompt ( 'Hola '+ Nombre + '\n Del 1 al 3, ¿Que tanto sabes de ahorrar? : [1] Nada [2] Poco [3] Mucho');
solicitarDato(Ie);
//Ingreso de Fuerza
let F = prompt ('Tenes ganas de irte de argentina?: [1] Nada [2] Poco [3] Mucho ');
solicitarDato(F);
//Ingreso de Agilidad Impositiva
let Ai = prompt ('Cuantos impuestos tiene Argentina actualmente?: [1] Ninguno [2] Algunos pocos [3] demasiados ');
solicitarDato(Ai);
//Busqueda, Transformacion, y Calculo con Funcion de orden superior Reduce
let Total = personaje1.reduce((a,b) => a + b, 0);
console.log(Total);

//Asignacion de Rol
if ( Total == 9 ) {
    alert('Resultado:  MAGO . Sabes mucho. Eres un sobreviviente de la Argentina, dominarás el mundo');
} else if (Total <9 && Total >=4 ){
    alert('Resultado: GUERRERO . Algo sabes. La peleas todos los dias , defendiéndote de la inflación.  ');
} else if (Total <4 ){
    alert('Resultado: ELFO DOBBY . Te falta investigar. Como la alegoría de Platón, saldrás de la cueva en la que vives y verás el sol.');
}
*/