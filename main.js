

let todoLists= [];
let newContent;
function addTodo(){
    let newTodo= document.getElementById("todoText").value;
    todoLists.push(newTodo);
    console.log(todoLists);
    document.getElementById("todoText").value=" ";
    addtodoList();

}

function addtodoList(){
    for(i=0;i<todoLists.length;i++){
         newContent= document.createTextNode(todoLists[i]);  // giving content

    }
 
    let newDiv= document.createElement("div");  //creating div element  
        newDiv.style.height="35px";
        newDiv.style.color="white";
        newDiv.style.backgroundColor="#6E6B6B";
        newDiv.style.width="500px";
        newDiv.style.fontWeight="bolder";
        newDiv.style.fontSize="20px";
        newDiv.style.margin="auto";
        newDiv.style.borderRadius="8px";
        newDiv.style.border="2px solid #524e4e";
        newDiv.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        newDiv.style.marginTop="10px";

    newDiv.classList.add("taskslist");          //setting class name
   


    console.log(newDiv.className);              //trial if the class name is set
    newDiv.appendChild(newContent);               //adding text node to new div
    let currentDiv= document.getElementById("lists");   //add new element to dom
    document.body.insertBefore(newDiv,currentDiv);
    

} 
