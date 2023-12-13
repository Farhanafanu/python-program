var person={name:"aslu",age:27,place:"benguluru",display:function(){
    console.log(this.name)
    console.log(this.place)
}
}

for(x in person){
    console.log(person[x])

}
person.name="fanu"
person.dob="15-10-1998"
person.displayage=function(){
    console.log(this.age)
}
console.log(person.displayage)
console.log(person['age'])