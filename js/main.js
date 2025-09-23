const pastas = ["Fideos", "Ñoquis", "Ravioles", "Sorrentinos"];
const precios = [4000, 4400, 7500, 8000];


let continuar = true;

while (continuar) {
    let opcionPastas = parseInt(
        prompt("Elija una pasta:\n 1: Fideos   2: Ñoquis   3: Ravioles   4: Sorrentinos   5: Salir")
    );

    switch (opcionPastas) {
        case 1: 
            alert("Elegiste Fideos. El precio es: $4000");
            console.log("Elegiste Fideos. El precio es de:: $4000");
            break;
        case 2: 
            alert("Elegiste Ñoquis. El precio es: $4500");
            console.log("Elegiste Ñoquis. El precio es de: $4500");
            break;
        case 3:
            alert("Elegiste Ravioles. El precio es de: $7500");
            console.log("Elegiste Ravioles. El precio es de: $7500");
            break;
        case 4:
            alert("Elegiste Sorrentinos. El precio es de: $8000");
            console.log("Elegiste Sorrentinos. El precio es de: $8000");
            break;
        case 5:
            alert("Gracias por visitar la fábrica de pastas");
            continuar = false; 
            break;
        default:
            alert("Selecciona una opcion que sea correcta")
    }


    if (continuar) {
        let seguir = prompt("Quiere algo más?  si/no");
        if (seguir === "no") {
            continuar = false;
            alert("Gracias por su compra")
        }
    }
}
