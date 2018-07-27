import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.css';
import 'bulma-utilities/css/bulma-utilities.css';
import './Buttons.css';



class Buttons extends Component {

  render(){
    let buttonsPart;

    if(this.props.status === "question"){
      buttonsPart = (<div className="columns">
                        <div className="column is-4"></div>
                        <a className="column is-2 button is-danger controlButton">Pass</a>
                        <a className="column is-2 button has-margin-l-5 is-success controlButton" onClick={this.props.check}>Confirm</a>
                    </div>)
    } else if( this.props.status === "evaluate") {
      buttonsPart = (<div className="columns">
                        <div className="column is-4"></div>
                        <a className="column is-4 button is-warning controlButton" onClick={this.props.nextQuestion}>
                          Next
                          <FontAwesomeIcon className="is-pulled-right has-margin-r-2" icon={faArrowAltCircleRight} size="lg"/>
                        </a>
                    </div>)
    }
      return buttonsPart;
    }

  }
  export default Buttons;
