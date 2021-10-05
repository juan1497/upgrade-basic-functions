// Crea una función que reciba por parámetro un array
//  y cuando es un valor number lo sume y de lo contrario 
//  cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let result=0;
function averageWord(param,idx,arr) {
    if(typeof param=="number"){
        result+=param;
    }else if(typeof param=="string"){
        result+=param.length;
    }
    if(idx==arr.length-1){
        console.log(result);
    }
}
mixedElements.forEach(averageWord);