import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="game-box">

          <h1>Calc 24</h1>

          <div className="input-box">
              <input type="text" maxLength="1"/>
              <input type="text" maxLength="1"/>
              <input type="text" maxLength="1"/>
              <input type="text" maxLength="1"/>
              <button>GO</button>
          </div>

          <div className="result-box">
              <ul>
                  <li>((5+7)-8)*6</li>
                  <li>(5+(7-8))*6</li>
                  <li>(5+7)*(8-6)</li>
                  <li>(5-(8-7))*6</li>
                  <li>((5+7)-8)*6</li>
                  <li>(5+(7-8))*6</li>
              </ul>
          </div>

      </div>
    );
  }
}

export default App;
