import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Hello World</h1>
          <App2 />
          <Cat />
        </div>

    );
  }
}

const App2 = () => {
  return(
    <div>
      <h1>へーい</h1>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <h2>おれはねこ</h2>
}

export default App;
