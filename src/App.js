import logo from './logo.svg';
import './App.css';

function App(props) 
{
  console.log(props.color)
  console.log(props.size)
 
  return (
    <div className="App">
      <button onClick={props.clickEvent}>click me</button>
    </div>
  );
}

export default App;
