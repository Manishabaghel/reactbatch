//import logo from './logo.svg';
import './App.css';
import React from 'react';
class InnerComponent extends React.Component
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


