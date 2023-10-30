import { useState} from "react";
const App = ()=>
{
  const[todo, setTodo] = useState([])
  const [counter, setCounter] = useState(1)

  function addTodo()
  {
    console.log("-----addTodo------")
    let tempTodo = document.getElementById("todoInput").value
    console.log("tempTodo:"+tempTodo)

    addToArray(tempTodo, false)
    document.getElementById("todoInput").value = ""
  }



  function addToArray(text, completed)
  {
    let tempTodoObject = {
      id: counter,
      text: text,
      completed: completed
    }
    todo.push(tempTodoObject)
    console.log(todo)
    console.log("todo: "+todo)
    setTodo([...todo])
    setCounter(counter+1)
  }



  function deleteTodo(id)
  {
    console.log("-----------deleteTodo-------------")
    let tempTodo = todo.filter(element =>
    {
      return element.id != id
    })
    setTodo([...tempTodo])

  }




  function mock()
  {
    if(todo.length >0)
    {
      addToArray(todo[todo.length-1].id+1,"Todo 1",true)
      addToArray(todo[todo.length-1].id+1,"Todo 2",false)
      addToArray(todo[todo.length-1].id+1,"Todo 3",false)
      addToArray(todo[todo.length-1].id+1,"Todo 4",false) 
    }
    else
    {
      addToArray(0,"Todo 1", true)
      addToArray(todo[todo.length-1].id+1,"Todo 2",false)
      addToArray(todo[todo.length-1].id+1,"Todo 3",false)
      addToArray(todo[todo.length-1].id+1,"Todo 4",false)
    }
  }

  

  return <div>
    <h1>TO-do Application</h1>
    <button onClick={()=>mock()}>Mock</button>
    <input type="text" id="todoInput" placeholder="Enter todo here"/>
    <button onClick={()=>addTodo()}>Add To-do</button>
    {
    todo.map(element=>
    {


      return<div> 
        {
         element.completed ? 
        <div>
         <input type="checkbox" checked/> 
         <s>{element.text+"    "}</s>
         <button onClick={()=>deleteTodo(element.id)}>Delete</button>
         </div> : 
         <div>
         <input type="checkbox"></input>
         {element.text+"   "}
         <button onClick={()=>deleteTodo(element.id)}>Delete</button>
        </div> 
         }
         </div>
    })

  }</div>
}

    
export default App;