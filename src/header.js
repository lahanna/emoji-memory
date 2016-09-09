import React from 'react';

import './header.css';

const Header = React.createClass({
    displayName: 'Header',

  render() {
    return (
      <div className="Header">
        <h1>Emoji memory</h1>
      </div>
    );
  }
})

export default Header;
