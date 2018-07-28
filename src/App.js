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
import Buttons from './Buttons/Buttons.js';
import Results from './Results/Results.js';



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
      rightAnswerCount : 0,
      wrongAnswerCount : 0,
      emptyAnswerCount : 0,
      quizstatus : "question",
    }
  }

setQuestion(Newquestion) {
  if(Newquestion === undefined)
  {
    this.setState({
      quizstatus : "finish",
    });
  }
  const newQuestionNumber = this.state.questionNumber + 1
  this.setState({
     id : Newquestion.id,
     question: Newquestion.question,
     options: Newquestion.options,
     answer: Newquestion.answer,
     questionNumber :newQuestionNumber
   });
}

check = () => {
  const temprightAnswerCount = this.state.rightAnswerCount;
  const tempwrongAnswerCount = this.state.wrongAnswerCount;
  if(this.state.answer == this.state.useranswer){
    swal("Good job!", "You answered rightly", "success");
    this.setState({
      rightAnswerCount : temprightAnswerCount + 1,
      quizstatus : "evaluate",
    });
  } else {
    swal("Sorry!", "You answered wrongly", "error");
    this.setState({
      wrongAnswerCount : tempwrongAnswerCount + 1,
      quizstatus : "evaluate",
    });
  }
}

pass = () => {
  const tempemtyAnswerCount = this.state.emptyAnswerCount;
    this.setState({
      emptyAnswerCount : tempemtyAnswerCount + 1,
      quizstatus : "evaluate",
    });
  }

  getAnswer = (e) => {
    const userAnswer =  e.currentTarget.value;
    this.setState({
      useranswer : userAnswer,
    });
  }

  nextQuestion = () => {

    var newQuestion;
    var questionNumber;
    questionNumber = this.state.questionNumber + 1;

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

  this.setState({
      quizstatus : "question",
   });

  }

  componentDidMount() {
    var newQuestion;
    var questionNumber;
    if(this.state.questionNumber === 0)
    {
      questionNumber = 1;
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
      return (
        <div className="App">
        </div>
      )
    }

    if(this.state.quizstatus === "finish")
    {
      return (
      <div className="App">
        <Header className="is-primary">This is Apps Header</Header>
        <Container className="has-margin-t-1">
          <article className="message is-danger has-margin-t-1">
            <div className="message-header">
              <p>Quiz is Finished</p>
            </div>
            <div className="message-body">
              <Container className="has-margin-t-1">
                <Results rightAnswer={this.state.rightAnswerCount} emptyAnswer={this.state.emptyAnswerCount} wrongAnswer={this.state.wrongAnswerCount}/>
              </Container>
            </div>
          </article>
        </Container>
      </div>
      )
    }


    return (
      <div className="App">
        <Header className="is-primary">This is Apps Header</Header>
        <Container className="has-margin-t-1">
          <Results rightAnswer={this.state.rightAnswerCount} emptyAnswer={this.state.emptyAnswerCount} wrongAnswer={this.state.wrongAnswerCount}/>
        </Container>
        <Container className="has-margin-t-3">
          <div className="columns">
            <div className="column">
              <Card question={this.state.question} type="question" number={this.state.questionNumber} ></Card>
            </div>
            <div className="column">
              <Card type="answer" options={this.state.options} onChange={this.getAnswer} status={this.state.quizstatus}></Card>
            </div>
          </div>
        </Container>
        <Container>
            <Buttons status={this.state.quizstatus} check={this.check} pass={this.pass} nextQuestion={this.nextQuestion}></Buttons>
        </Container>

      </div>
    );
  }
}

export default App;
