//===============================================================//
// ES11 variables privades y operador nullish
//===============================================================//
class PrivateAttribute {
    #att
    constructor() {
        this.#att = 0;
        this.public = 0;
    }

    setAttValue = (value) => {
        this.#att = value;
    }

    getValues = () => {
        console.log("att ->", this.#att)
        console.log("public ->", this.public)
    }
}

const obj = new PrivateAttribute();

//===============================================================//
// probando el nullish
//===============================================================//

let x = 0;
let y = null;
  
let z = 13;
  
// The value of x will become 
// unchanged because x is not nullish.
x ??= z;
  
// The value of y will be 
// changed because y is nullish.
y ??= z;
  
  
console.log("not nullish operator ->",x)    // 12
console.log("nullis operator ->", y)      // 13
