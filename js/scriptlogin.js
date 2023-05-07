function conectar(x,y) {
    //1º Declaración de Variables
    
    //2ºRecogida de Datos
    usuario=prompt('Introduzca su usuario de acceso', '  ');
    contraseña=prompt('Introduzca la contraseña','  ');
    //validez=validarconectar(usuario,contraseña)
   var usuario;
   var contraseña;
   validez=usuario+contraseña;
    
   

   if (usuario=="silvia"&contraseña=="prueba") {
    alert('Conexión válida');
    
    
   } else {
    
    alert('Usuario o Contraseña no válida');
   }

}function calculo(n,n2) {
    var inputNumero=parseInt(numero.value);
    //var numero=inputNumero.value;
    var contenedor=' ';
for(var i=1;i<=12;i++){
   // document.write(i)

    contenedor +=inputNumero + 'x' + i + '='+inputNumero*i +'<br>'
 

}
document.getElementById('resultado9').innerHTML=contenedor;
}


