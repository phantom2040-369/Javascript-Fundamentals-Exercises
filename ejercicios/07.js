function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:

  return typeof valor;
  /* Esta función simplemente utiliza typeof valor para obtener el tipo de dato del 
  valor pasado como argumento y lo devuelve como resultado.*/

   }
   console.log(esTipoDato('Hola')); // Output: "string"
   console.log(esTipoDato(42)); // Output: "number"
   console.log(esTipoDato(true)); // Output: "boolean"
   console.log(esTipoDato({})); // Output: "object"
   
  

module.exports = esTipoDato;