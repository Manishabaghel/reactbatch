//import logo from './logo.svg';
import React, { useState } from 'react';

const App = () =>
{ 
  const [todo, setTodo] = useState([]);
  const [todoEditing, setTodoEditing] = useState(-1)

  function addTodo(event)
  {
    event.preventDefault()
    console.log("---------------addTodo---------------")
    let newTodo = document.getElementById('todoInput').value
    console.log("Reded the new todo: "+newTodo)
    console.log(todo)
    addTodoData(todo.length, newTodo)
  }

  function addMockData()
  {
    addTodoData(todo.length, "Need to complete assignement")
    addTodoData(todo.length, "Todo 2")
    addTodoData(todo.length, "Todo 3")
    addTodoData(todo.length, "Todo 4")
    addTodoData(todo.length, "Todo 5")
    addTodoData(todo.length, "Todo 6")
  }

  function addTodoData(id, text)
  {
    let tempTodo = {
      id: id,
      text: text,
    }
    todo.push(tempTodo)
    console.log(todo)
    setTodo([...todo])
    document.getElementById('todoInput').value = ""
  }

  function deleteTodo(id)
  {
    console.log("---------------Delete---------------")
    console.log("id: "+id)
    let updateTodo = todo.filter(element=>
      {
        return element.id != id
      })
    setTodo([...updateTodo])
  }

  return <div>
          <h1>To-do List</h1>
          <button onClick={()=>addMockData()}>Mock Data</button>
          <form onSubmit={addTodo}>
            <input type='text' id='todoInput'/>
            <button type='submit'>Add Todo</button>
          </form>
          {todo.map((tempTodo)=>
          {
            return <div>
                <div>
                  {
                    todoEditing == 0 ? 
                    tempTodo.text : 
                    ( todoEditing == tempTodo.id ? 
                      <input type='text' id='todoEditingInput' value={tempTodo.text}/> :
                      tempTodo.text
                    )
                  }          
                </div>
                <button onClick={()=>deleteTodo(tempTodo.id)}>Delete</button>
                { 
                  todoEditing == 0 ? 
                  <button onClick={()=>setTodoEditing(tempTodo.id)}>Edit</button> : 
                  ( 
                    todoEditing == tempTodo.id ?
                    <button >Save to-do</button> :
                    <button onClick={()=>setTodoEditing(tempTodo.id)}>Edit</button>
                  )
                }
                
                
              </div>
          })}
         </div>
}








































/*class InnerComponent extends React.Component
{
  render()
  {
    return <div>Inner component is here</div>

  }
  componentDidMount()
  {
    console.log("####Mounting InnerComponent####")
  }
  componentWillUnmount()
  {
    console.log("****Unmounting InnerComponent*****")
  }

}
class App extends React.Component
{
  state = {counter:0, innerComponent:<InnerComponent/>}
  constructor(props)
  {
    super(props)
    console.log("I am inside Constructor")
  }
  static getDerivedStateFromProps()
  {
    console.log("I am inside getDerivedStateFromProps")
    return true
  }

  incrementCounter = () =>
  {
    //updating state on function call
    this.setState({counter:this.state.counter+1})
    if(this.state.counter % 2 === 0)
    {
      this.setState({innerComponent:<InnerComponent/>})
    }
    else
    {
      this.setState({innerComponent:<div>Unmounted</div>})
    }
  }
  //Overridden render function
  render()
  {
    console.log("Inside the render method")
    console.log(this.props)
    return (
      <div>
        <button onClick={this.incrementCounter}>click me</button>
        <br/>
        Counter:{this.state.counter}
        <br/>
        <div>{this.state.innerComponent}</div>
        </div>
    )
  }
  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log("Inside getSnapshotBeforeUpdate")
    console.log("Previous Prop:")
    console.log(prevProps)
    console.log("Previous State:")
    console.log(prevState)
    console.log("---------------")
    console.log("Update Prop:")
    console.log(this.props)
    console.log("Update State:")
    console.log(this.state)
    return true
  }
  componentDidMount()
  {
    console.log("I am inside componentDidMount")
  }
}

function App(props)
{
  let [counter, setCounter] = useState(0)
  counter = 0
  console.log(props.color)
  console.log(props.size)
  console.log(props.clickEvent)
  return (
    <div className="App">
      <button onClick={() => setCounter(counter+1)}>Click me</button>
      <div>
        Counter is:{counter}
      </div>
    </div>
  );
}



function handleClick(event)
{
  event.preventDefault()
  //console.log("handleClick is clicked")
  let newTodo = document.getElementById("addTodo").value
  let newTodoObject = {
    id: new Date().getTime(),
    text: newTodo,
  }
  //console.log("Text readed: "+newTodo)
  //console.log(newTodoObject)
  //console.log(this.state)
  //this.setState({counter:this.state.counter+1})
  this.state.todo.push(newTodoObject)
  this.setState({todo:this.state.todo})
  console.log(this.state)
  document.getElementById("addTodo").value = ""
  this.state.todo.map((tempTodo) =>{
    return ("ID:"+tempTodo.id+", Text: "+tempTodo.text)
  })
  //alert("clicked")

}

function App(props)
{
  const [todos, steTodo] = useState([])
return (
  <div>
    <h1>ToDO list</h1>
    <form onSubmit={handleClick}>
      <input type="text" id='addTodo'/>
      <button type='submit'>Add  to-do</button>
    </form>
    <div>
      {this.state.todo.map((tempTodo) =>
      {
        return <div>{tempTodo.text}</div>
      })
      }
      
    </div>
  </div>
      );
    }*/




export default App;
















/*function App(props) 
{
  console.log(props.color)
  console.log(props.size)
 
  return (
    <div className="App">
      <button onClick={props.clickEvent}>click me</button>
    </div>
  );
}*/


