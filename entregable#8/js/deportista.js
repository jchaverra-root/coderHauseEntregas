let deportistas = [];
let departanmentoS = "";
class Deportista {
    constructor(deportista) {
        this.nombre = deportista.nombreDeportista;
        this.apellido = deportista.apellidoDeportista;
        this.edad = deportista.edadDeportista;
        this.genero = deportista.generoDeportista;
        this.departamento = deportista.departamentoDeportista;
        this.municipio = deportista.municipioDeportista;
        this.peso = deportista.pesoDeportista;
        this.altura = deportista.alturaDeportista;
        this.telefono = deportista.telefonoDeportista;
        this.direccion = deportista.direccionDeportista;
        this.correo = deportista.correoDeportista;
    }
}
function renderFormulario(e) {
    let formulario = `
    <form id="formAgregarM">
    <h1 class="text-center">Seccion Registrar Deportista</h1>
    <br>
    <div class="d-sm-flex justify-content-around">
        <div class="col-sm-6 p-2">
            <div class="d-md-flex justify-content-between">
                <div class="pe-1 col-md-6">
                    <label for=""class="">Nombres</label>
                    <input type="text" name="nombre" id="nombreD" class="form-control" placeholder="Escribe tu Nombre Completo" aria-describedby="helpId" required>
                    <br>
                </div>
                <div class="pe-1 col-md-6">
                    <label for=""class="" >Apellidos</label>
                    <input type="text" name="apellido" id="apellidoD" class="form-control" placeholder="Escribe tu Apellido Completo" aria-describedby="helpId" required>
                    <br>
                </div>
            </div>
            <div class="d-md-flex justify-content-between">
                <div class="pe-1 col-md-6">
                    <label for=""class="" >Edad</label>
                    <input type="text" name="edad" id="edadD" class="form-control" placeholder="Escribe tu Edad" aria-describedby="helpId" required>
                    <br>
                </div>
                <div class="pe-1 col-md-6">
                    <label for=""class="" >Genero</label>
                    <input type="text" name="genero" id="generoD" class="form-control" placeholder="Escribe tu peso en kg" aria-describedby="helpId" required>
                    <small id="helpId" class="text-muted">Masculino o Femenino</small>
                    <br>
                </div>
            </div>
            <div class="d-md-flex justify-content-between">
                <div class="pe-1 col-md-6">
                    <label for="departamentos" class="" >Lugar de Nacimiento</label>
                    <select name="departamentos" id="selectDepartamentos" class="form-select">
                        <option value="">Elejir un Departamento</option>
                    </select>
                </div>
                <div class="pe-1 col-md-6">
                    <br>
                    <select name="municipios" id="selectMunicipios" class="form-select">
                        <option value="">Elejir un Municipio</option>
                    </select>
                </div>
            </div>
            <div class="d-md-flex justify-content-between">
                <div class="pe-1 col-md-6">
                    <label for=""class="" >Peso</label>
                    <input type="text" name="peso" id="pesoD" class="form-control" placeholder="Escribe tu peso en kg" aria-describedby="helpId" required>
                    <br>
                </div>
                <div class="pe-1 col-md-6">
                    <label for=""class="" >Altura</label>
                    <input type="text" name="altura" id="alturaD" class="form-control" placeholder="Escribe tu altura en cm" aria-describedby="helpId" required>
                <br>
                </div>
            </div>
        </div>
        <div class="col-sm-6 p-2">
            <label for=""class="" >Telefono</label>
            <input type="text" name="telefono" id="telefonoD" class="form-control" placeholder="Escribe tu numero de Telefono" aria-describedby="helpId" required>
            <br>
            <label for=""class="" >Direccion</label>
            <input type="text" name="direccion" id="direccionD" class="form-control" placeholder="Escribe tu direccion" aria-describedby="helpId" required>
            <br>
            <label for=""class="" >Correo</label>
            <input type="email" name="correo" id="correoD" class="form-control" placeholder="Escribe tu correo electronico" aria-describedby="helpId" required>
            <br>
        </div>
    </div>
    <button id="formSubmit" type="submit" class="btn btn-primary">Enviar</button>
</form>
    `;
    document.getElementById("perfilDeportista").innerHTML = formulario;
    document.getElementById("formSubmit").addEventListener("click", guardarDatos,cargarDepartamento);
    let listaDeportistas = cargarDeportistas();
    // OPERADOR LOGICO AND
    // if (listaDeportistas.length != 0) {
    //     renderTabla();
    // }
    listaDeportistas.length != 0 && renderTabla();
    document.getElementById("selectDepartamentos").addEventListener("change", e => {
        let casa = "";
        let municipioS = [];
        casa = e.target.value;
        console.log(casa);
        fetch("js/colombia.json")
        .then((respuesta) =>  respuesta.json())
        .then((datos) => {
            for (let index = 0; index < datos.length; index++) {
                if (datos[index].departamento == casa) {
                    // console.log(datos[index].ciudades);
                    municipioS.splice(0,municipioS.length);
                    municipioS.push(datos[index].ciudades);
                }
            }
            // console.log(municipioS);
            selectMunicipios.innerHTML = "";
            municipioS.forEach(valor => {
                for (let index = 0; index < valor.length; index++) {
                    // console.log(valor[index]);
                    selectMunicipios.innerHTML += `<option value="${valor[index]}">${valor[index]}</option>`;
                }
            });
        })
    });
}
function renderCardPerfil(newDeportista) {
    let card = "";
    card += `
        <br>
        <div class="card">
            <div class="d-md-flex">
                <div class="card-body text-left col-md-6">
                    <h4 class="card-title">${newDeportista.nombre}</h4>
                    <p class="card-text"><b>${newDeportista.genero}</b></p>
                    <p class="card-text"> ${newDeportista.edad} años / ${newDeportista.peso} kg / ${newDeportista.altura} cm</p>
                    <p class="card-text"> ${newDeportista.departamento}  / ${newDeportista.municipio}</p>
                    <p class="card-text"> ${newDeportista.telefono} años / ${newDeportista.direccion} kg / ${newDeportista.correo} cm</p>
                </div>
                <div class="card-body m-auto col-md-6">
                    <h4 class="card-title">Nuevo Deportista Registrado !</h4>
                </div>
            </div>
        </div>
        <br>
    `;
    document.getElementById("cardPerfil").innerHTML = card;
}

