var suma = 0;
var contador = 0;
do {
    var numero = parseInt(prompt('Introduce numeros (SI es Negativo no podras ingresar Mas numeros)',0));
    
    while (isNaN(numero)) {
        alert("Introduce NUMEROS entre 0-9. Los Valores Ingresados: "+num1+" NO es valido");
        numero = parseInt(prompt('Introdusca el Numero 1',0));
    }
    if(numero >= 0){
        // suma = suma + numero;
        document.write("<p>"+"Iteración #"+contador+"</p>");
        document.write("<p>"+"El Numero ingresado es "+numero+"</p>");
        for (let i = 1; i <= 10; i++) {
            document.write(i+" X "+numero+" ="+(i*numero)+"<br/>");
        }
        document.write("<br/>");
        suma += numero;
        contador ++
        
    }
    
    console.log("Iteración #"+contador);
    console.log("El Numero ingresado es "+numero);
    console.log("El resultado de la Suma es = "+suma);
} while (numero >= 0);
document.write("<h1>"+"La suma de todos los numeros es: "+suma+"</h1>");