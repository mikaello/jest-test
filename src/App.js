import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'

export const ListOfCrackers = ({ crackerList }) => (
  <div>
    <h4>Bøllene her på huset er:</h4>
    <ul>
      {crackerList.length > 0
        ? crackerList.map((cracker, index) => <li key={index}>{cracker}</li>)
        : 'Ingen bøller :-('}
    </ul>
  </div>
)

class App extends Component {
  addCracker() {
    return (
      <div>
        <h4>Legg til bølle:</h4>
        <input ref="newCracker" />
        <button
          type="submit"
          onClick={() => {
            this.props.blameBottleCracker(this.refs.newCracker.value)
            this.refs.newCracker.value = ''
          }}
        >
          Trykk for å legge til en BØLLE
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Velkommen til Jest workshop i React, sjefen er {this.props.theBoss}
          </h2>
        </div>

        <p className="App-intro">
          Please skaff en ny sjef:
        </p>
        <input
          onChange={boss => this.props.anotherBossPlease(boss.target.value)}
        />

        <ListOfCrackers crackerList={this.props.bottleCrackers} />

        {this.addCracker()}

      </div>
    )
  }
}

const ConnectedPage = connect(
  state => ({
    theBoss: state.sjefen,
    bottleCrackers: state.kolbeknusere,
  }),
  dispatch => ({
    anotherBossPlease: newBoss => dispatch({ type: 'KICK_THE_BOSS', newBoss }),
    blameBottleCracker: bottleCracker =>
      dispatch({ type: 'BLAME_CRACKER', bottleCracker }),
  })
)(App)

export default ConnectedPage
