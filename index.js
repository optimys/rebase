'use strict'

const user = {
    name: 'Alex',
    lastName: 'Kalashnikov',
    get fullName(){
        return `${this.name} ${this.lastName}`
    },
    sayHello(name){
        return `Hello ${name}, nice to meet you, my name is ${this.fullName}`
    }
}

console.log(user.fullName)