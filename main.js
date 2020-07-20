
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
    const completeButton= document.createElement("button");  //creating done button
    completeButton.innerHTML="<i class='check'>/</i>";
    completeButton.classList.add("checkButton")
    newDiv.appendChild(completeButton);

    const deleteButton=document.createElement("button");   //creating delete button
    deleteButton.innerHTML="<i class='delete'>x</i>";
    deleteButton.classList.add("removeButton");
    newDiv.appendChild(deleteButton);   
    todoList.appendChild(newDiv);



}
/*
  const newDiv= document.createElement("div");  //creating div element  
    newDiv.style.height="30px";
    newDiv.style.color="white";
    newDiv.style.backgroundColor="#9ebec7";
    newDiv.style.width="300px";
    newDiv.style.fontWeight="bold";
    newDiv.style.fontSize="20px";
    newDiv.style.alignSelf="center";
    newDiv.style.margin="auto";
    newDiv.style.borderRadius="8px";
    newDiv.style.border="none";
    newDiv.style.boxShadow="2px 2px 2px #898999";
    newDiv.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    newDiv.style.marginTop="10px";

    newDiv.classList.add("tasksList");  
    
    const completeButton= document.createElement("button");  //creating done button
    completeButton.innerHTML="<i class='check'></i>";
    completeButton.classList.add("checkButton")
    newDiv.appendChild(completeButton);

    const deleteButton=document.createElement("button");   //creating delete button
    deleteButton.innerHTML="<i class='delete'></i>";
    deleteButton.classList.add("removeButton");
    newDiv.appendChild(deleteButton);   
*/