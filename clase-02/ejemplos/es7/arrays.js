/** Class to test Array methods in javascript. */
class ArrayExample {
    constructor() {
        this.cars = ['KIA', 'HYUNDAY', 'TOYOTA', 'MAZDA'];
        this.kiaModels = [
            {model:"MORNING", amount: 9990, currency: "USD"},
            {model:"RIO5", amount: 14000, currency: "USD"},
            {model:"SOLUTO", amount: 10500, currency: "USD"},
            {model: "RIO4", amount: 12000, currency: "USD"}
        ];
    }
//==========================================================//
// ES7 incluyo el metodo includes, el cual retorna:
// true or false si encuentra la busqueda
//=========================================================//

    /**
     * to test includes array method.
     * @param {string} brand - car maker to verify if exist.
     */

    testIncludesWithCars(model) {
        const result = this.cars.includes(model);
        if(result) {
            console.log(`El modelo ${model} se encuentra dentro del arreglo`)
        } else {
            console.log(`El modelo ${model} no se encuentra dentro del arreglo`)
        }
    }

    /**
     * to test find array method.
     * @param {string} model - car model to verify if exist.
     */

    testFindWithCars = (model) => {
        const vehicle = this.kiaModels.find((car) => car.model === model)
        if(vehicle) {
            console.log(`información del vehículo encontrado: `, vehicle)
        } else {
            console.log(`no se encontro el modelo: ${model}`)
        }
    }
}

const obj = new ArrayExample();

obj.testIncludesWithCars("KIA");
obj.testFindWithCars("RIO5");

//=============================================================================================================================//
// NOTAS:
// --- RECUERDEN QUE ---
// includes: devuelve true or false si el elemento a buscar esta dentro del arreglo.
// find: devuelve el primer elemento en el arreglo proporcionado donde se cumpla la condición implementada por la función dada.
// filter: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
//==============================================================================================================================//