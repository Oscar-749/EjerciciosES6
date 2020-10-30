//EJERCICIOS REPASO ES6

//1. HAZ UNA FUNCIÓN CAPAZ DE REVERTIR EL ORDEN DE LOS CARACTERES DE UN STRING DADO POR UN USUARIO.
let revertir = ["Casa", "Sofa", "Mesa", "TV", "Sillón"]

function invers(revertir){
    return [...String(revertir)].reverse().join('');
}
console.log(invers(revertir));

//2. CONSTRUYE UNA FUNCIÓN QUE SEA CAPAZ DE COMPROBAR SI UNA VARIABLE ES UN ARRAY O NO.


//3. CONSTRUYE UNA FUINCIÓN CAPAZ DE CLONAR UN ARRAY.
let coches = ["BMW", "Audi", "SEAT", "FORD"];

let cloneCoches = coches.slice();
console.log(cloneCoches);

let cloneCoches4 = [...coches];
console.log(cloneCoches4);

//4. ESCRIBE UNA FUNCIÓN CAPAZ DE BORRAR ELEMTOS DUPLICADOS DEL SIGUIENTE ARRAY.
let array1 = ["Lunes", "Martes", "Miercoles", "Martes", "Jueves", "Viernes", "Miercoles", "Sabado", "Lunes", "Domingo"];

let repetidos = array1.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),[],
);
console.log(repetidos);

//5. ESCRIBE UNA FUNCIÓN CAPAZ DE CONCATENAR DOS ARRAYS.
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array3 = [10, 11, 12, 13, 14, 15];

let together = array2.concat(array3);
console.log(together);

//6. MODIFICA LA FUNCIÓN ANTERIOR PARA EXCLUIR AQUELLOS ELEMENTOS QUE SE REPITAN EN EL ARRAY CONCATENADO.
let array4 = [0, 1, 2, 3, 12, 4, 5, 6, 15, 7, 8, 9];
let array5 = [10, 11, 1, 12, 3, 13, 14, 5, 15];

let sum = array4.concat(array5);
let quitar = sum.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),[],
)
console.log(quitar);

//7. DISEÑA UNA FUNCIÓN EN JAVASCRIPT QUE ACEPTE UN NÚMERO COMO PARÁMETRO Y COMPRUEBE SI ESTE NÚMERO ES PRIMO O NO.