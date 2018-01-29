import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { increment, decrement, undo, redo } from './ducks/counter.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ this.props.currentValue }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => this.props.increment(1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => this.props.increment(5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => this.props.decrement(1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => this.props.decrement(5) }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ this.props.previousValues.length === 0 }
              onClick={ this.props.undo }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ this.props.futureValues.length === 0 }
              onClick={ this.props.redo }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

let actions = {
  increment: increment,
  decrement: decrement,
  undo: undo,
  redo: redo
}

let insAndOuts = connect(mapStateToProps, actions)

export default insAndOuts(App);
