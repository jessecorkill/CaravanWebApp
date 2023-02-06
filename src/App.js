import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import component from 'react';
import React from 'react';
import Card from './components/Card.js';
import Hand from './components/Hand.js';
// import Tabel from './components/Tabel.js';
import {Track} from './components/Track.js';
import {drawFromDeck, genDecks} from './providers/old_deckOfCards.js'

 // Game 
  class Game extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        stepNumber: 0,
        selectedCard: null,
        selectedTrack: null,
        playersTurn: true,
        playersDeckID: null,
        playersHand: [],
        tracks: [          
          {
            name: "Day Glow",
            score: 0,
            cards: [],
            direction: null,
          },
          {
            name: "New Reno",
            score: 0,
            cards: [],
            direction: null,
          },
          {
            name: "The Hub",
            score: 0,
            cards: [],
            direction: null,
          },
        ],
        tracksScore: [0,0,0]
      }

      //Bind Functions
      this.selectCard = this.selectCard.bind(this)
      this.placeCard = this.placeCard.bind(this)
      this.totalTracks = this.totalTracks.bind(this)
      //this.newCard = this.newCard.bind(this)
      this.moveCard = this.moveCard.bind(this)
      // this.newDeck = this.newDeck.bind(this)
      //this.playerStart = this.playerStart.bind(this)
      this.renderTrack = this.renderTrack.bind(this)




    }

    selectCard(e){
      //TODO Get functionality to select a card and store the object in the state of the game
      //console.log(e.target.dataset.index);

      this.setState({
        selectedCard: e.target.dataset.index,
      })
    }

    placeCard(trackIndex, e){
      //identify the item that was clicked
      const elementType = e.target.localName;
      const hand = this.state.playersHand;
      const card = this.state.playersHand[this.state.selectedCard];
      const tracks = this.state.tracks;
      
      //If empty track was clicked
      if(elementType !== 'li'){
        console.log("Track was clicked");
        //TODO Get functionality to select a track and store the object in the state of the game
        tracks[trackIndex].cards.push(card);

        //Removing Card from Hand
        const start = this.state.selectedCard;
        hand.splice(start, 1);

        this.setState({
          tracks: tracks,
          playersHand: hand,
        })
      }else{
        //Get index of the card clicked on
        const targetCardIndex = e.target.dataset.index;
        //Place the card behind the card clicked on
        tracks[trackIndex].cards.splice(targetCardIndex + 1, 0, card);
        //Removing Card from Hand
        const start = this.state.selectedCard;
        hand.splice(start, 1);

        this.setState({
          tracks: tracks,
          playersHand: hand,
        })
        this.totalTracks(this);
      }
    }

    //Function to calculate the total value of the cards placed on the tracks
    totalTracks(){
      const tracks = this.state.tracks;
      tracks.forEach(track => {
        var total = track.score;
        var i = 0;
        track.cards.forEach(cardObj => {
          //sort out basic number cards & assign special values to face cards
          switch(cardObj.value){
            case 'ACE':
              // do thing
              break;
            case 'JACK':
              // do thing
              break;
            case 'QUEEN':
              // do thing
              break;
            case 'KING':
              //do thing
              break;
            default:
              //To Do! Switch this to pull from the new source of Total (in master component)
              total = total + cardObj.value; 

              this.setState({
                tracks: null,
              })              
          }
        })
        console.log()
        var i = i + 1;  
      });
    }

    moveCard(){
      //Place Card On Track
      const selectedCard = this.state.playersHand[0];
      this.state.tracks[0].cards.push(selectedCard);
      //Remove Card from Hand & Replace
      const altHand = this.state.playersHand
      altHand.shift();
      this.setState({
        playersHand: altHand,
      })
    }


    renderTrack(i){
      return(
        <Track name={this.state.tracks[i].name} value={this.state.tracks[i].score} onClick={() => this.placeCard(i)} cards={this.state.tracks[i].cards} />
      )
    }
    
    
    //Initialize Game
    componentDidMount(){
      console.log('Game Mounted');
      // GET request for obtaining a deck of shuffled cards
      let deckIDs = genDecks(1)
      this.setState({
        playersDeckID: deckIDs
      })

    }

      render(){
        return(
          <div>
            <h1>Caravan</h1>
            <button onClick={ () => drawFromDeck(this.state.playersDeckID[0], 8)}>Deal</button>
            <button onClick={this.moveCard}>Put first card on track.</button>
            <button onClick={ () => drawFromDeck(this.playersDeckID[0], 1)}>End Turn</button>
            <div id='playersSide'>
              {this.renderTrack(0)} 
              {this.renderTrack(1)}
              {this.renderTrack(2)}
              <Hand name="playersHand" onClick={this.selectCard} cards={this.state.playersHand} />              
            </div>
            <div>
              <h1>{this.state.selectedCard}</h1>
            </div>
          </div>
        );
      }

  }   

// function App() {
//   return (
//     <div className="App">
//       <Game/>
//     </div>
//   );
// }

export default Game;
