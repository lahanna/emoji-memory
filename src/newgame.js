import React from 'react';

import './newgame.css';

const NewGame = React.createClass({
    displayName: 'NewGame',

    propTypes: {
        handleStartNewGame: React.PropTypes.func
    },

  render() {
    return (
      <div className="NewGame">
      <button className="purpleButton" onClick={this.props.handleStartNewGame}>
      👆Start game👆
      </button>
      </div>
    );
  }
})

export default NewGame;
