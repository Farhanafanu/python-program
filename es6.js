// var num=20
// var num=30
// let hello=20
// let hello1=20
// console.log(hello)
// function hell(){
//   var   i=0
//   let hoy=100
//   if(i===0){
// var hey=20
// let hoy=30
// var i=200
//   }
//     console.log(hey)
//     console.log(hoy)
//     console.log(i)
//     function sample(){
//         var i=350
//         console.log(i)
//     }
    
//    sample() 

    
// }

// hell()

// let scope in block,var scope in function,const cant change,can add const in to array using push
// const hello=100
// defualt parameter 
// const hey=["dilshad","abhi"]
// hey.push("aslu")
// hey=["fanu","ichu"]
// console.log(hey)
// function hello(num1=100,num2){
// console.log(num1+num2)}
// hello(undefined,20)
// class Hello{
//     constructor(num1,num2){
//         this.num1=num1
//         this.num2=num2
//     }
//     hello(){
//         console.log("hello welcome"+(this.num1+this.num2))
//     }
// }
// let hey=new Hello(20,30)
// hey.hello()
// inheritance
class Sample{
    samplehello(){
        console.log("welcome")
    }

}
class Hello extends Sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num1
        
    }
    hello(){
        console.log("hai sample"+this.num1+this.num2)
    }
    

}
let hey=new Hello(50,100)
hey.hello()
hey.samplehello()
