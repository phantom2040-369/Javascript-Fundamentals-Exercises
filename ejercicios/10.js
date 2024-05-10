function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (fecha instanceof Date && !isNaN(fecha)) { 
    /* Existe la posibilidad que fecha sea de tipo objeto Date y en consecuencia que resulte un valor numerico
    al dar un resultado y que siga siendo un objeto Date, pero que resulte un Invalid Date, lo que resulta 
    en un valor que no es un numero (NaN). Por ello, fecha debe cumplir con que sea un objeto Date y que resulte en un
    numero*/

    return true; // Si es un objeto Date válido
    
  } else { // Caso contrario, cualquier otra posibilidad dara false
    return false;
  }
}
console.log(esFechaValida(new Date("2022-01-01"))); // true
console.log(esFechaValida("2022-01-01")); // false
console.log(esFechaValida(new Date("invalid"))); // false

console.log(esFechaValida('2024-02-30'));// false
console.log(esFechaValida("2022-01-01")); // false
console.log(esFechaValida(new Date("2022-12-32")));// false

console.log(esFechaValida(new Date("2024-02-30"))); //  true

console.log(esFechaValida(2024,2,3)); // false
console.log(esFechaValida(2024-2-3)); // false
console.log(esFechaValida(2024023)); // false
console.log(esFechaValida(new Date(2022,1,1))); 

module.exports = esFechaValida;