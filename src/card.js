import React from 'react';

import './card.css';

const Card = React.createClass({
    displayName: 'Card',

    propTypes:{
        id:React.PropTypes.number,
        image:React.PropTypes.object,
        isFlipped:React.PropTypes.bool,
        flipCard: React.PropTypes.func,
    },

  render() {
    let image = null
    if (this.props.isFlipped) {
        image = (
            <div className="emoji">{this.props.image.src}</div>
        )
    }
    return (
      <div className="Card" onClick={this.props.flipCard.bind(null,this.props.id)}>
      {image}
     </div>
    );
  }
})

export default Card;
