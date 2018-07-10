import React, { Component } from 'react';

class App extends Component {
  render() {
    const profiles = [
      {name: "koki" ,age: 26},
      {name: "rokio" ,age: 27}
    ]
    return (
        <div>
          {
            profiles.map((profile, index) => {
              return <User name={profile.name} age={profile.age} key={index}/>
            })
          }
        </div>
    );
  }
}



const User = (props) => {
  return <div>I am {props.name}. I am {props.age}!!</div>
}

User.defaultProp

export default App;
