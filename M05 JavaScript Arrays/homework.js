/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código: 

   var masUno = array.map((num) => {
      return num + 1;
  });
  return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   //Tu código:
   // var nuevoArray = [];
   // for (let i = 0; i < array.length; i++) {
   //    nuevoArray = array[i].pop(elemento);
   //    return nuevoArray;      
   // } 
   array[array.length] = elemento; 
  
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   //array[array[0] = elemento];
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   if (array.includes(elemento)) {
      return true;
   } else {
      return false;
   }
   //return array.includes(elemento);
   
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
    
   var numeros = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
        numeros = numeros + arrayOfNums[i];
   }
   return numeros;
    
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código: 
   var i = 0;
   var promedios = 0;
   var resultados = resultadosTest.length;
   while (i < resultados) {
      promedios = promedios + resultadosTest[i++];
   }
   return promedios / resultados;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
    
   var masGrande = 0;
   for (const numero of arrayOfNums) {
      if (masGrande < numero) {
         masGrande = numero
      }
   }
   //return masGrande;
   var max = 0;
   var numero = arrayOfNums.length;
   for (let i = 0; i < numero; i++) {
      if (max < arrayOfNums[i]) {
         max = arrayOfNums[i];
      }
   }
   return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length < 1) return 0;
   var total = 1;
   for (let i = 0; i < arguments.length; i++) {
       total = total * arguments[i];
   }  
   return total;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   // var i = array.length;
   // return array[i] > 18;
   var contador = 0;
   for (let i = 0; i < array.length; i++) {
       if (array[i] > 18) {
        contador++;
       }  
   }
      return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if (numeroDeDia === 1 || numeroDeDia === 7) {
         return "Es fin de semana"
   }else{
      return "Es dia laboral"
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   var nueve = num.toString();
   if (nueve.charAt() == "9") {
      return true;
   }
   return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
    
   for(var i = 0; i < array.length; i++){
      if (array[i] !== array[i + 1]) {
         return false;
      }else{
         return true;
      }
   }
}

function mesesDelAño(array) {
   /* El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses 
   // "Enero", "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   */
  var mesesDeSordenados = [];
  for (const meses of array) {
      if (meses.includes("Enero") || meses.includes("Marzo") || meses.includes("Noviembre")) {
         mesesDeSordenados.push(meses);
      } 
  }
  if (mesesDeSordenados.length < 3) {
     return "No se encontraron los meses pedidos";
   }
   return mesesDeSordenados;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var resultado = [];
   for (let i = 0; i < 11; i++) {
    resultado.push(6 * i);
   }
   return resultado;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var resultado = []
   array.forEach( element => 
   {
      if (element > 100) {
         resultado.push(element);
      } 
   });
   return resultado;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var nuevoArray = []
   var suma = num;
    for (var i = 0; i < 10; i++) {
      suma = suma + 2  
      if (suma === i) break; 
      else  nuevoArray.push(suma); 
    }
      if (i < 10) return "Se interrumpió la ejecución";
      else return nuevoArray;
     
      // var array = [];
      // var operacion = num;
      // for(var i = 0; i < 10 ;i++){ 
      //    operacion = operacion + 2; 
      //    if (operacion === i) break; 
      //    else array.push(operacion); 
      // }  
      // if (i < 10)  return "Se interrumpió la ejecución"; 
      // else return array;
   }

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];
   var operacion = num;
      for(var i = 0; i < 10 ;i++){ 
         if (i === 5) {
            continue;
         }
         operacion = operacion + 2; 
         array.push(operacion); 
      }  
       return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
