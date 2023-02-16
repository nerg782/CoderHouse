/*let people = [
    {id:1, name:"Ana"},
    {id:2, name:"Pedro"},
    {id:3, name:"Juan"},
]

let person = people.find((p) => {
    let test;
    if(p.id === 3) {
        test = p;
    }
    return test;
})

console.log(person);*/

/*for (let index = 0; index < 1; index++) {
     const x = 2
    console.log("x dentro del ciclo for ->", x)
}
console.log(x)*/
/*const numeros = [1,2,3] //n-1
numeros = [1,2,6]

console.log(numeros)*/

/*function suma(numero1, numero2) {
    let resultado = numero1 + numero2
    console.log("el resultado es -> ",resultado);
}*/



/*const suma = (numero1, numero2) => {
    let resultado = numero1 + numero2
    console.log("el resultado es -> ",resultado);
}

const a = parametro => parametro + 1;

const b = a(1);

console.log(b)*/


//const numero = 1992
//let text = "hola esto es una cadena " + numero + " probando"

//console.log(text);

//let texto2 = `hola como estas ?  ${numero}
//no
//`

//console.log(texto2);


/*function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();*/
  
class Contador {
    constructor(name) {
        this.name = name;
        this.contadorLocal = 0;
    }
    static global = 0;

    getResponsable() {
        console.log(`el responsable es: ${this.name}`)
    }
    contar(){
        this.contadorLocal = this.contadorLocal + 1
        Contador.global = Contador.global + 1
    }
    getCuentaGlobal() {
        console.log(`cuenta global: ${Contador.global}`)
    }

    getCuentaIndividual() {
        console.log(`cuenta individual: ${this.contadorLocal}`)
    }
}

const contador1 = new Contador("Coder")
const contador2 = new Contador("Coder2")

contador1.contar()
contador1.getCuentaIndividual()
contador1.getCuentaGlobal()
contador2.getCuentaGlobal()
contador2.getCuentaIndividual()