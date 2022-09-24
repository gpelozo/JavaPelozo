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
        save: {
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
     
        case "save":
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

  //borrado
function callback () {
let display1 = document.getElementById('ahorrar');
let display2 = document.getElementById('irte');
let display3 = document.getElementById('impuestos');
      display1.innerText = '';
      display2.innerText = '';
      display3.innerText = '';
}
//Fetch API Banco Central de la Republica Argentina
  fetch("https://api.estadisticasbcra.com/usd", {
    headers: {
      Authorization: 
      "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTUzNTMzNzcsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJnMTU1NDQwNzI4QGdtYWlsLmNvbSJ9.WBdNklXVQTaNQVB1HU5EdyLnSFHXaiN-twEu6pLS82V-K8YehVik_vAj0zys4rMQuBUJ7KOJ7eo3adkkGwRttw",
 }
})
  .then( (response) => response.json() )
  .then( (data) => {
      console.log(data);
      let lastElement = data.slice(-1);
      console.log(lastElement);
      lastElement.forEach((dolarhoy) => {
        const content = document.createElement("div")
        content.innerHTML = `
      Hoy ${dolarhoy.d} la cotizacion es de ${dolarhoy.v}
      `;
      dolarbcra.append(content)
    })
  })
  .catch(err=>console.log(err))

//Fetch API Bitcoin
fetch("https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false")
.then( (response) => response.json() )
.then( (data) => {
    console.log(data);
    let lastElement = data.slice(-1);
    console.log(lastElement);
    lastElement.forEach((dolarhoy) => {
      const content2 = document.createElement("div")
      content.innerHTML = `
    <p> Hoy ${dolarhoy.d} la cotizacion es de ${dolarhoy.usd} </p>
    `;
    btc.append(content2)
  })
})
.catch(err=>console.log(err))

//Evento click
btn1.addEventListener('click', showAlert);
btn1.addEventListener('click', callback);
btn1.addEventListener('click', solicitarDato);
compra1.addEventListener('click', showAlert);
compra2.addEventListener('click', showAlert);
compra3.addEventListener('click', showAlert);
//////////

const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment
let carrito = {}
//cargar una vez cargada la pagina
document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})
items.addEventListener('click', e => {

})
//
const fetchData = async() => {
  try {
    const res = await fetch('api.json')
    const data = await res.json()
    pintarCards(data)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

//Fragment Reflow
const pintarCards = data => {
  data.ForEach(producto => {
    templateCard.querySelector('h5').textContent = producto.title
    templateCard.querySelector('p').textContent = producto.precio
    templateCard.querySelector('img').setAttribute("src", producto.thumbnailURL)
    templateCard.querySelector('.btn-primary').dataset.id = producto.id

    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  items.appendChild(fragment)
}

//AgregarCarrito
const addCarrito = e => {
  console.log(e.target)
  console.log(e.target.classList.contains('btn-primary'))
  if (e.target.classList.contains('btn-primary')) {
    setCarrito(e.target.parentElement)

  }
  e.stopPropagation()
}
//pasar a lista 
const setCarrito = objeto => {
  const producto = {
  id: objeto.querySelector('.btn-primary').dataset.id,
  title: objeto.querySelector('h5').textContent,
  precio: objeto.querySelector('p').textContent,
  cantidad: 1
}

if (carrito.hasOwnProperty(producto.id)){
producto.cantidad = carrito[producto.id].cantidad + 1
}
carrito[producto.id] = {...producto}
console.log(carrito)
}
//Carrito
let Ejcarrito = {
  1: { nombre: "item 1"},
  2: { nombre: "item 2"},
};

//guardarCarrito
document.addEventListener('DOMContentLoaded'), () => {
  fetchData()
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    pintarCarrito()
  }
}

//calculadora
let display4 = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case 'C':
        display4.innerText = '';
        break;
      case '←':
        if(display4.innerText){
          display4.innerText = display4.innerText.slice(0, -1);
        }
        break;
      case '=':
          try{
            display4.innerText = eval(display4.innerText);
          } catch {
            display4.innerText = 'Error!';
          }
          
        break;
      default:
        display4.innerText += e.target.innerText;
    }
  });
});
