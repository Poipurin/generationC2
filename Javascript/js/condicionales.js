
//condicionales
/* la sentencia if 
    Validar o comprobar algo para tomar alguna decisión 
    **si la condición es verdadera ingresará al if
    Estructura (sin punto y coma en js)
    
    condición == true
    if(condición){

        //dentro del if

    }
 
*/
/*  var edad= parseInt(prompt("Ingresa tu edad",0)); //parseInt, número a entero

 if(edad >= 18){//true
     console.log("Es mayor de edad");

 }

 if (edad < 18){
     console.log("Es menor de edad");

 }
 console.clear(); */
//else
/*  if(edad >= 18){
     console.log("Es mayor de edad");
 } else{
     console.log("Es menor de edad");

 }
 console.log("*****************************")
 //alternativa
 if(edad < 18){
     console.log("Es menor de edad");
 } else{
     console.log("Es mayor de edad"); 

 }*/

/*validar si número es mayor a 10 y menor a 20*/

//var numero = parseInt(prompt ("ingresa un número",0));

//conectores &&(y) es inclusivo, ||(o) es exclusivo;  lógica proporcional.
//numero < 10; numero >10 ; numero <20; numero >20;
//numero =10; numero=20;

// 1 (infinito) 2
/*  if((numero>10) && numero<20){

     console.log("el numero está en el rango solicitado");

 } else {

     console.log("el numero no está en el rango solicitado");

 } */

//validar si un número es mayor o menor o igual a cero.

var numeroAValidar = parseInt(prompt("ingresa un nuevo número", 0));
//= es para asignar, == es para decir que es igual a

if (numeroAValidar == 0) {
    console.log("El número es igual a cero");


} else if (numeroAValidar > 0) {
    console.log("El número es mayor a cero");

} else {
    console.log("El número es negativo");

}
