const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy(){
    container.innerHTML += "<p>Thank you for buying!</p>"
}

// use of createElement() and append()
// Let's try a different method!
// for (let i = 0; i < myLeads.length; i++) {
  
//     // create element
//     // set text content
//     // append to ul
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// }