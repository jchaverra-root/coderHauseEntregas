/* let cardDeportista;
let cardTitleDeportista;
let pesoDeportista;
let tituloDeportista;
class Deportista {
    constructor(nombre, edad, genero,peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.peso = peso;
    }
    bienvenida () {
    alert("Bienvenido "+this.nombre+" En el simuladoRM podras calcular tu RM "+"\n"+"Tus Datos son:"+"\n"+"Edad: "+this.edad+"\n"+"Genero: "+this.genero+"\n"+"Peso: "+this.peso);
    }
    // datos () {
    //     document.write("<h3>Datos Deportista</h3>");
    //     document.write("Nombre: "+this.nombre+"<br/>"+"Peso :"+this.peso+"<br/>"+"Edad: "+this.edad+"<br/>"+"Genero: "+this.genero);
    // }
    
    datos(tituloDeportista,pesoDeportista) {
        tituloDeportista = document.createElement("h3");
        pesoDeportista = document.createElement("h4");
        tituloDeportista.innerHTML = `<h3>Datos Deportista: ${this.nombre} </h3>`;
        pesoDeportista.innerHTML = `<h4>Peso: ${this.peso} </h4>`;
        document.body.append(tituloDeportista,pesoDeportista);
    }
    card_deportista(cardTitleDeportista,cardDeportista) {
        cardTitleDeportista = document.getElementById("cardBody");
        cardDeportista = document.getElementById("card");
        cardTitleDeportista.innerHTML = `
            <h5 class="card-title">Datos Deportista - ${this.nombre} </h5>
            <p class="card-text">Peso : ${this.peso}</p>
            <p class="card-text">Edad : ${this.edad}</p>
            <p class="card-text">Genero : ${this.genero}</p>
        `;
        if (this.genero == "masculino" || this.genero == "masc") {
            cardDeportista.className = "card px-3 mx-2 bg-primary bg-gradient";
        } else if (this.genero == "femenino" || this.genero == "fem") {
            cardDeportista.className = "card px-3 mx-2 bg-warning bg-gradient";
        } 
    }
}
class Movimiento {
    constructor(nombre, pesoMax, repeticiones, rm) {
        this.nombre = nombre;
        this.pesoMax = pesoMax;
        this.repeticiones = repeticiones;
        this.rm = rm;
        
    }
    detallesMovimiento () {
        alert("El Movimiento a calcular tu RM es: "+this.nombre+"\n"+"El Peso Maximo registrado: "+this.pesoMax+"\n"+"Numero de Repeticiones: "+this.repeticiones);
    }
    calculoRm () {      
        return this.rm =  (this.pesoMax/( 1.0278 - 0.0278  * (this.repeticiones))).toFixed(2);
    }
    detallesRm () {
        alert("El RM para el Movimiento "+this.nombre+" es: "+this.rm);
    }
    datosEjercicio (i) {
        document.write("<h3>"+"RM Ejercicio #"+i+" "+this.nombre+"</h3>");
        document.write("Ejercicio: "+i+"<br/>"+"Peso Maximo: "+this.pesoMax+"<br/>"+"RM: "+this.rm);
    }
}
let numeroEjercicios;
function numeroejercicios () {
    numeroEjercicios = parseInt(prompt("Ingresa la cantidad de ejercios a Calcular el RM: ",0));
}
let numOpcion;
function opcion () {
    numOpcion = parseInt(prompt("1. Registrar Ejercicios"+"\n"+"2. Elminar Ejercicio"+"\n"+"3. Buscar Ejercicio"+"\n"+"4. Mostrar Ejercicios"+"\n"+"Su opcion Es: ",0));
}
var titulo;
function title(titulo) {
    document.title = titulo;
}
let parrafo;
function parrafo1(parrafo) {
    parrafo = document.createElement("p");
    parrafo.innerHTML = "<b>Entregable#3</b> - Simulador Interactivo (DOM) - <b>Johan Chaverra</b>";
    document.body.prepend(parrafo);
}
parrafo1(parrafo);
const newDeportista = new Deportista (prompt("Ingresa tu nombre Completo: "),parseInt(prompt("Ingresa tu Edad: ")),prompt("Femenino = femenino / fem "+"\n"+"Masculino = masculino / masc "+"\n"+"Ingresa tu Genero: "),parseFloat(prompt("Ingresa tu Peso: ")));
console.log(newDeportista);
newDeportista.bienvenida();
newDeportista.card_deportista(cardTitleDeportista,cardDeportista);
do {
    numeroejercicios ();
    if (numeroEjercicios == 0) {
        alert("Debes Calcular almenos 1 Ejercicio");
    }
    
} while (numeroEjercicios == 0)
const movimientos = [];
for (let i = 1; i <= numeroEjercicios; i++) {
    const newMovimiento = new Movimiento (prompt("Ingresa el nombre del Movimiento: "),parseFloat(prompt("Ingresa Peso Maximo: ")),parseInt(prompt("Ingresa numero de Repeticiones: ")));
    console.log(newMovimiento);
    newMovimiento.detallesMovimiento();
    newMovimiento.calculoRm();
    newMovimiento.detallesRm(); 
    movimientos.push(newMovimiento);
    // newMovimiento.datosEjercicio (i); 
}
console.log(movimientos);
opcion();
switch (numOpcion) {x
    case 1:
        var titulo = "Ingresar Movimiento - simuladorRM";
        title(titulo);
        numeroejercicios ();
        console.log(numeroEjercicios);
        for (let i = 1; i <= numeroEjercicios; i++) {
            const newMovimiento = new Movimiento (prompt("Ingresa el nombre del Movimiento: "),parseFloat(prompt("Ingresa Peso Maximo: ")),parseInt(prompt("Ingresa numero de Repeticiones: ")));
            movimientos.push(newMovimiento);
        }
        break;
    case 2:
        var titulo = "Eliminar Movimiento - simuladorRM";
        title(titulo);
        let pos = parseInt(prompt("Ingresa el numero del Ejercicio que quieres eliminar: "));
        pos -= 1; //Busco la posición donde está el Producto en mi Carrito
        movimientos.splice(pos, 1);
        console.log("Movimiento Eliminado!");
        console.log(movimientos);
        break;
    case 3:
        var titulo = "Buscar Movimiento - simuladorRM";
        title(titulo);
        let buscar = prompt("Ingresa el nombre del Ejercicio que quieres Buscar: ");
        let ejercicioBusqueda = movimientos.find((valor)=> valor.nombre === buscar);
        document.write("<h3>"+"RM Ejercicio Buscado "+ejercicioBusqueda.nombre+"</h3>");
        document.write("Ejercicio: "+ejercicioBusqueda.nombre+"<br/>"+"Peso Maximo: "+ejercicioBusqueda.pesoMax+"<br/>"+"RM: "+ejercicioBusqueda.rm);
        break;
    case 4:
        var titulo = "Lista de Movimiento - simuladorRM";
        title(titulo);
        let contador = 0;
        for (const movimiento of movimientos) {
            contador += 1;
            document.write("<h3>"+"RM Ejercicio #"+contador+" "+movimiento.nombre+"</h3>");
            document.write("Ejercicio: "+contador+"<br/>"+"Peso Maximo: "+movimiento.pesoMax+"<br/>"+"RM: "+movimiento.rm);
            console.log(movimiento);
        }
        break;
    default:
        var titulo = "Inicio - simuladorRM";
        title(titulo);
        break;
}
console.log(movimientos); */
document.addEventListener("keydown", (e) => {
    console.log(e.type);
    console.log(e.code);
    console.log(e);
    if (e.code == "Enter") {
        window.location.href = 'http://127.0.0.1:5500/inicio.html';
    }
});
