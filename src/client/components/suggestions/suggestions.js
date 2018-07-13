import React, { Component } from 'react';
import { fire } from '../../modules/firebase';

export class Suggestions extends Component {
  constructor(props) {
    super(props);

    this.state = { suggestions: [] };
    this.suggestionsRef = fire.database().ref('/suggestions');
  }

  componentDidMount() {
    this.suggestionsRef.on('value', (snapshot) => {
      let suggestions = [];
      snapshot.forEach( s => {
        suggestions.push(snapshot.val()[s.key])
      })
      this.setState({ suggestions: suggestions });
    }, (error) => {
      console.log(error);
    });
  }



  render() {
    return (
      <div>
        <h1>Suggestions</h1>
        {this.state.suggestions.map( s => {
          return (
            <div key={s.timestamp}>
              <h4>{` Till: ${s.to} poäng: ${s.points} från: ${s.from} tid: ${s.timestamp} `}</h4>
              <p>{s.description}</p>
          </div>
          )
        })}
      </div>
    );
  }
}
