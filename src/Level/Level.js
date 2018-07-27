import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'bulma-utilities/css/bulma-utilities.css';
import './Level.css';
import Card from '../Card/Card.js';


class Level extends Component {
  render() {
    return (
      <div className={"level " + this.props.className}>
        <div class="level-right" >
          <div class="level-item">
            <Card>
              <div class="card-content">
                <div class="content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div class="level-right" >
          <div class="level-item">
            <Card>
              <div class="card-content">
                <div class="content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Level;
