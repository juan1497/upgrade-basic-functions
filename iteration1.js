// Completa la función que tomando dos números como argumento devuelva el más largo.
function x(numberOne , numberTwo) {
    if(numberOne.toString().length>numberTwo.toString().length){
        console.log(numberOne);
    }else if(numberOne.toString().length<numberTwo.toString().length){
        console.log(numberTwo);
    }else{
        console.log(`son iguales de largo el ${numberOne} y el ${numberTwo}`);
    }
  }

x(2000,1000);