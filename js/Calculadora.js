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

//Sweet Alert
function showAlert () {  
  swal("Gracias por usar la calculadora de Rol Económico Argentino", {
      buttons: {
        cancel: "Borrar Rol",
        catch: {
          text: "Guardar Rol",
          value: "catch",
        },
        recalcular: true,
      },
    })
    .then((value) => {
      switch (value) {
     
        case "recalcular":
          swal("Vuelve a probar tu suerte!");
          break;
     
        case "catch":
          //Definir almacenaje
          const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
          // Almacenar array completo
          guardarLocal("AtributosPersonaje1", JSON.stringify(personaje1));
          swal("Listo!", "Tu Rol ha sido Guardado", "success");
          break;
     
        default:
          swal("Rol Borrado!");
      }
    });
  }
//Fetch
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then( (resp) => resp.json() )
  .then( (data) => {
      console.log(data)
  })
//Obtener mi perfil JSON de GitHub
function exito() {
    var datos = JSON.parse(this.responseText); //convertir a JSON
    console.log(datos);
}

// funcion para la llamada fallida
function error(err) {
    console.log('Solicitud fallida', err); //los detalles en el objecto "err"
}

var xhr = new XMLHttpRequest(); //invocar nueva instancia de XMLHttpRequest
xhr.onload = exito; // llamar a la funcion exito si exitosa
xhr.onerror = error;  // llamar a la funcion error si fallida
xhr.open('GET', 'https://api.github.com/users/gpelozo'); // Abrir solicitud GET
xhr.send(); // mandar la solicitud al servidor.

//Evento click
btn1.addEventListener('click', showAlert);
btn1.addEventListener('click', solicitarDato);
