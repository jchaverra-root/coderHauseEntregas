class Movimiento {
    constructor(movimiento) {
        this.nombre = movimiento.nombreMovimiento;
        this.peso = movimiento.pesoMovimiento;
        this.repeticiones = movimiento.repeticionesMovimiento;
    }
}


//Boton Agregar Movimiento
let boton = document.getElementById("agregarMovimiento");
let form = `
        <h1 class="text-center">Seccion Registrar Movimiento</h1>
        <br>
        <label for=""class="ps-5 pb-2" >Nombre del Movimiento</label>
        <input type="text" name="nombre" id="nombreM" class="form-control" placeholder="Escribe el Nombre del Movimiento" aria-describedby="helpId">
        <br>
        <label for=""class="ps-5 pb-2" >Peso Maximo</label>
        <input type="text" name="pesoMx" id="pesoMx" class="form-control" placeholder="Escribe El peso maximo que levantas" aria-describedby="helpId">
        <br>
        <label for=""class="ps-5 pb-2" >Numero de Repeticiones</label>
        <input type="text" name="repeticionesM" id="repeticionesM" class="form-control" placeholder="Escribe el numero de repeticiones" aria-describedby="helpId">
        <br>
`;
boton.onclick = () => {
    let seccionbtn = document.getElementById("contenidoForm");
    seccionbtn.innerHTML = form;
};
const movimientos = [];
function guardarDatos(e) {
    let nombre = document.getElementById("nombreM").value;
    let peso = document.getElementById("pesoMx").value;
    let repeticiones = document.getElementById("repeticionesM").value;

    const datos = {nombreMovimiento:nombre, pesoMovimiento:peso, repeticionesMovimiento:repeticiones};
    console.log(datos);//Muestro el Objeto Creado
    console.log(nombre);
    const newMovimiento  = new Movimiento(datos);
    console.log(newMovimiento);
    movimientos.push(newMovimiento);
    console.log(movimientos);
    e.preventDefault();
}
//Boton Agregar Movimiento

//Boton submit Form Agregar Movimiento
document.getElementById("formSubmit").addEventListener("click", guardarDatos);
//Boton submit Form Agregar Movimiento

let botonListar = document.getElementById("listaMovimientos");
botonListar.onclick = () => {
    for (const movimiento of movimientos) {
        console.log(movimiento.nombre);
    }
};