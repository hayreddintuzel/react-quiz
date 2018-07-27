import React, { Component } from 'react';
import axios from 'axios';
//Styles
import 'bulma/css/bulma.css';
import 'bulma-utilities/css/bulma-utilities.css';
import './App.css';
//Components
import Header from './Header/Header.js';
import Container from './Container/Container.js';
import Card from './Card/Card.js';

const options = [
  {"answer":"answer 1", "index":"A", "id":1},
  {"answer":"answer 2", "index":"B", "id":2},
  {"answer":"answer 3", "index":"C", "id":3},
  {"answer":"answer 4", "index":"D", "id":4},
]




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question : ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3004/posts', {
    params: {
      id: 1
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  }

  render() {
    return (
      <div className="App">
        <Header className="is-primary">This is App`s Header</Header>
        <Container className="has-margin-t-3">
          <div className="columns">
            <div className="column">
              <Card question="Could I possibly be a messier house guest?" type="question" number="1" ></Card>
            </div>
            <div className="column">
              <Card type="answer" options={options} rightAnswer="b"></Card>
            </div>
          </div>
        </Container>
        <Container>
          <div className="columns">
              <div className="column is-4"></div>
              <a className="column is-2 button is-danger controlButton">Pass</a>
              <a className="column is-2 button has-margin-l-5 is-success controlButton">Confirm</a>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
