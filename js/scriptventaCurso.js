//1º Declaracion de variables
var contador =0
var prenda1 =179.99
var gusta=0;
//2 Variables secundaria
var total =0;
var total2=0;
var contador2=0;

function agregar(){
sumaClick(++contador)//++ operador asignacion 

venta();

}

function venta(x,y) {
   var total = (contador*prenda1) 
   document.getElementById('resultado').innerHTML= 'El precio es: ' + total + '€'
}

function sumaClick(contador) {
    document.getElementById('nºClicks').innerHTML =(contador)
}


function borrar() {
     contador=0;
    total =0;
    
    document.getElementById('resultado').innerHTML = 'total: ' + contador
    document.getElementById('nºClicks').innerHTML = total;
   
}
function cambioPagina() {
    document.getElementById('boton').href='ventaCurso.html'

}


function venta(x,y) {
    var total = (contador*prenda1) 
    document.getElementById('resultado').innerHTML= 'El precio es: ' + total + '€'
 }
 
 function sumaClick(contador) {
     document.getElementById('nºClicks').innerHTML =(contador)
 }
 
 function agregar2(){
    sumaClick(++gusta)
    
    like();
 }

 function like(x,y) {
    var total2 = (gusta+1);
    document.getElementById('resultado2').innerHTML= 'Números de Gusta totales - No me gusta:  ' + total2 
 }
 
 function sumaClick(gusta) {
    document.getElementById('nºClicks').innerHTML =(contador)
}
function restar(){
    sumaClick(--gusta)
    
    like();
 }
 var email = 'Correo'

swal ({
    title:'Correo '+ email,
    text:'Dirección',
    icon:'warning',
    button: 'Mi email es'

});
function login() {
    

document.write('<h2>Acceso Logrado</h2') + email


}
email=document.getElementById('email').value;
document.getElementById('resultado3').innerHTML='Autorizo a :' + email + ''

function agregar4(){
    sumaClick(++subscribir)
    
    escribir();
    
    }

    function cambioPagina2() {
        document.getElementById('boton1').href="ejercicio5-AppWeb.html"
    
    }

    function cambioPagina3() {
        document.getElementById('boton3').href="calculadora.html"
    
    }