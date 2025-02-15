console.log([] + []); //""
console.log([] + 1); //"1"
console.log([[]] + 1); //"1"
console.log([[1]] + 1); //"11"
console.log([[[[2]]]] + 1); //"21"
console.log([] - 1); //-1
console.log([[]] - 1); //-1
console.log([[1]] - 1); //0
console.log([[[[2]]]] - 1); //1
console.log([] + {}); //"[Object Object]"
console.log({} + {}); //"[Object Object][Object Object]"
console.log({} - {}); //NaN
