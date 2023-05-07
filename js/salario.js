
sueldo =parseInt( prompt("Introduzca salario antigüo", ' '));
subida = parseInt(prompt('Introduzca el porcentaje de subida',' '));
function subidasueldo(x, y) {
    
   // let resultado =dato1+dato2;
    //swal ('El Resultado de la suma es: ' + resultado)
   let sueldonuevo=(sueldo*subida/100)+sueldo;
    //respuesta7=document.getElementById('sueldonuevo');
    swal ("Su sueldo mensual para este año será: " + sueldonuevo);

}

/*usuario=prompt('Introduzca su usuario de acceso', '  ');
    contraseña=prompt('Introduzca la contraseña','  ');
    //validez=validarconectar(usuario,contraseña)
   var usuario="silvia";
   var contraseña="prueba";
   validez=usuario+contraseña;*/