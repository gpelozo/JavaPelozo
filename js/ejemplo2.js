let nombreIngresado = prompt("Ingresar Nombre");
let apellidoIngresado = prompt("Ingresar Apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: " + nombreIngresado + "Apellido:" + apellidoIngresado);
}
//                        AND 
else{
    alert("Error: Ingresar nombre y apellido")
}