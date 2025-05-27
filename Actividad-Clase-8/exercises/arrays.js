/*Pregunta 4
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

let texto = "programacion";
let textoMayuscula = texto.toUpperCase();

console.log("Texto en mayúscula:", textoMayuscula);

/*Pregunta 5
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

let texto = "desarrollador";
let primeros5 = texto.substring(0, 5);

console.log("Primeros 5 caracteres:", primeros5);

/*Pregunta 6
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

let texto = "computadora";
let ultimos3 = texto.substring(texto.length - 3);

console.log("Últimos 3 caracteres:", ultimos3);


/*Pregunta 7
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

let texto = "programACION";
let primeraLetra = texto.substring(0, 1).toUpperCase();
let resto = texto.substring(1).toLowerCase();
let todojunto= primeraLetra + resto;

console.log("Primera Mayus:", todojunto);

/*Pregunta 8
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

let texto = "hola mundo bonito";
let posicionEspacio = texto.indexOf(" ");

console.log("Posición del primer espacio:", posicionEspacio);

/*Pregunta 9
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

let texto = "javascript lenguaje";
let espacio = texto.indexOf(" ");

let palabra1 = texto.substring(0, espacio);
let palabra2 = texto.substring(espacio + 1);

let resultado =
  palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase() +
  " " +
  palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();

console.log("Resultado final:", resultado);
