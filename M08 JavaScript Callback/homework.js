/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var ConMayuscula = nombre.split("");
   
   var elementoUno = ConMayuscula.shift()

   ConMayuscula.unshift(elementoUno.toUpperCase())  
   var resultadoFinal = ConMayuscula.join('');
   return resultadoFinal;

   //////metodo 2
   //let primera = nombre[0].toUpperCase();
   for (let i = 1; i < nombre.length; i++) {
      primera = primera + nombre[i]   
   }
   //return primera;
   // tercera opcion
   let primera = nombre[0].toUpperCase();
   let resto = nombre.substr(1);
   //return primera + resto;

   //return nombre[0].toUpperCase() + nombre.substr(1);
    



}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb(cb());
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var operacion = function cb (num1, num2){
      return num1 * num2;
   }
   var resultado = cb(operacion);
   return resultado;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let resultado = 0;
   for(let i = 0; i < arrayOfNumbers.length; i++) 
   {
      resultado += arrayOfNumbers[i]
   } 
   cb(resultado);
   let valor = arrayOfNumbers.reduce(
      (acumulador, index) =>{
       acumulador + index;
      }); 
   
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach((Element) => {
      cb(Element);
   })
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   // 1 forma
   let arreglo = [];
   // for (let i = 0; i < array.length; i++) {
   //      arreglo.push(cb(array[i])); 
   // }
   // return arreglo;

   // segunda forma

   // array.forEach((elemento) =>{
   //    arreglo.push(cb(elemento));
   // })
   // return arreglo;
  // metodo map crea un nuevo arreglo
  let nuevoarreglo = []
    nuevoarreglo = array.map((elemento) => {
      return cb(elemento)
   })
   return nuevoarreglo


}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let nuevoarreglo = []
   // arrayOfStrings.forEach((elemento) =>{
   //    // if (elemento[0] === "a") {
   //    //    nuevoarreglo.push(elemento);
   //    // }
   //    if (elemento.charAt(0) === "a") {
   //       nuevoarreglo.push(elemento);
   //    }
   // })
   // return nuevoarreglo;
   // Opcion con filter
   let arreglo = arrayOfStrings.filter((elemento) => elemento[0] === "a")
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
