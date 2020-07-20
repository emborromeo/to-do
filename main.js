
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

//Array for todo-list
let todoLists= [];

//Getting typed todo list value and adding it to array
let newContent;
function addTodo(){
    let newTodo= document.getElementById("todoText").value;
    todoLists.push(newTodo);
    document.getElementById("todoText").value=" ";

    addtodoList();


}

function addtodoList(){
    for(i=0;i<todoLists.length;i++){
         newContent= document.createTextNode(todoLists[i]);  // giving content

    }

 //Creating Components (Div)
    let newDiv= document.createElement("div");  //creating div element  
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

    newDiv.classList.add("tasksList");          //setting class name
   


    console.log(newDiv.className);              //trial if the class name is set
    newDiv.appendChild(newContent);               //adding text node to new div
    let currentDiv= document.getElementById("lists");   //add new element to dom
    document.body.insertBefore(newDiv,currentDiv);
    

} 
function createComponents(value)
{
    
}