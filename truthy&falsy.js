let credit = 2

if("solo"){   //truthy bec  simply string consider as true
    console.log("let's play")
}
if(credit>0){
    console.log("let's play 2")
}
if(credit){  // it's run 
    console.log("we can't pay falsy")
}
if(""){
    console.log("we can't play 2 falsy")
}

// falsy value
1   // false
2   // 0
3   // ""
4   // null -> how you as a developer signalize emptiness
5   // undefined -> how JavaScript signalizes emptiness
6   // NaN

let trueOfFalse = Boolean("")
console.log(trueOfFalse)
trueOfFalse = Boolean("hello")
console.log(trueOfFalse)