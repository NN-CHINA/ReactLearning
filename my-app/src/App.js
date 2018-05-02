import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //方式一
    const reactWelcome1 =  <h1 className="App-title">Welcome to React</h1>
    //方式二
    const reactAuthor = React.createElement(
      'h1',
      {className: "App-subTitle"},
      'Author:NN'
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {reactWelcome1}
          {reactAuthor}
        </header>
        <p className="App-intro">
          Start
        </p>
      </div>
    );
  }
}


export default App;
