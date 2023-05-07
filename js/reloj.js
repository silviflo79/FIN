var reloj;

var fecha = new Date();

//var hora = fechahora.getHours(); 
//var minuto = fechahora.getMinutes(); 
hora = fecha.getHours();
minutos = fecha.getMinutes();
segundos = fecha.getSeconds();



function reloj() {
  document.getElementById('resultadoreloj').innerHTML = hora +":"+minutos + ":"+segundos

}