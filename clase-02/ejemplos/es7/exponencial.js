//==========================================================//
// Antiguamente se usaba Math.pow para calcular exponenciales
//=========================================================//

/**
 * Calculate the power.
 * @constructor
 * @param {number} base - reprsents the base.
 * @param {string} exponent - represents the exponente.
 */

/* function powerCalculate(base, exponent) {
    const result = Math.pow(base, exponent)
    console.log('[powerCalculated] the result is ->:', result);
} */

//==========================================================//
// En ES7 se incorporo el operador ** para hacer este calculo
//=========================================================//

/**
 * Calculate the power.
 * @constructor
 * @param {number} base - reprsents the base.
 * @param {string} exponent - represents the exponente.
 */
/* 
const getPowerCalculate = (base, exponent) => {
    const result = base ** exponent
    console.log('[getPowerCalculate] the result is ->:', result)
} */

//==========================================================//
// Calculando las potencias de un arreglo
//=========================================================//

/**
 * calculate the power in array position.
 * @constructor
 * @param {string} exponent - represents exponente.
 * @return {Array} result - array with operation result.
 */

/*  const arrayPowerCalculate = (exponent) => {
    const exp = [1,2,3,4,5];
    const result = exp.map(element => element ** exponent)
    console.log('[arrayPowerCalculate] the result is ->:', result)
} */

//==========================================================//
// Probando la funcion powerCalculate
//=========================================================//
/* powerCalculate(4,2) */

//==========================================================//
// Probando la funcion powerCalculate
//=========================================================//
/* getPowerCalculate(5,2) */

//==========================================================//
// Probando la funcion powerCalculate
//=========================================================//
/* arrayPowerCalculate(5) */