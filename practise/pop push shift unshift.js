let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
console.log(largeCountries)
largeCountries.unshift("China")
console.log(largeCountries)


//The unshift() method adds new elements to the beginning of an array.
//The shift() method delete elements to the beginning of an array.