import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import component from 'react';
import React from 'react';
import Card from './components/Card.js';
import Hand from './components/Hand.js';
import Tabel from './components/Tabel.js';
import Track from './components/Track.js';





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
    }
    renderTrack(i){
      return(
        <Track
          onClick={this.props}
          name={this.props}
          cards={this.props}
        />
      )
    }
    renderHand(i){
      return(
        <Hand
          name={this.props}
          cards={this.props}          
        />
      )
    }
    testFunc(){
      console.log('This Works!');
    }
    selectCard(e, state){
      //TODO Get functionality to select a card and store the object in the state of the game
      //console.log(e.target.dataset.index);

      state.setState({
        selectedCard: e.target.dataset.index,
      })
    }

    placeCard(self, i, e){
      //identify the item that was clicked
      const elementType = e.target.localName;
      const hand = self.state.playersHand;
      const card = self.state.playersHand[self.state.selectedCard];
      const tracks = self.state.tracks;
      
      //If empty track was clicked
      if(elementType !== 'li'){
        console.log("Track was clicked");
        //TODO Get functionality to select a track and store the object in the state of the game
        tracks[i].cards.push(card);

        //Removing Card from Hand
        const start = self.state.selectedCard;
        hand.splice(start, 1);

        self.setState({
          tracks: tracks,
          playersHand: hand,
        })
        self.totalTracks(self);
      }else{
        //Get index of the card clicked on
        const targetCardIndex = e.target.dataset.index;
        //Place the card behind the card clicked on
        tracks[i].cards.splice(targetCardIndex + 1, 0, card);
        //Removing Card from Hand
        const start = self.state.selectedCard;
        hand.splice(start, 1);

        self.setState({
          tracks: tracks,
          playersHand: hand,
        })
        self.totalTracks(self);
      }
    }
    jokerEffect(){

    }
    jackEffect(){

    }
    queenEffect(){

    }
    kingEffect(){

    }
    //Function to calculate the total value of the cards placed on the tracks
    totalTracks(self){
      const tracks = self.state.tracks;
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

              self.setState({
                tracks: null,
              })


              
          }
        })
        console.log()
        var i = i + 1;
  
      });
    }
    newCard(self){
      axios({
        method: 'get',
        url: 'https://deckofcardsapi.com/api/deck/'+ self.state.playersDeckID +'/draw/?count=1',
        responseType: 'json',
      })

      .then(function (response){    
        var res = response.data.cards[0];
        var currentHand = self.state.playersHand;  
        currentHand.push(res);
        console.log(res);
        //Correct Obj
        console.log(currentHand);
        //Array Full of Objs


        self.setState({
          playersHand: currentHand,
        })
      })

      .catch(function(error){
        if(error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })     
    }

    moveCard(i){
      //Place Card On Track
      const selectedCard = i.state.playersHand[0];
      i.state.tracks[0].cards.push(selectedCard);
      //Remove Card from Hand & Replace
      const altHand = i.state.playersHand
      altHand.shift();
      i.setState({
        playersHand: altHand,
      })
    }

    newDeck(self){
      axios({
        method: 'get',
        url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
        responseType: 'json',
      })

        .then(function (response) {
          console.log(response.data.deck_id);
          self.setState({
            playersDeckID: response.data.deck_id,
          });
        })
        .catch(function(error){
          if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        })

    }
    playerStart(i){
        axios({
          method: 'get',
          url: 'https://deckofcardsapi.com/api/deck/'+ i.state.playersDeckID +'/draw/?count=8',
          responseType: 'json'
        })

        .then(function (response){    
          console.log(response.data);
          const res = response.data;
          i.setState({
            playersHand: res.cards,
          })
        })

        .catch(function(error){
          if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        })      
    }
    

    //Initialize Game
    componentDidMount(){
      console.log('Game Mounted');

      // GET request for obtaining a deck of shuffled cards
      this.newDeck(this);

    }

      render(){
        return(
          <div>
            <h1>Caravan</h1>
            <button onClick={() => this.playerStart(this)}>Deal</button>
            <button onClick={() => this.moveCard(this)}>Put first card on track.</button>
            <button onClick={() => this.newCard(this)}>End Turn</button>
            <div id='playersSide'>
              <Track name={this.state.tracks[0].name} value={this.state.tracks[0].score} onClick={(e) => this.placeCard(this, 0, e)} cards={this.state.tracks[0].cards} />
              <Track name={this.state.tracks[1].name} value={this.state.tracks[1].score} onClick={(e) => this.placeCard(this, 1, e)} cards={this.state.tracks[1].cards} /> 
              <Track name={this.state.tracks[2].name} value={this.state.tracks[2].score} onClick={(e) => this.placeCard(this, 2, e)} cards={this.state.tracks[2].cards} />  
              <Hand name="playersHand" onClick={(i) => this.selectCard(i, this)} cards={this.state.playersHand} />              
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
