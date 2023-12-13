var read=require("readline-sync")
var num1=read.question("enter two numbers:")
var num2=read.question("")
if(num1>num2){
    console.log('larger is :'+num1)
}
else if(num1===num2){
    console.log("num1 and num2 are equal :"+num2)

}
else{
    console.log("larger is :"+num2)
}
