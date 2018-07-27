import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'bulma-utilities/css/bulma-utilities.css';
import './Card.css';



class Card extends Component {
  render() {
    if(this.props.type === "question")
    {
      const {question, number} = this.props;
      return (
        <div className={"card has-padding-5 has-margin-1 " + this.props.className}>
            <p className="title is-4 has-margin-b-1">Question {number}</p>
            <p className="subtitle ">{question}</p>
        </div>);
    } else {
      const {options, rightAnswer} = this.props;
      const inputOptions = options.map( option =>
        <div key={options.id} className="column">
          <label className="radio subtitle has-margin-l-2 is-6 is-pulled-left">
            <input type="radio" name="rsvp" value={option.index} />
            <span className="has-margin-l-5">{option.answer}</span>
          </label>
        </div>
      );
      return (
      <div className={"card has-padding-5 has-margin-1 " + this.props.className}>
        <p className="title is-4 has-margin-b-5">Choose your answer</p>
        {inputOptions}
      </div>
    );
    }

    }
  }
  export default Card;
