
// var todoBtn=document.getElementById('todo-Btn')
// console.log(todoBtn);
var count=0
function showInfo() {
    var userText=document.getElementById('text-Inp').value
    localStorage.setItem('User Todo ',userText)
    showTodo.innerHTML+=`<br><ul><li style="list-style-type: none;" id="item">${userText}<button id="del" onclick="Delete()">Delete</button></li></ul>`
    // var getList=document.getElementById('item')
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

