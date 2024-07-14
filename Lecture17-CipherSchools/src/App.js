import logo from './logo.svg';
import './App.css';
import {Component} from "react";
class App extends Component {
  name='Abhinav';
  render() {
    return (
      <>
      <div>
        <h1>Hello {this.name}!</h1>
      </div>
      <div>
        <p>This is MERN Stack Course</p>
      </div>
      </>
    );
  }
}

export default App;