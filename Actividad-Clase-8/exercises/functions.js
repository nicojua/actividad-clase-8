/*Pregunta 23
Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function suma(a, b) {
    return a + b;
  }
  
  let resultado = suma(5, 10);
  console.log("Resultado de la suma:", resultado);

/*Pregunta 24
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
      alert("Error: Uno de los parámetros no es un número.");
      return NaN;
    }
    return a + b;
  }
  
  let resultado = suma(5, "hola");
  console.log("Resultado de la suma con validación:", resultado);

  
/*Pregunta 25
Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/


function validateInteger(num) {
    return Number.isInteger(num);
  }
  
  console.log("¿Es entero?", validateInteger(10)); 
  console.log("¿Es entero?", validateInteger(10.5)); 


/*Pregunta 26
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

/*Pregunta 27
Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.*/
