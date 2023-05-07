


var suma;
var resta;
var multiplicacion;
var division;
var dato1= parseInt( prompt('Escribe el primer número'));
var dato2=parseInt(prompt('Escribe el segundo número'));
function sumar() {
    let resultado =dato1+dato2;
    swal ('El Resultado de la suma es: ' + resultado)
    //swal ('El Resultado de la suma es: ' + (dato1+dato2))
    
}

function multiplicar() {
    let resultado =dato1*dato2;
    swal ('El Resultado de la multiplicación es: ' + resultado)
    
}

function restar() {
    let resultado =dato1-dato2;
    swal ('El Resultado de la Resta es: ' + resultado)
    
}

function dividir() {
    let resultado =dato1/dato2;
    swal ('El Resultado de la división es: ' + resultado)
}
