import React, { Component } from 'react';


class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    console.log(this.state.count)
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButon = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <div>Counter: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButon}>-1</button>
      </div>
    )
  }
}



const App = () => <Counter></Counter>



export default App;
