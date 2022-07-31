//Calculadora de riesgo economico parte 1: Rol MMORPG
const personaje1 = []
//Creando Funcion armadora de elementos del array del personaje
function solicitarDato (elemento) {
personaje1.unshift(parseInt(elemento));
selector = parseInt(elemento);
if (selector == 3) {
    var resultado = personaje1.find((el) => el.elemento === 3)
    console.log(personaje1)
} else if (selector == 2){
    var resultado = personaje1.find((el) => el.elemento === 2)
    console.log(personaje1)
} else if (selector == 1 ) {
    var resultado = personaje1.find((el) => el.elemento ===1)
} else {
    prompt('Error. Ingrese nuevamente el valor.')
}
}

//Alerta de Bienvenida
alert('Bienvenido a la calculadora de riesgo del Banco Central de la Republica Argentina')
//Ingreso de Nombre
let Nombre = prompt('Ingrese su nombre: ');
personaje1.unshift(Nombre);
//Ingreso de Intelecto
let Ie = prompt ( 'Hola '+Nombre+'! '+'Del 1 al 3, ¿Que tanto sabes de ahorrar? : [1] Nada [2] Poco [3] Mucho');
solicitarDato(Ie);
//Ingreso de Fuerza
let F = prompt ('Tenes muchas ganas de irte de argentina?: [1] Nada [2] Poco [3] Mucho ')
solicitarDato(F);
//Ingreso de Agilidad Impositiva
let Ai = prompt ('Cuantos impuestos tiene Argentina actualmente?: [1] Ninguno [2] Algunos pocos [3] demasiados ')
solicitarDato(Ai);
//Calculo
let Total = personaje1.reduce((a,b) => a + b, 0);

//Asignacion de Rol
if ( Total = 9 ) {
    alert('Resultado:  MAGO . Sos un sobreviviente de la Argentina, dominaras el mundo');
} else if ( 4 <= Total <9 ){
    alert('Resultado: GUERRERO . La peleas todos los dias , defendiendote de la inflacion, segui leyendo.  ');
} else if (Total <4 ){
    alert('Resultado: ELFO DOBBY . Como la alegoria de Platon, saldras de la cueva en la que vives y veras el sol.');
}