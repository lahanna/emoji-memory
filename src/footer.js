import React from 'react';

import './footer.css';
import NewGame from './newgame.js'

const Footer = React.createClass({
    displayName: 'Footer',

    propTypes: {
        handleStartNewGame: React.PropTypes.func
    },

  render() {
    return (
      <div className="Footer">
      <NewGame handleStartNewGame={this.props.handleStartNewGame} />
      <div className="madeBytext">
        <p>Made with 💜 <a href="http://www.tjejerkodar.se">Tjejerkodar </a>💻 <a href="https://hannaolsson.com">Hanna Olsson </a>💁</p>
        </div>
      </div>
    );
  }
})

export default Footer;
