import React, { Component } from 'react'
import './app.css'
import ReactImage from './react.png'
import Highscore from './components/highscore/highscore'
import SuggestionForm from './components/suggestions/suggestionForm'
import { Suggestions } from './components/suggestions/suggestions'
import SignIn from './components/signIn/signIn'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {username: null}
  }

  componentDidMount () {
    // fetch('/api/user')
    //   .then(res => res.json())
    //   .then(user => this.setState({username: user.username}))
  }

  render () {
    return (
      <div>
        {this.state.username ? (
          <h1>
            Hello
            {this.state.username}
          </h1>
        ) : (
          <h1>
            Loading.. please wait!
          </h1>
        )}
        {/* <img src={ReactImage} alt="react" /> */}
        <SignIn/>
        <Highscore/>
        <SuggestionForm/>
        <Suggestions/>
      </div>
    )
  }
}
