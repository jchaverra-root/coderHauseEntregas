let deportistas = [];

class Deportista {
    constructor(deportista) {
        this.nombre = deportista.nombreDeportista;
        this.edad = deportista.edadDeportista;
        this.genero = deportista.generoDeportista;
        this.peso = deportista.pesoDeportista;
        this.altura = deportista.alturaDeportista;
    }
}
function renderFormulario() {
    let formulario = `
        <form id="formAgregarM">
            <h1 class="text-center">Seccion Registrar Deportista</h1>
            <br>
            <div class="d-flex justify-content-around">
                <div class="col-6 p-2">
                    <label for=""class="ps-5 pb-2" >Nombres del deportista</label>
                    <input type="text" name="nombre" id="nombreD" class="form-control" placeholder="Escribe tu Nombre Completo" aria-describedby="helpId" required>
                    <br>
                    <label for=""class="ps-5 pb-2" >Edad del deportista</label>
                    <input type="text" name="edad" id="edadD" class="form-control" placeholder="Escribe tu Edad" aria-describedby="helpId" required>
                    <br>
                    <label for=""class="ps-5 pb-2" >Genero del deportista</label>
                    <input  type="text" name="genero" id="generoD" class="form-control" placeholder="Escribe tu Genero" aria-describedby="helpId" required>
                    <small id="helpId" class="text-muted">Masculino o Femenino</small>
                    <br>
                    <br>
                    <label for=""class="ps-5 pb-2" >Peso del deportista</label>
                    <input type="text" name="peso" id="pesoD" class="form-control" placeholder="Escribe tu peso en kg" aria-describedby="helpId" required>
                    <br>
                    <label for=""class="ps-5 pb-2" >Altura del deportista</label>
                    <input type="text" name="altura" id="alturaD" class="form-control" placeholder="Escribe tu altura en cm" aria-describedby="helpId" required>
                    <br>
                </div>
                <div class="col-6 p-2">
                    <label for=""class="ps-5 pb-2" >Apellidos del deportista</label>
                    <input type="text" name="nombre" id="nombreD" class="form-control" placeholder="Escribe tu Nombre Completo" aria-describedby="helpId" required>
                    <br>
                    <label for=""class="ps-5 pb-2" >Edad del deportista</label>
                    <input type="text" name="edad" id="edadD" class="form-control" placeholder="Escribe tu Edad" aria-describedby="helpId" required>
                    <br>
                    <label for=""class="ps-5 pb-2" >Genero del deportista</label>
                    <input type="text" name="genero" id="generoD" class="form-control" placeholder="Escribe tu Genero" aria-describedby="helpId" required>
                    <small id="helpId" class="text-muted">Masculino o Femenino</small>
                    <br>
                    <br>
                    <label for=""class="ps-5 pb-2" >Peso del deportista</label>
                    <input type="text" name="peso" id="pesoD" class="form-control" placeholder="Escribe tu peso en kg" aria-describedby="helpId" required>
                    <br>
                    <label for=""class="ps-5 pb-2" >Altura del deportista</label>
                    <input type="text" name="altura" id="alturaD" class="form-control" placeholder="Escribe tu altura en cm" aria-describedby="helpId" required>
                    <br>
                </div>
            </div>
            <button id="formSubmit" type="submit" class="btn btn-primary">Enviar</button>
        </form>
    `;
    document.getElementById("perfilDeportista").innerHTML = formulario;
    document
        .getElementById("formSubmit")
        .addEventListener("click", guardarDatos);
    let listaDeportistas = cargarDeportistas();
    // OPERADOR AND
    listaDeportistas.length != 0 && renderTabla();
}

function renderCardPerfil(newDeportista) {
    let card = `
        <div class="card text-left">
            <div class="card-body">
            <h4 class="card-title">${newDeportista.nombre}</h4>
            <p class="card-text"><b>${newDeportista.genero}</b></p>
            <p class="card-text"> ${newDeportista.edad} años / ${newDeportista.peso} kg / ${newDeportista.altura} cm</p>
            </div>
        </div>
        <br>
        <button id="registrarD" type="submit" class="btn btn-primary">Registrar Deportista</button>
        <br><br>
    `;
    document.getElementById("perfilDeportista").innerHTML = card;
    document
        .getElementById("registrarD")
        .addEventListener("click", renderFormulario);
}

function renderTabla() {
    let deportistas = cargarDeportistas();
    let tabla = `
        <h1>Lista de Deportistas</h1>
        <table class="table table-striped table-inverse table-responsive">
            <thead class="thead-inverse">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Edad</th>
                    <th>Peso</th>
                    <th>Altura</th>
                </tr>
                </thead>
                <tbody>
    `;
    for (const deportista of deportistas) {
        tabla += `
        <tr>
            <td scope="row">#</td>
            <td>${deportista.nombre}</td>
            <td>${deportista.genero}</td>
            <td scope="row">${deportista.edad}</td>
            <td>${deportista.peso} Kg</td>
            <td>${deportista.altura} cm</td>
        </tr>
        `;
    }

    tabla += `
    </tbody>
    </table>
    `;
    document.getElementById("tablaDeportistas").innerHTML = tabla;
}

function guardarDatos(e) {
    let nombre = document.getElementById("nombreD").value;
    let edad = document.getElementById("edadD").value;
    let genero = document.getElementById("generoD").value;
    let peso = document.getElementById("pesoD").value;
    let altura = document.getElementById("alturaD").value;

    if (
        // OPERADOR OR
        nombre == "" ||
        edad == "" ||
        genero == "" ||
        peso == "" ||
        altura == ""
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
        // ALIAS ??
        nombreDeportista: nombre,
        edadDeportista: edad,
        generoDeportista: genero,
        pesoDeportista: peso,
        alturaDeportista: altura,
    };
    const newDeportista = new Deportista(datos);
    deportistas.push(newDeportista);
    e.preventDefault();
    guardarDeportista(deportistas);
    document.getElementById("alertForm").innerHTML = "";
    renderCardPerfil(newDeportista);
    renderTabla();
}
function guardarDeportista(deportistas) {
    localStorage.setItem("deportistas", JSON.stringify(deportistas));
}

function cargarDeportistas() {
    return JSON.parse(localStorage.getItem("deportistas")) || [];
}

function renderDeportistasLS() {
    const deportistasLS = cargarDeportistas();
    console.log(deportistasLS);
}
renderFormulario();
