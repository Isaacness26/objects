'use strict'

const myCar = {
   year: "2006",
   color: "white",
   make: "ford",
   model: "escape",
   
   
Description:function(){
    return('My car is a '+ this.year + this.make + this.model);

}
}

const person = {
    myName: ('Isaac', 'Ness' ),
    age: 17,
    occupation: 'student',

    whoAmI:function(){
        return('My fist name is '+ this.myName[0] + 'my last name is ' +thsis.myName[1])
    } 
}

console.log(myCar.Description());

console.log(person.whoAmI());
