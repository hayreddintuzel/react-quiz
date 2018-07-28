import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.css';
import 'bulma-utilities/css/bulma-utilities.css';
import './Results.css';


class Results extends Component {

  render() {

    return (<nav className="level has-margin-t-1">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading has-text-success">Right Answers</p>
          <p className="title has-text-success">{this.props.rightAnswer}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading has-text-danger">Wrong Answers</p>
          <p className="title  has-text-danger">{this.props.wrongAnswer}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading has-text-warning">No Answers</p>
          <p className="title has-text-warning">{this.props.emptyAnswer}</p>
        </div>
      </div>
    </nav>)

  }

}

export default Results;
