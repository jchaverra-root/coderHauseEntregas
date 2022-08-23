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
    let formulario =`
        <form id="formAgregarM">
            <h1 class="text-center">Seccion Registrar Movimiento</h1>
            <br>
            <label for=""class="ps-5 pb-2" >Nombre del deportista</label>
            <input type="text" name="nombre" id="nombreD" class="form-control" placeholder="Escribe tu Nombre Completo" aria-describedby="helpId">
            <br>
            <label for=""class="ps-5 pb-2" >Edad del deportista</label>
            <input type="text" name="edad" id="edadD" class="form-control" placeholder="Escribe tu Edad" aria-describedby="helpId">
            <br>
            <label for=""class="ps-5 pb-2" >Genero del deportista</label>
            <input type="text" name="genero" id="generoD" class="form-control" placeholder="Escribe tu Genero" aria-describedby="helpId">
            <small id="helpId" class="text-muted">Masculino o Femenino</small>
            <br>
            <br>
            <label for=""class="ps-5 pb-2" >Peso del deportista</label>
            <input type="text" name="peso" id="pesoD" class="form-control" placeholder="Escribe tu peso en kg" aria-describedby="helpId">
            <br>
            <label for=""class="ps-5 pb-2" >Altura del deportista</label>
            <input type="text" name="altura" id="alturaD" class="form-control" placeholder="Escribe tu altura en cm" aria-describedby="helpId">
            <br>
            <button id="formSubmit" type="submit" class="btn btn-primary">Enviar</button>
        </form>
    `;
    document.getElementById("perfilDeportista").innerHTML = formulario;
    guardarForm();
    renderTabla();
}

function renderCardPerfil(newDeportista) {
    let card =`
        <div class="card text-left">
            <div class="card-body">
            <h4 class="card-title">${newDeportista.nombre}</h4>
            <p class="card-text"><b>${newDeportista.genero}</b></p>
            <p class="card-text"> ${newDeportista.edad} años / ${newDeportista.peso} kg / ${newDeportista.altura} cm</p>
            </div>
        </div>
        <button id="registrarD" type="submit">Registrar Deportista</button>
    `;
    document.getElementById("perfilDeportista").innerHTML = card;
    document.getElementById("registrarD").addEventListener("click", renderFormulario);
}
function renderTabla() {
    let tabla =`
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
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
        </table>
    `;
    document.getElementById("tablaDeportistas").innerHTML = tabla;

}
let deportistas = [];
function guardarDatos(e) {
    let nombre = document.getElementById("nombreD").value;
    let edad = document.getElementById("edadD").value;
    let genero = document.getElementById("generoD").value;
    let peso = document.getElementById("pesoD").value;
    let altura = document.getElementById("alturaD").value;

    const datos = {nombreDeportista:nombre, edadDeportista:edad, generoDeportista:genero, pesoDeportista:peso, alturaDeportista:altura};
    const newDeportista  = new Deportista(datos);
    console.log(newDeportista);
    deportistas.push(newDeportista);
    console.log(deportistas);
    e.preventDefault();
    renderCardPerfil(newDeportista);
    renderTabla();
}



//Boton Agregar Movimiento

//Boton submit Form Agregar Movimiento
function guardarForm() {
    document.getElementById("formSubmit").addEventListener("click", guardarDatos);
}
//Boton submit Form Agregar Movimiento
renderFormulario();
guardarForm();