//===============================================================//
// ES9 incluyo el operador spread (...):
//===============================================================//

testSpreadOperator = () => {
    const car = {brand: "KIA", model:"MORNING", amount: 9990, currency: "USD"}
    const newCarDefinition = {
        year: 2023,
        ...car
    }
    console.log("[testSpreadOperator]->", newCarDefinition);
}

testSpreadOperator();