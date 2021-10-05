// Calcular un promedio es una tarea extremadamente común.
//  Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
let result=0;
function average(param,idx,arr) {
    result += param;
    if(idx==arr.length-1){
        console.log(result/arr.length)
    }
}
numbers.forEach(average);