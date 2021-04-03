'use strict'

const user = {
    name: 'Alex',
    lastName: 'Kalashnikov',
    get fullName(){
        return `${this.name} ${this.lastName}`
    },
    sayHello({name='Piter'}={}){
        return `Hello ${name}, nice to meet you, my name is ${this.fullName}`
    }
}

const subUser = Object.create(user)
subUser.name = 'Piter'

console.log(user.fullName)
console.log(user.sayHello(subUser))