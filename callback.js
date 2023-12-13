// var date=new Date()
// console.log("hello")
// for(i=0;i<100;i++){
//     console.log("loop")
// }
// console.log("end")
// var diff=new Date()-date
// console.log(diff)

// function longtask(millSecondTime){
//     dt=new Date()
//     while((new Date-dt)<= millSecondTime){

//     }
// }
// asynchrounus(multiple task at a time)
// function showend(){
//     console.log('end')
// }
// console.log('started')
// setTimeout(showend,200)

// console.log('started')
// setTimeout(showend,200)

// console.log('started')
// setTimeout(showend,200)


// console.log('started') synchrounus
// longtask(2000)
// console.log('end')s
// console.log('started')
// longtask(2000)
// console.log('end')
// call back working

var hello=function(data){
console.log("Data:"+data)
}
var hey=function(callback){
    
    callback("crossroad")
}
hey(hello)