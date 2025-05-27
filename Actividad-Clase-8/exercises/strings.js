/*Pregunta 10
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)*/

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes 5:", meses[4]);
console.log("Mes 11:", meses[10]);

/*Pregunta 11
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)*/

meses.sort();
console.log("Meses ordenados alfabéticamente:", meses);

/*Pregunta 12
Agregar un elemento al principio y al final del array (utilizar unshift y push)*/

meses.unshift("Inicio");
meses.push("Fin");
console.log("Array con elementos agregados:", meses);

/*Pregunta 13
Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

meses.shift();
meses.pop();   

console.log("Array después de quitar elementos:", meses);

/*Pregunta 14
Invertir el orden del array (utilizar reverse).*/

meses.reverse();

console.log("Array invertido:", meses);

/*Pregunta 15
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

let mesesUnidos = meses.join(" - ");

console.log("Meses unidos con guión:", mesesUnidos);

/*Pregunta 16
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)*/

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let mesesFiltrados = meses.slice(4, 11);

console.log("Meses de Mayo a Noviembre:", mesesFiltrados);
