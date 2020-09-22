import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'

const circleNo = ['0', '1', '2', '3']

class App extends Component {
  
  state = {
    circleIdx: 0
  }

  handleCircleChoice = (idx) => {
    this.setState({ circleIdx: idx })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 3 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            circleNo={circleNo}
            circleIdx={this.state.circleIdx}
            handleCircleChoice={this.handleCircleChoice}
          />
          <Circles
            circleNo={circleNo}
            circleIdx={this.state.circleIdx}
            handleCircleChoice={this.handleCircleChoice}
          />
        </main>
      </div>
    );
  }
}

export default App;