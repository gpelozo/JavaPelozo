//Calculadora de riesgo economico parte 1: Rol MMORPG
//Array
const personaje1 = [];
console.log(personaje1);
//Constantes
const out1 = document.getElementById('output1');
//variables
let btn1 = document.getElementById('btn1');
//Creando Funcion armadora de elementos del array del personaje
function solicitarDato () {
    let respuesta1 =parseInt(document.getElementById('irte').value);
    let respuesta2= parseInt(document.getElementById('ahorrar').value);
    let respuesta3 = parseInt(document.getElementById('impuestos').value);
    personaje1.unshift(respuesta1,respuesta2,respuesta3);
    console.log(personaje1);
    //Busqueda, Transformacion, y Calculo con Funcion de orden superior Reduce
    let Total = personaje1.reduce((a,b) => a + b, 0);
    console.log(Total);
    //Asignacion de rol
    if ( Total == 9 ) {
        console.log('Resultado:  MAGO . Sabes mucho. Eres un sobreviviente de la Argentina, dominarás el mundo');
        out1.innerHTML = 'Resultado:  MAGO . Sabes mucho. Eres un sobreviviente de la Argentina, dominarás el mundo';

    } else if (Total <9 && Total >=4 ){
        console.log('Resultado: GUERRERO . Algo sabes. La peleas todos los dias , defendiéndote de la inflación.  ');
        out1.innerHTML = 'Resultado: GUERRERO . Algo sabes. La peleas todos los dias , defendiéndote de la inflación.  ';

    } else if (Total <4 ){
        console.log=('Resultado: ELFO DOBBY . Te falta investigar. Como la alegoría de Platón, saldrás de la cueva en la que vives y verás el sol.');
        out1.innerHTML = 'Resultado: ELFO DOBBY . Te falta investigar. Como la alegoría de Platón, saldrás de la cueva en la que vives y verás el sol.';

    }
}
//Evento click
btn1.addEventListener('click', solicitarDato);
//Definir almacenaje
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// Almacenar array completo
guardarLocal("AtributosPersonaje1", JSON.stringify(personaje1));
