var images = [
    "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3742711/pexels-photo-3742711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8956453/pexels-photo-8956453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4198029/pexels-photo-4198029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2433467/pexels-photo-2433467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

var currentIndex = 0;

var img = document.querySelector('img');
var next = document.getElementById('next-button');
var prev = document.getElementById('prev-button');

var incrementIndex = function(){
    console.log(currentIndex);
    currentIndex +=1;
    if(currentIndex > images.length-1){
        currentIndex = 0;
    }
    return currentIndex;
}

var decrementIndex = function(){
    console.log(currentIndex);
    currentIndex = currentIndex - 1;
    if(currentIndex < 0){
        currentIndex = images.length-1;
    }
    return currentIndex;
}

next.onclick = function(){
    img.setAttribute('src',images[incrementIndex(currentIndex)]);
}

prev.onclick = function(){
    img.setAttribute('src',images[decrementIndex(currentIndex)]);
}

//Creating To Do List
var toggleCheck = function(){
    // Create a variable to refer the to-do list, that is, the parent node of the checkbox
    let parent = this.parentNode;

    // Use the classList property to toggle the class checked, for example, varName.classList.toggle('checked')
    parent.classList.toggle('checked');
}

var deleteTodo = function(){
    // Create a variable to refer the to-do list, that is, the parent node of the delete button

    let todoLi = this.parentNode;

    // Remove the list item using the .remove() function, for example, varName.remove()
    todoLi.remove();
}

var addTodo = function(todo){
    let li = document.createElement('li');

    let label = document.createElement('label');
    label.innerHTML = todo;

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.onclick = toggleCheck;


    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = deleteTodo;
    
     // Nest todo elements in list item
    li.appendChild(label);
    li.appendChild(checkbox);
    li.appendChild(deleteButton);

    let todoList = document.getElementById('todoList');
    // Append todo to todolist
    todoList.appendChild(li);
}



document.getElementById('add').onclick = function() { 
    //think about that tree structure when u learned the concepts of html elements

    // Store the button's parent element (.addTodo <div>) in a variable
    var parent = this.parentNode;
    // Store the input, which is the first child element of the .addTodo <div>
    var addTextInput = parent.children[0];

    if(addTextInput === ""){
        return;
    }else{
        //Add to do
        addTodo(addTextInput.value);
        //reset text input
        addTextInput.value = "";
    }

}