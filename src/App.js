import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component() {
  constructor(props){
      super(props);

      this.state = {
        title:'nathan',
        headerLinks: [
          {title: 'home', path: '/'},
          {title: 'About', path: '/'},
          {title: 'Contact', path: '/'}
        ]

      }
      
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
