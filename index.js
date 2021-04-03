'use strict'

const user = {
    name: 'Alex',
    lastName: 'Kalashnikov',
    age: 36,
    get fullName(){
        return `${this.name} ${this.lastName}`
    },
    sayHello({name='Piter'}={}){
        return `Hello ${name}, nice to meet you, my name is ${this.fullName}`
    }
}

//Use user as proto for subusser
const subUser = Object.create(user)
subUser.name = 'Piter'

console.log(user.fullName)
console.log(user.sayHello(subUser))