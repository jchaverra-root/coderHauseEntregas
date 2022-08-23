let movimientos = [];
class Movimiento {
    constructor(movimiento) {
        this.nombre = movimiento.nombreMovimiento;
        this.tipo = movimiento.apellidoMovimiento;
        this.rm = movimiento.rmMovimiento;
        this.calentamiento = movimiento.calentamientoMovimiento;
    }
}
function renderFormulario() {
    let formulario = `
    <form id="formAgregarM">
    <h1 class="text-center">Seccion Registrar Movimiento</h1>
    <br>
    <div class="">
        <div class="p-2">
            <label for=""class="" >Nombre</label>
            <input type="text" name="nombre" id="nombreM" class="form-control" placeholder="Escribe el nombre del Movimiento" aria-describedby="helpId" required>
            <br>
            <label for=""class="" >Tipo</label>
            <select name="tipo" id="tipoM" class="form-select" aria-label="Default select example">
                <option value="1" selected>Tipo de Ejercicio ...</option>
                <option value="Gimnasticos">Gimnásticos</option>
                <option value="Metabolico">Metabólico</option>
                <option value="Levantamiento">Levantamiento </option>
                <option value="Barra">Barra</option>
                <option value="Discos">Discos</option>
                <option value="Mancuernas">Mancuernas</option>
            </select>
            <br>
            <div class="pe-5">
                <label for=""class="" >RM</label>
                <div class="d-flex">
                    <div class="form-check pe-5">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Si">
                        <label class="form-check-label" for="flexRadioDefault1">
                        Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="No" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                        No
                        </label>
                    </div>
                </div>
            </div>
            <br>
            <div class="">
            <label for=""class="" >Calentamiento</label>
            <div class="d-flex">
                <div class="form-check pe-5">
                    <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" value="Si">
                    <label class="form-check-label" for="flexRadioDefault3">
                    Si
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" value="No" checked>
                    <label class="form-check-label" for="flexRadioDefault4">
                    No
                    </label>
                </div>
            </div>
        </div>
    </div>
    <button id="formSubmit" type="submit" class="btn btn-primary">Enviar</button>
</form>
    `;
    document.getElementById("formMovimientos").innerHTML = formulario;
    document
        .getElementById("formSubmit")
        .addEventListener("click", guardarDatos);
/*    let listaDeportistas = cargarDeportistas();
    // OPERADOR LOGICO AND
    // if (listaDeportistas.length != 0) {
    //     renderTabla();
    // }
    listaDeportistas.length != 0 && renderTabla(); */
}
function guardarDatos(e) {
    let nombre = document.getElementById("nombreM").value;
    let tipo = document.getElementById("tipoM").value;
    let rm = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    let calentamiento = document.querySelector('input[name="flexRadioDefault2"]:checked').value;

    if (
        nombre == ""
    ) {
        let alertCampos = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Error!! <strong>Todos Los Campos son Requeridos</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        document.getElementById("alertForm").innerHTML = alertCampos;
        return false;
    }
    const datos = {
        nombreMovimiento: nombre,
        apellidoMovimiento: tipo,
        rmMovimiento: rm,
        calentamientoMovimiento: calentamiento,
    };
    const newMovimiento = new Movimiento(datos);
    console.log(newMovimiento);
    if (newMovimiento.tipo === "1") {
        alerTipoM();
        e.preventDefault();
    } else {
        movimientos.push(newMovimiento);
        e.preventDefault();
        document.getElementById("alertForm").innerHTML = "";
        renderFormulario();
        renderCards(movimientos);
        console.log(movimientos);
    }
}
function alerTipoM() {
    let alertCampos = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
    Error!! <strong>Escoje un Elemento de la Lista Tipo de Movimient</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    document.getElementById("alertForm").innerHTML = alertCampos;
}
function renderCards(movimientos) {
    let contenido ="";
    var movimientosGimnasticos = [];
    var movimientosMetabolico = [];
    var movimientosLevantamiento = [];
    var movimientosBarra = [];
    var movimientosDiscos = [];
    var movimientosMancuernas = [];
    movimientos.forEach(movimiento => {
        contenido += `
            <br><br>
            <div id="cardTipo" class="card border-dark rounded mb-3 mx-3 col-auto">
                <div class="card-header bg-transparent border-dark">${movimiento.nombre}</div>
                <div class="card-body">
                    <h5 class="card-title">${movimiento.tipo}</h5>
                    <ul>
                    <li>RM: ${movimiento.rm}</li>
                    <li>Calentamiento: ${movimiento.calentamiento}</li>
                    </ul>
                </div>
            </div>
        `;
        cardDinamico(movimiento);
        switch (movimiento.tipo) {
            case "Gimnasticos":
                movimientosGimnasticos.push(movimiento);
                console.log(movimientosGimnasticos);
                break;
                case "Metabolico":
                    movimientosMetabolico.push(movimiento);
                    console.log(movimientosMetabolico);
                break;
            case "Levantamiento":
                movimientosLevantamiento.push(movimiento);
                console.log(movimientosLevantamiento);
                break;
                case "Barra":
                    movimientosBarra.push(movimiento);
                    console.log(movimientosBarra);
                break;
            case "Discos":
                movimientosDiscos.push(movimiento);
                console.log(movimientosDiscos);
                break;
                case "Mancuernas":
                    movimientosMancuernas.push(movimiento);
                    console.log(movimientosMancuernas);
                    break;
                    default:
                        alerTipoM();
                        break;
                    }
                });
    document.getElementById("cardsMovimientos").innerHTML = contenido;
}
function cardDinamico(movimiento) {
    if (movimiento.tipo == "Gimnasticos") {
        document.getElementById("cardTipo").className = "card border-danger mb-3 mx-3";
    }
}
/* function renderTituloCard() {
    const para = document.createElement("h3");
    para.innerHTML = "Movimientos CreateElement";
    document.getElementById("movimientos").prepend(para);
}
movimientos.length != 0 && renderTituloCard(); */
renderFormulario();