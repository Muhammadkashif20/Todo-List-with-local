
var count=0
function showInfo() {
    var userText=document.getElementById('text-Inp').value
    var showTodo=document.getElementById('showTodo')
    showTodo.innerHTML+=`<br><ul><li style="list-style-type: none;" id="item">${userText}<button id="del" onclick="Delete()">Delete</button></li></ul>`
    localStorage.setItem('User Todo ',userText)
    
count++
document.getElementById('text-Inp').value=""
}
function dAll() {
    location.reload()
}
function Delete() {
    var check=document.getElementById('item')
   check.remove()
    


    
}

