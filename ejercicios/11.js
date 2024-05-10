function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var hoy = new Date(); // Obtenemos la fecha actual

  var añoActual = hoy.getFullYear(); // Obtenemos el año actual--> 2024/05/04
  var mesActual = hoy.getMonth()+1; // Obtenermos el mes actual
  var diaActual = hoy.getDate(); // Obtenermos el dia actual

  var fecha = new Date(fechaNacimiento);// Obtenemos la fecha de nacimiento

  var añoNacimiento = fecha.getFullYear(); // Obtenemos el año de la fecha de nacimiento
  var mesNacimiento = fecha.getMonth()+1; // Obtenemos el mes de la fecha de nacimiento
  var diaNacimiento = fecha.getDate(); // Obtenemos el dia de la fecha de nacimiento

  //Calculamos la edad restando el año actual menos el año de nacimiento, el mes actual menos el mes de nacimiento
     // el dia actual menos el dia de nacimiento
     var delta_año = añoActual - añoNacimiento;
     //console.log(delta_año);

     var delta_mes = mesActual - mesNacimiento;
     //console.log(delta_mes);

     var delta_dia = diaActual - diaNacimiento;
     //console.log(delta_dia)
 if(delta_año === 18) {

        if (delta_mes < 0){

             return true;

        } else if(delta_mes > 0){

            return false;

        } else if((delta_mes === 0) && (delta_dia <= 0)){

            return true;

        } else {

            return false;
        }

     } else if(delta_año > 18){

        
           return true;
    
    } else {
    
        return false;
    }


  
}

module.exports = esMayorDeEdad;