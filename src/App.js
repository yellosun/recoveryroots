import React, { Component } from 'react'
import './App.css'

class App extends Component {

  componentDidMount() {
    fetch('/api/users')
    .then(r=> r.json())
    .then(r=> console.log(r))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
