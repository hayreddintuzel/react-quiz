import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
//Styles
import 'bulma/css/bulma.css';
import 'bulma-utilities/css/bulma-utilities.css';
import './App.css';
//Components
import Header from './Header/Header.js';
import Container from './Container/Container.js';
import Card from './Card/Card.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      question: "",
      options: [],
      answer: "",
      questionNumber : 0,
      useranswer : "",
      answerStatus : null,
      rightAnswerCount : 0,
      wrongAnswerCount : 0,
      emptyAnswerCount : 0
    }
  }

setQuestion(Newquestion) {
  this.setState({
     id : Newquestion.id,
     question: Newquestion.question,
     options: Newquestion.options,
     answer: Newquestion.answer,
   });
}

check = () => {
  const temprightAnswerCount = this.state.rightAnswerCount;
  const tempwrongAnswerCount = this.state.wrongAnswerCount;
  if(this.state.useranswer === this.state.answer){
      this.setState({
        answerStatus : true,
        rightAnswerCount : temprightAnswerCount + 1
      });
  } else {
    this.setState({
      answerStatus : false,
      wrongAnswerCount : tempwrongAnswerCount + 1
    });
  }
}

  componentDidMount() {

    var newQuestion;
    var questionNumber;
    if(this.state.questionNumber === 0)
    {
      questionNumber = 1;
    } else {
      questionNumber = this.state.questionNumber + 1
    }
    axios.get('http://localhost:3004/questions', {
    params: {
      id: questionNumber
    }
  })
  .then(function (response) {
    newQuestion = response.data[0];
    console.log(newQuestion);
  })
  .then(question => this.setQuestion(newQuestion))
  .catch(function (error) {
    console.log(error);
  });

  }

  render() {
    if(this.state.question === "")
    {
      return <div className="App">
      </div>
    }
    if(this.state.answerStatus === true){
      swal("Good job!", "You answered rightly", "success");
    } else if(this.state.answerStatus === false) {
      swal("Sorry!", "You answered wrongly", "error");
    }
    return (
      <div className="App">
        <Header className="is-primary">This is App`s Header</Header>
        <Container className="has-margin-t-3">
          <div className="columns">
            <div className="column">
              <Card question={this.state.question} type="question" number={this.state.questionNumber} ></Card>
            </div>
            <div className="column">
              <Card type="answer" options={this.state.options}></Card>
            </div>
          </div>
        </Container>
        <Container>
          <div className="columns">
              <div className="column is-4"></div>
              <a className="column is-2 button is-danger controlButton">Pass</a>
              <a className="column is-2 button has-margin-l-5 is-success controlButton" onClick={this.check}>Confirm</a>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
