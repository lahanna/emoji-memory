import _ from 'lodash';
import React from 'react';

import './content.css';
import Card from './card.js'

const Content = React.createClass({
    displayName: 'Content',

propTypes:{
    cards: React.PropTypes.object,
    numberOfCards: React.PropTypes.number,
    flipCard: React.PropTypes.func,
},

    renderCards(){
    const cardList =_.map(this.props.cards, (card) =>{
        return (
            <Card key={card.id}
                id={card.id}
                image={card.images}
                isFlipped={card.isFlipped}
                flipCard={this.props.flipCard}
            />
        )
    })
    return cardList
},

render() {
    return (
      <div className="Content">
      {this.renderCards()}
      </div>
    );
  }
})

export default Content;
