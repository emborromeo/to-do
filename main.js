
// Date Display
let todayDate= new Date();
let dayNow=todayDate.getDate();
let days={weekday: "long"};
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
let monthNow=todayDate.getMonth();
document.getElementById("dateToday").innerHTML=todayDate.toLocaleDateString('en-US', days) + ",  " + months[monthNow]+ " " + dayNow; 

const todoList = document.querySelector(".todo-list");

todoList.addEventListener("click", deleteItem);
//Array for todo-list
let todoLists= [];

//Getting typed todo list value and adding it to array
let newContent; 
let newTodo;

function addTodo(e){
    
    newTodo=document.getElementById("todoText").value;
   
    todoLists.push(newTodo);   
      for(i=0;i<todoLists.length;i++){
         newContent= document.createTextNode(todoLists[i]);  // giving content
    } 
    createComponents(); 
    document.getElementById("todoText").value=" ";

}


 //Creating Components (Div)
function createComponents()
{
  
     console.log(newContent); // viewing array

    const newDiv= document.createElement("div");  //creating div element  
    newDiv.classList.add("tasksList");  
    
    const newTodo= document.createElement("li");   //crating li element
    newTodo.classList.add("todoItem");
    newDiv.appendChild(newTodo);
    for(i=0;i<todoLists.length;i++){
        newTodo.innerText=todoLists[i];

    } 
 /*  const completeButton= document.createElement("button");  //creating done button
     completeButton.innerHTML="<i class='check'>/</i>";
    completeButton.classList.add("checkButton")
    newDiv.appendChild(completeButton);
*/
    const deleteButton=document.createElement("button");   //creating delete button
    deleteButton.innerHTML="<i class='delete'>x</i>";
    deleteButton.classList.add("removeButton");
    newDiv.appendChild(deleteButton);   


    todoList.appendChild(newDiv); //adding all elements to main div



}

function deleteItem(e){
    let item=e.target;
    let todo=item.parentElement;
  //  let todo=item.parentElement;

 //   const todo= item.parentElement;
      todo.addEventListener(function () {         
            todo.remove();
        });

   // if (item.classList[0] === "checkButton") todo.classList("completed");
}