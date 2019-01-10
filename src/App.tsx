import React, { Component } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import history from './history'

interface Props {}
interface State {}

class App extends Component<Props, State> {
  
  componentDidMount() {
    fetch('/api/users')
    .then(r=>r.json())
    .then(r=> console.log(r))
  }

  render() {
    return (
      <Router history={history}>
        
      </Router>
    )
  }
}

export default App
