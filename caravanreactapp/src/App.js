import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import component from 'react';
import React from 'react';

//Child Component to Display Cards on Track
function Track(props){
  const listCards = props.cards.map((card) => <li key={card.code}>{card.code}</li>);
  return(
    <div id={props.name}>
      <h2>{props.name}</h2>
      <ul>{listCards}</ul>
    </div>
  )
}
//Child Component to Display Cards in Hand
function Hand(props){
  const handCards = props.cards.map((card) => <li onClick={this.selectCard} key={card.code}>{card.code}</li>);
  return(
    <div id={props.name}>
      <ul>{handCards}</ul>
  </div>
  )
}
  //Table
  class Table extends React.Component{
    constructor(props){
      super(props);
      this.state={

      }
    }
    render(){
      return(
        <div>The Table Component</div>
      )
    }
  }
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
        tracks: [[],[],[]],
      }
    }
    renderTrack(i){
      return(
        <Track
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
    selectCard(){
      //TODO Get functionality to select a card and store the object in the state of the game
    }
    selectTrack(){
      //TODO Get functionality to select a track and sotre the object in the state of the game
    }
    newCard(i){
      axios({
        method: 'get',
        url: 'https://deckofcardsapi.com/api/deck/'+ i.state.playersDeckID +'/draw/?count=1',
        responseType: 'json',
      })

      .then(function (response){    
        var res = response.data.cards[0];
        var currentHand = i.state.playersHand;  
        currentHand.push(res);
        console.log(res);
        //Correct Obj
        console.log(currentHand);
        //Array Full of Objs
        //console.log(newHand);
        //8?????

        i.setState({
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
      i.state.tracks[0].push(selectedCard);
      //Remove Card from Hand & Replace
      const altHand = i.state.playersHand
      altHand.shift();
      i.setState({
        playersHand: altHand,
      })
    }

    newDeck(i){
      axios({
        method: 'get',
        url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
        responseType: 'json',
      })

        .then(function (response) {
          console.log(response.data.deck_id);
          i.setState({
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
              <Track name="Dayglow" cards={this.state.tracks[0]} />
              <Track name="New Reno" cards={this.state.tracks[1]} /> 
              <Track name="The Hub" cards={this.state.tracks[2]} />  
              <Hand name="playersHand" cards={this.state.playersHand} />
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
