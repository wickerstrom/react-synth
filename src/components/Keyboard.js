import React, { Component } from 'react';
import Tone from 'tone';
import './Keyboard.css'

class Keyboard extends Component {
    constructor(props) {
      super(props)
    };
    handleCheck(e) {
      let currentTone = e.target.className;
      var synth = new Tone.Synth( ).toMaster()

      var map = new Map(
        [
          ["white c",'C4'],
          ["black cs",'C#4'],
          ["white d",'D4'],
          ["black ds",'D#4'],
          ["white e",'E4'],
          ["white fs",'F4'],
          ["black fs",'F#4'],
          ["white g",'G4'],
          ["black gs",'G#4'],
          ["white a",'A4'],
          ["black as",'A#4'],
          ["white b",'B4']
        ]
      );

      synth.triggerAttackRelease(map.get(currentTone), '15n')

    }


  
    render() {
      return (
        <div>
          <ul className="set">            
            <li onClick={this.handleCheck} className="white c"></li>
            <li onClick={this.handleCheck} className="black cs"></li>
            <li onClick={this.handleCheck} className="white d"></li>
            <li onClick={this.handleCheck} className="black ds"></li>
            <li onClick={this.handleCheck} className="white e"></li>
            <li onClick={this.handleCheck} className="white fs"></li>
            <li onClick={this.handleCheck} className="black fs"></li>
            <li onClick={this.handleCheck} className="white g"></li>
            <li onClick={this.handleCheck} className="black gs"></li>
            <li onClick={this.handleCheck} className="white a"></li>
            <li onClick={this.handleCheck} className="black as"></li>
            <li onClick={this.handleCheck} className="white b"></li>
          </ul>  
        </div>
      );
    }
  }
  
  export default Keyboard;