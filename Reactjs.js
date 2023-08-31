const person = {
    name : "Fardin",
    age : 19,
    isMarried : false
}
// ... copy same as person
const person2 = {...person,name:"chiku"}
console.log(person2)

const name = ["Fardin","chiku","Furious"];
// copy same as name but add more names
const name2 = [...name,"noku","Goku"];
console.log(name2)