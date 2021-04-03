'use strict'

const user = {
    set age(age){
        this.oldis = age
    },
    get age(){
        return this.oldis
    },
    get fullName(){
        return `${this.name} ${this.lastName}`
    },
    set fullName(name){
        [this.name, this.lastName] = name.split(' ')
    },
    sayHello({name='Piter'}={}){
        return `Hello ${name}, nice to meet you, my name is ${this.fullName}`
    }
}

//Use user as proto for sub user
const subUser = Object.create(user)
subUser.fullName = 'Pitter Griffen'
subUser.age = 26

console.log(user.fullName)
console.log(user.sayHello(subUser))

console.log(subUser.sayHello(user))