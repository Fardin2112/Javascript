// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
localStorage.setItem("myname","Fardin")
let me = localStorage.getItem("myname")
console.log(me)

//even if i clear storage but my browser show data
//if i use this code then localStorage will clear
localStorage.clear()
