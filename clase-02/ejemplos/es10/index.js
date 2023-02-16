//===============================================================//
// ES10 incluyo el stream para cadenas de texto
//===============================================================//
testTrim = () =>{
    const texto = "                     Hola";
    console.log("con trim", texto.trim());
    console.log("sin tirm", texto)
}

testArrayFlat = () => {
    const testArray = [1,2,3,[4,5,6],7,8]
    console.log('testArrayFlat ->',testArray.flat())
}

testArrayFlat()