//Step 3: Implement toggle check. when checkbox is checked, there will be a CSS property modified on the page
var toggleCheck = function(){
    // Create a variable to refer the to-do list, that is, the parent node of the checkbox
    var parent = this.parentNode;
  // Use the classList property to toggle the class checked, for example, varName.classList.toggle('checked')
    parent.classList.toggle('checked');
}

//Step 4: Delete to do item
var deleteTodo = function(){
    var toDoLi = this.parentNode;
    toDoLi.remove();
}


//Step 1: Implement addTodo(todo)
// function for add item in to do list
var addTodo = function(todo){

    // first we should create the variables needed for output
    // li as ul element and its chidlren - label for text, input for checkbox and delete button
    var li = document.createElement('li');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var btnn = document.createElement('button');

    //pass the argument here
    label.innerHTML = todo;

    //set the input type
    input.type="checkbox";
    //from Step 3
    input.onclick = toggleCheck; 

    //set delete button properties
    btnn.innerHTML="Delete";
    btnn.className="delete";
    //from Step 4
    btnn.onclick = deleteTodo;

    //add elements to parent element - li
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(btnn);
    
    //get the ul element, to appent the li element to it
    var list = document.querySelector('#todoList');
    list.appendChild(li);
}


//Step 2: Implement event listener
document.getElementById('add').onclick = function(){
    //store here the text input from <add Todo> div
    var addTextInput = document.getElementById('newTodo');

    //if there is no text as value, the button returns nothing
    if(addTextInput.value === ""){
        return;
    }else{
        //otherwise it will call the function addTodo
        addTodo(addTextInput.value);
        //reset the text input value in <addTodo> div
        addTextInput.value = "";
    }
}

