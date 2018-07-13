import React, { Component } from 'react'
import { fire } from '../../modules/firebase'


export default class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount () {

  }

  handleSubmit (e) {
    e.preventDefault()
    fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((data) => console.log(data))
      .catch( (error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.')
        } else {
          alert(errorMessage)
        }
        console.log(error)
      })

  }

  render () {
    return (
      <div>
        <h1>Logga in</h1>
        <form onSubmit={this.handleSubmit}>

          <label>
            Användarnamn:
            <input type={'text'} value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
          </label>

          <label>
            Lösenord:
            <input type={'text'} value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
          </label>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
