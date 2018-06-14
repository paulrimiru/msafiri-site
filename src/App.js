import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    console.log('my props', this.props)
    return (
      <div>
        App here
        { this.props.children }
      </div>
    );
  }
}

export default App;
