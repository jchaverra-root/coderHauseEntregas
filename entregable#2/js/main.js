var nombreDeportista ;
let pesoMax ;
let repeticiones ;
let numeroEjercicios ;
let nombreEjercicio ;

function registro () {
    nombreDeportista = prompt("Ingresa tu nombre Completo: ");
    numeroEjercicios = parseInt(prompt("Ingresa la cantidad de ejercios a Calcular el RM: ",0));
    alert("Bienvenido "+nombreDeportista+" En el simuladoRM podras calcular tu RM");
}
function ingresarDatos (i) {
    nombreEjercicio = prompt("Ingresa el nombre del Ejercicio#"+i+": ");
    pesoMax = prompt("Ingresa tu Peso Maximo en "+nombreEjercicio+": ");
    repeticiones = prompt("Ingresa tu numero Maximo de Repeticiones en "+nombreEjercicio+": ");
    alert("Datos ingresados para calcular el RM del Ejercicio "+nombreEjercicio+" // Peso Maximo: "+pesoMax+" // Numero de Repeticiones: "+repeticiones);
}
function formula () {
    document.write("<h2 style='text-align: center;'>"+"FORMULA RM"+"</h2>");
    document.write("<h3>"+" RM = pesoMaximo / (1,0278 - 0,0278 x numeroRepeticiones)"+"</h3>");
}
function datos (i) {
    document.write("<h3>"+"RM Ejercicio #"+i+" "+nombreEjercicio+"</h3>");
    document.write("Nombre Deportista: "+nombreDeportista+"<br/>"+"Ejercicio: "+i+"<br/>"+"Peso Maximo: "+pesoMax+"<br/>"+"RM: "+calculoRm (pesoMax,repeticiones).toFixed(2));
}
const calculoRm  = (pesoMax,repeticiones) => {
    const const1 = 1.0278;
    const const2 = 0.0278;
    return pesoMax/( const1 - const2  * (repeticiones));
}
registro ();
formula ();
do {
    alert("Debes Calcular almenos 1 Ejercicio");
    registro ();
} while (numeroEjercicios == 0)
for (let i = 1; i <= numeroEjercicios; i++) {
    ingresarDatos (i);
    datos (i);
    alert(nombreDeportista+" tu RM es: "+ calculoRm (pesoMax,repeticiones).toFixed(2));
    console.log(calculoRm (pesoMax,repeticiones).toFixed(2));  
}