function renderTabla() {
    let deportistas = cargarDeportistas();
    let tabla = `
        <h1>Lista de Deportistas</h1>
        <table id="example" class="table table-striped table-inverse table-responsive">
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
    let apellido = document.getElementById("apellidoD").value;
    let edad = document.getElementById("edadD").value;
    let genero = document.getElementById("generoD").value;
    let departamento = document.getElementById("selectDepartamentos").value;
    let municipio = document.getElementById("selectMunicipios").value;
    let peso = document.getElementById("pesoD").value;
    let altura = document.getElementById("alturaD").value;
    let telefono = document.getElementById("telefonoD").value;
    let direccion = document.getElementById("direccionD").value;
    let correo = document.getElementById("correoD").value;

    if (
        nombre == "" ||
        apellido == "" ||
        edad == "" ||
        genero == "" ||
        peso == "" ||
        altura == "" ||
        telefono == "" ||
        direccion == "" ||
        correo == ""
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
        nombreDeportista: nombre,
        apellidoDeportista: apellido,
        edadDeportista: edad,
        generoDeportista: genero,
        departamentoDeportista: departamento,
        municipioDeportista: municipio,
        pesoDeportista: peso,
        alturaDeportista: altura,
        telefonoDeportista: telefono,
        direccionDeportista: direccion,
        correoDeportista: correo,
    };
    const newDeportista = new Deportista(datos);
    deportistas.push(newDeportista);
    e.preventDefault();
    document.getElementById("alertForm").innerHTML = "";
    alertForm(deportistas,newDeportista);
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
function alertForm(deportistas,newDeportista) {
    Swal.fire({
        title: "¿Quieres Guardar Los Cambios?",
        showDenyButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No Guardar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            guardarDeportista(deportistas);
            Swal.fire("Guardado!", "", "success");
            renderDeportistasLS();
            renderFormulario();
            renderTabla();
            renderCardPerfil(newDeportista);
            // quitarCardPerfil();
        } else if (result.isDenied) {
            Swal.fire("Cambios No Guardados", "", "info");
            renderFormulario();
            renderTabla();
        }
    });
}
// function quitarCardPerfil() {
//     setTimeout(() => {
//         let card = ``;
//     document.getElementById("cardPerfil").innerHTML = card;
//     }, 15000);
// }

//Cargar Departamentos
function cargarDepartamento() {
    fetch("js/colombia.json")
    .then((respuesta) =>  respuesta.json())
    .then((datos) => {
        datos.forEach(valor => {
            let option1 = document.createElement("option");
            option1.innerHTML = `<option id="optionDepartamento${valor.id}" value="${valor.departamento}">${valor.departamento}</option>`;
            selectDepartamentos.appendChild(option1);
        });
        /* document.getElementById("selectDepartamentos"),innerHTML = $options; */
    });
}
function renderCards(newDeportista) {
    let card = "";
    card += `
        <br>
        <div class="card">
            <div class="d-md-flex">
                <div class="card-body text-left col-md-6">
                    <h4 class="card-title">${newDeportista.nombre}</h4>
                    <p class="card-text"><b>${newDeportista.genero}</b></p>
                    <p class="card-text"> ${newDeportista.edad} años / ${newDeportista.peso} kg / ${newDeportista.altura} cm</p>
                </div>
                <div class="card-body m-auto col-md-6">
                    <h4 class="card-title">Nuevo Deportista Registrado !</h4>
                </div>
            </div>
        </div>
        <br>
    `;
    document.getElementById("tablaDeportistas").innerHTML = card;
}
function btnTabla() {
    document.getElementById("btn-tabla").addEventListener("click", renderTabla)
}
function btnCards() {
    document.getElementById("btn-cards").addEventListener("click", renderCards)
}

//Carga Funciones al Cargar la Pagina (Fomulario Registro Deportista)
document.addEventListener("DOMContentLoaded",renderFormulario(),cargarDepartamento(),btnTabla(),btnCards());
// Data Table Lista deeportistas
$(document).ready(function () {
    $('#example').DataTable();
});