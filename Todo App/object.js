
var list = document.getElementById("list")

function addTodo() {
    var todo_item = document.getElementById("todo-item")

    //create li tag with text node
    var li = document.createElement('li')
    if (todo_item.value == "") {
        var error = alert("Please enter something");

    }
    else{

        var liText = document.createTextNode(todo_item.value)
        li.appendChild(liText)
    
        //create delete button 
        var delBtn = document.createElement("button")
        var delText = document.createTextNode("Delete")
        delBtn.appendChild(delText)
        delBtn.setAttribute("class","btn1 btn btn-outline-warning")
        delBtn.setAttribute("onClick", "deleteItem(this)")
        li.appendChild(delBtn)
        
    
        // //create edit button
        // var editBtn = document.createElement("button")
        // var editText = document.createTextNode("EDIT")
        // editBtn.appendChild(editText)
        // editBtn.setAttribute("class", "btn")
        // editBtn.setAttribute("onClick", "editItem(this)")
        // li.appendChild(editBtn)
    
         list.appendChild(li)
    
        todo_item.value = ""
    

    }
}
function deleteItem(e) {

    e.parentNode.remove()
}
function deleteAll() {

    list.innerHTML = ""

}

// function editItem(e) {


//     // var editBtn = document.createElement("button")

//     //   //create update button
//     //   var editbtn2= document.createElement("button")
//     //   var editText = document.createTextNode("UPDATE")
//     //   editbtn2.appendChild(editText)
//     //   editbtn2.setAttribute("class", "btn")
//     //   e.parentNode.childNodes[2].replaceChild(editbtn2,editBtn);

//     //   list.appendChild(e.parentNode.childNodes[2])

//     var ip = document.createElement("input")
//     ip.value = e.parentNode.firstChild.nodeValue
//     ip.setAttribute("class", "inp")
//     list.appendChild(ip)
//     e.parentNode.firstChild.nodeValue = ip.value;
//     e.parentNode.replaceChild(ip, e.parentNode.firstChild)


//     // var val =prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
//     // e.parentNode.firstChild.nodeValue = val;


// }
