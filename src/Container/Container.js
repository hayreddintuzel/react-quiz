import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'bulma-utilities/css/bulma-utilities.css';
import './Container.css';

class Container extends Component {
  render() {
    return (<div className={"container " + this.props.className}>
          {this.props.children}
      </div>)
    }
  }
  export default Container;
