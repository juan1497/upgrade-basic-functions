// Crea una función que nos devuelva el número 
// de veces que se repite cada una de las palabras 
// que lo conforma.  Puedes usar este array para
//  probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(arr) {
    let arrNew={},counter=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                counter++;
            }
        }
        arrNew[`${arr[i]}`]=counter;
        counter=0;
    }
    console.log(arrNew)
  }
repeatCounter(counterWords)