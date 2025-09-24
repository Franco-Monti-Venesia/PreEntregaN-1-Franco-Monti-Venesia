const pastas = ["Fideos", "Ñoquis", "Ravioles", "Sorrentinos"];
const precios = [4000, 4400, 7500, 8000];


function elegirPasta() {
    return parseInt(
        prompt("Que tipo de pasta quiere?\n 1: Fideos   2: Ñoquis   3: Ravioles   4: Sorrentinos   5: Salir")
    );
}


function obtenerPrecio(opcion) {
    let mensaje = "";
    switch (opcion) {
        case 1:
            mensaje = "Elegiste Fideos. El precio es 4000";
            break;
        case 2:
            mensaje = "Elegiste Ñoquis. El precio es 4400";
            break;
        case 3:
            mensaje = "Elegiste Ravioles. El precio es 7500";
            break;
        case 4:
            mensaje = "Elegiste Sorrentinos. El precio es 8000";
            break;
        case 5:
            mensaje = "Gracias por visitar la fábrica de pastas";
            break;
        default:
            mensaje = "Selecciona una opción correcta";
    }
    return mensaje;
}


function mostrarResultado(mensaje) {
    alert(mensaje);
    console.log(mensaje);
}


let continuar = true;

while (continuar) {
    let opcionPastas = elegirPasta();
    let mensaje = obtenerPrecio(opcionPastas);
    mostrarResultado(mensaje);

    if (opcionPastas === 5) {
        continuar = false;
    } else {
        let seguir = prompt("¿Quiere algo más? si/no");
        if (seguir === "no") {
            continuar = false;
            alert("Gracias por su compra");
        }
    }
}