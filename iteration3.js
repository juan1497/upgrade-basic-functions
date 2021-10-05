// Calcular una suma puede ser tan simple como iterar 
// sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma 
// un array de números como argumento y devuelve la suma de todos los números de la matriz. 

const numbers = [1, 2, 3, 5, 45, 37, 58];
let result=0;
function sumNumbers(param,idx,arr) {
    result+=param;
    if(idx==arr.length-1){
        console.log(result)
    }
}
numbers.forEach(sumNumbers);