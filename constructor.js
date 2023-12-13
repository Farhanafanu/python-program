function person(name,place,age){
    this.name=name
    this.place=place
    this.age=age
    this.display=function(){
        console.log("name: "+this.name+" place: "+this.place+" age: "+this.age)
    }
    

}
var farhana=new person("farhana","benguluru",25)
var aslam=new person("aslam","benguluru",27)
farhana.display()
aslam.display()