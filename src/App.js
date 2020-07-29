import React, { Component } from 'react';
import Tone from 'tone';
import Keyboard from './components/Keyboard.js'

class App extends Component {
  constructor(props) {
    super(props)
  };

  
  
  render() {
    return (
      <div className="App">
        <Keyboard />
      </div>
    );
  }
}

export default App;
