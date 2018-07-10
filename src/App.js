import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const profiles = [
      {name: "koki" ,age: 26},
      {name: "rokio" ,age: 27},
      {name: "kotaro", age: 30}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default App;
