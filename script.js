// Objetos de préstamos
const prestamo1 = {
    importe: "400000",
    interes: 0.10,
    cuotas: 12
};

const prestamo2 = {
    importe: "600000",
    interes: 0.09,
    cuotas: 18
};

const prestamo3 = {
    importe: "1000000",
    interes: 0.08,
    cuotas: 24
};

// Array de préstamos
const prestamos = [prestamo1, prestamo2, prestamo3];

// Función de búsqueda por importe
function busquedaDePrestamo(importe) {
    return prestamos.find((prestamo) => prestamo.importe == importe);
}

// Función de filtrado de préstamos
function filtrarPrestamos(cantidadCuotas) {
    return prestamos.filter((prestamo) => prestamo.cuotas == cantidadCuotas);
}

// Función principal
function importeSueldo() {
    const importe = prompt("Ingrese el monto del préstamo a solicitar");
    console.log(importe);
    const prestamoEncontrado = busquedaDePrestamo(importe);

    if (prestamoEncontrado) {
        console.log(`Préstamo solicitado:
            Importe: ${prestamoEncontrado.importe}
            Interés: ${prestamoEncontrado.interes}
            Cuotas: ${prestamoEncontrado.cuotas}`);

        alert(`Préstamo solicitado:
            Importe: ${prestamoEncontrado.importe}
            Interés: ${prestamoEncontrado.interes}
            Cuotas: ${prestamoEncontrado.cuotas}`);
    } else {
        console.log("Préstamos disponibles: 400000, 600000 y 1000000");

        const cantidadCuotas = Number(prompt("Ingresa la cantidad de cuotas para saber qué préstamo solicitar"));
        const prestamosFiltrados = filtrarPrestamos(cantidadCuotas);

        if (prestamosFiltrados.length > 0) {
            console.log(`Préstamos disponibles con ${cantidadCuotas} cuotas:
                ${prestamosFiltrados.map((prestamo) => prestamo.importe).join(", ")}`);
        } else {
            console.log(`No hay préstamos disponibles con ${cantidadCuotas} cuotas.`);
            alert ("dispobible solo en 12, 18 y 24 cuotas")
        }
    }
}

// Llamada a la función principal
importeSueldo();