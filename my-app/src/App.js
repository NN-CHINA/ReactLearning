import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './button.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      isLoggedIn:false,
      isToggleOn:true,
      date:new Date()
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentwillUnmount() {
    clearInterval()
  }

  tick() {
    this.setState(
      {
        date: new Date()
      }
    )
  }

  handleClick() {
    this.setState(
      preState => ({
        isToggleOn:!preState.isToggleOn
      })
    )
  }

  deleteRow(props) {
    console.log(props);
  }

  render() {
    //方式一
    const reactWelcome1 =  <h1 className="App-title">Welcome to React</h1>
    //方式二
    const reactAuthor = React.createElement(
      'h1',
      {className: "App-subTitle"},
      'Author:NN'
    )
    const onAndOffButton = <button className='LoginOrLogoutButton' onClick={this.handleClick}>{this.state.isToggleOn ? 'On' : 'Off'}</button>
    const isLoggedIn = this.state.isLoggedIn
    const loginOrLogoutButton = (isLoggedIn ? <LoginButton/> : <LogoutButton/>)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {reactWelcome1}
          {reactAuthor}
        </header>
        <p className="App-intro">
          Current time is {this.state.date.toLocaleTimeString()}.
        </p>

        <Greeting isLoggedIn={isLoggedIn}/>
        {loginOrLogoutButton}
        {onAndOffButton}
        <button onClick={(e) => this.deleteRow('1', e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this,'2', 3)}>Delete Row</button>
      </div>
    );
  }
}
//条件渲染
//函数可作为控件使用，常量需要带{};
function UserGreeting(props) {
  return <h2>Welcome back!</h2>;
}

function GuestGreeting(props) {
  return <h2>Please Sign up.</h2>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />;
}
//条件渲染与元素变量组合
function LoginButton(props) {
  return (
    <button className='LoginOrLogoutButton'>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <BaseButton title={'Logout'}>
    </BaseButton>
  )
}

function BaseButton(props) {
  return (
    <button className='LoginOrLogoutButton' onClick={
      (e) => {
        e.preventDefault();
        console.log('prevent success!');
      }
    }>
      {props.title}
    </button>
  );
}

export default App;
