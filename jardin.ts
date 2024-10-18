/*El jardín infantil necesita un programa para poder asignar cursos a las aulas
•
Se cuentan con tres aulas: Azul, Verde y Amarilla
•
Cada aula cuenta con una capacidad diferente (es decir, un número de bancos)
•
La aula Azul tiene 40 bancos, la Verde35 y la Amarilla 30
•
Dado un número de infantes ingresado por el usuario, el programa deberá determinar el aula que minimice la cantidad de bancos vacíos
•
La salida del algoritmo es el color que identifica al aula asignada*/

import * as rs from "readline-sync";

let infantes: number= rs.questionInt("Ingrese la cantidad de infantes: ");
let salaAmarilla: number= 30;
let salaVerde: number= 35;
let salaAzul: number= 40;
let sala: string= "La sala correspondiente es: ";

if (infantes <=salaAmarilla) {
   sala+=  "Sala Amarilla";
}else if(infantes <=salaVerde){
sala+= "Sala Verde";
}else if(infantes <=salaAzul)
 sala+= "Sala Azul";{
  } if (infantes >salaAzul)
   sala+= "No hay sala disponible;"
   
 

console.log(sala);


