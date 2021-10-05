// Completa la función que tomando un array de strings como argumento devuelva el más largo,
//  en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
let resultIdx,long=0;
function findLongestWord(param,idx,arr) {
    if(param.length>long){
        long=param.length;
        resultIdx=idx;
    }
    if(idx==arr.length-1){
        console.log(arr[resultIdx])
    }
}
avengers.forEach(findLongestWord)