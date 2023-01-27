/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
    
   
   // var arr2 = Object.keys(objeto).map(function (key) {
   //    return [String(key) + ':' + objeto[key]];
   // }); 
   // console.log(arr2);
   var array = [];
   for (const key in objeto) {
      array.push([key, objeto[key]]);
   }
   return array;
   // var array = Object.keys(objeto);
   // for (const clave of objeto) {
   //    array.push([clave, objeto[clave]])
   // }
   // return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   var arrayLetras = string.split('');
   var letrasOrdenadas = arrayLetras.sort();
   for (const letra of letrasOrdenadas) {
      if (!objeto[letra]) {
         objeto[letra] = 1
      }
      else{
         objeto[letra] += 1 
      }
   }
   //return objeto
   /** FOREACH */
   var objeto = {};
   var arrayLetras = string.split('');
   var letrasOrdenadas = arrayLetras.sort();
 
   letrasOrdenadas.forEach((letra) => {
      if (!objeto[letra]) {
         objeto[letra] = 1
      } else {
         objeto[letra] += 1
      }
   })
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayString = string.split('');
   var mayusculas = []
   var minusculas = []
   for (const letra of arrayString) {
       if (letra === letra.toLowerCase()) {
         minusculas.push(letra)
       } else {
         mayusculas.push(letra)
       }
   }
   return mayusculas.join('') + minusculas.join('')
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   // var nuevaFrase = [];
   // for (let i = 0; i < frase.length; i++) {
   //    nuevaFrase += frase[i].charAt(0).reverse();
   // }
   // return nuevaFrase
   var nuevafrase = frase.split(' ');
   var alrevez = "";
   for (let i = 0; i < nuevafrase.length; i++) {
      if(i !==0 ) alrevez += " " + nuevafrase[i].split('').reverse().join('') 
      else {
         alrevez += nuevafrase[i].split('').reverse().join('');
      }
   }
   return alrevez;
}
function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = ""
   var numeroNuevo = String(numero);
   for (let i = numeroNuevo.length - 1; i >= 0; i--) {
      numeroString = numeroString + numeroNuevo[i]
   }

   if (numeroString == numero) {
      return "Es capicua"
   }
   else{
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var resultado = ""
   for (let o = 0; o < string.length; o++) {
      if (string[o] !== "a" && string[o] !== "b" && string[o] !== "c") {
         resultado += string[o]
      }
   }
   return resultado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a,b){
      return a.length - b.length;
   })

//    for (let i = 0; i < arrayOfStrings.length; i++) { 
//       for (let j = i + 1; j < arrayOfStrings.length; j++) { 
//          if (arrayOfStrings[i].length > arrayOfStrings[j].length) 
//          {   
//            let aux = arrayOfStrings[i];
//                arrayOfStrings[i] = arrayOfStrings[j]
//                arrayOfStrings[j] = aux;
//          }
//       }
//    }
//   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
//    var arr = []
//    var arr2 = []
//    var arrayvacio = []
//    for (var i = 0; i < array1.length; i++) {  
//       if (array1[i] === array2[i]) {
//          arr2.push(array1[i])
//       } 
//       else if(array2[i] === array1[i]){
//          arr2.push(arrayvacio)
//       }
//    }
//    for (var i = 0; i < array2.length; i++) {
//       if (array1[i] === array2[i]) {
//          arr.push(array2[i])
         
//       } 
//       else if(!array1[i] === array2[i]){
//          arr.push(arrayvacio)
//       }
//    } 
// return arr; 
var resultado = array1.filter(x => array2.indexOf(x) !== -1)
return resultado
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
