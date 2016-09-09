import _ from 'lodash';
import React from 'react';

import './App.css';
import Header from './header.js'
import Content from './content.js'
import Footer from './footer.js'


const App = React.createClass({
    displayName: 'App',

    getInitialState(){
        return {
            numberOfCards: 0,
            cards: {},
            images:[],
            flipped:[],
        }
    },

    handleStartNewGame(){

        const numberOfCards = 6

        let images = [
            {id:0,src:"😜"},
            {id:1,src:"🌴"},
            {id:2,src:"💖"}
        ]

        let cards = {};
        images =_.shuffle(_.concat([], images, images));

        for (let i = 0; i < numberOfCards; i++) {
            cards[i] = {
            id:i,
            images: images[i],
            isFlipped:false,
            }
        }

        this.setState({
            numberOfCards: numberOfCards,
            cards: cards,
            images: images
        })
},

    flipCard(cardID) {

        let cards = _.cloneDeep(this.state.cards);
        cards[cardID].isFlipped= true

        let flipped = _.cloneDeep(this.state.flipped);

        if (!_.isEqual(flipped[0], cards[cardID])){
            flipped.push(cards[cardID])
        }

        this.setState({
            cards: cards,
            flipped: flipped,
        }, () => {
            if (flipped.length === 2) {
                this.checkIfHit(flipped, cards)
            }
        })
    },

    checkIfHit(flipped, cards){
        const cardOne = flipped[0]
        const cardTwo = flipped[1]
        if (cardOne.images.id === cardTwo.images.id) {
            delete cards[cardOne.id]
            delete cards[cardTwo.id]

        } else {
          cards[cardOne.id].isFlipped = false
          cards[cardTwo.id].isFlipped = false
        }

    setTimeout(()=> {
            this.setState({
            cards: cards,
            flipped:[],
        },)
    },1000)
},

  render() {
    return (
      <div className="App">
        <Header/>
        <Content
            cards={this.state.cards}
            flipCard={this.flipCard}
            numberOfCards={this.state.numberOfCards}
        />
        <Footer
            handleStartNewGame={this.handleStartNewGame}
        />
      </div>
    );
  }
})

export default App;
