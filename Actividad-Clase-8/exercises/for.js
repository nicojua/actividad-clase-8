/*Pregunta 19
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

let palabras = ["sol", "luna", "estrella", "planeta", "galaxia"];



for (let i = 0; i < palabras.length; i++) {

 alert(palabras[i]);

}

/*Pregunta 20
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let capitalizada = palabra.substring(0, 1).toUpperCase() + palabra.substring(1).toLowerCase();
    alert(capitalizada);
  }

  /*Pregunta 21
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

let sentence = "";
for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}

alert(sentence.trim());


/*Pregunta 22
Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log)*/

let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(i);
}

console.log("Array final:", numeros);
