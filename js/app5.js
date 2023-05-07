
/*Cálculo de crédito basado en la fórmula credito*redito*tiempo
redito=tipo de interés
interes a pagar=capital inicial*tasa de interés*tiempo
Tipo de interés base:
menores a 24 meses están al 8%
a 60 meses están al 10%
a partir de 60 meses al 12%
*/

function calcular(x,y) {

    var capital=parseFloat(prompt('Introduce el importe que cumplirá tus sueños:  '));
    var tiempo=parseInt(prompt('Elige en cuánto tiempo (meses) quieres pagarlo comodamente '));
    var redito=0;
    if (tiempo<=24) {
        redito=0.08
        
    } else if (tiempo<=60)
        redito=0.10


        else{
            redito=0.12
        }
        var interes=(capital*redito*(tiempo/12))
        document.getElementById('resultado').innerHTML=
        'Crédito utilizado:  ' + capital + '€' + '<br>' +
        'Tipo de interés  ' + redito*100 +'%' +'<br>' +
        'Tiempo a pagar  ' + tiempo/12 + ' años' +'<br>'+
        'Interés a abonar  ' + interes + '€';
        var cuota=(interes+capital)/tiempo;
        document.getElementById('resultado2').innerHTML='El total de la cuota al mes sería  ' +cuota.toFixed(2) +'€' + '<br>'
        
       
}
//Los ajustes de los decimales tendremos un método .tofixed(n decimales)

function imprimir(x,y) {

    window.print();
    
}