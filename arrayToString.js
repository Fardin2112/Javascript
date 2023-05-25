let myname = ["Fardin"]
console.log(typeof myname)

// array to string
myname = JSON.stringify(myname)
console.log(typeof myname)

// conversion again into string to Array
myname = JSON.parse(myname)
console.log(typeof myname)