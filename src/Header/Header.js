import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'bulma-utilities/css/bulma-utilities.css';
import './Header.css';

class Header extends Component {
  render() {
    return (<section className={"hero " + this.props.className}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            {this.props.children}
          </h1>
        </div>
      </div>
    </section>);
  }
}

export default Header;
