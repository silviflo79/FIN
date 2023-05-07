
function presiona(x, y) {

    // Declaramos las variables 

    var fecha = new Date();  //Eje
    var dia = fecha.getDay();  //Secundaria/apoyo
    console.log(dia);
    var respuesta=document.getElementById('resultado5');

    switch (dia) {
        case 1:
            let precio1=9;
         
            
            respuesta.innerHTML=
            'Spaguettis a la carbonara' +"<br>" +'Precio por persona = 9€' +'<br>';

            break;
        case 2:
            respuesta.innerHTML=
            'Libre por Descanso'
            break;
        case 3:
            let precio3=9;
            
            respuesta.innerHTML=
            'Cocido Montañés' + '<br>' + 'Precio por persona= 9€' +'<br>';

            break;
        case 4:
            let precio4=9;
          
            
            respuesta.innerHTML=
            'Caldo y Potaje Gallego'+ '<br>' + 'Precio por persona = 9€' +'<br>';
            break;
        case 5:
            let precio5=9;
            
            
            respuesta.innerHTML=
            'Paella Valenciana'+ '<br>' + 'Precio por persona = 9€' +'<br>' ;
            break;
        case 6:
            let precio6=12;
            
            
            respuesta.innerHTML=
            'Judiones a la Bilbaína'+ '<br>' + 'Precio por persona= 12€' +'<br>'
            break;
        case 7:

        let precio7=16;
            
            
            respuesta.innerHTML=
            'Fabada Asturiana'+ '<br>' + 'Precio por persona = 16' +'<br>' 
            break;

        default:
            respuesta.innerHTML=
            '#Error de conexión'
            break;
    }

}