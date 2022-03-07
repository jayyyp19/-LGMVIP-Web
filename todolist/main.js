let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('todolist');
let inputField = document.getElementById('inputField');
let ClearAll = document.getElementById('ClearAll');
let number = document.getElementById('number');
const container = document.querySelector('#todolist');

// Calculate no of pending todos
let no=0;
number.innerText = no;

addToDoButton.addEventListener('click',function(){
    no = no + 1;
    // creating li's in ul element
    var paragraph = document.createElement('li');
    paragraph.innerText = inputField.value;
    // adding class of style to li element
    paragraph.classList.add('todocontainer');
    toDoContainer.appendChild(paragraph);
    number.innerText = no;
    inputField.value = "";
    // double click function to delete
    paragraph.addEventListener('dblclick',function(){
        no = no-1;
        number.innerText = no;
        toDoContainer.removeChild(paragraph);
    })
    //  delete all todos function
    ClearAll.addEventListener('click',function removeAllChildNodes(parent) {
        no = 0;
        number.innerText = no;
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        toDoContainer.innerHTML = '<li class="todocontainer"> <b> If u want to delete todo individually,then <br> double click on it..</b></li> ';
    removeAllChildNodes(container);
    })
   
    
})