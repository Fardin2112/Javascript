function savebtn(){
    console.log("clicked from click attribute")
}

let inputbtn = document.getElementById("save-el")

inputbtn.addEventListener("click",function(){
    console.log("clicked from evenet listender")
})