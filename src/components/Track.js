import React, {useState, useEffect} from 'react';

//Child Component to Display Cards on Track
export const Track = (props) => {
    
    //Array for displaying cards
    let cardsArr = []
    
    //Handle Click of Card
    const cardClicked = () => {
      //Needs to know what card is trying to be placed

      //and what card it is trying to be placed on
    }

    //Handle Card Placement
    props.cards.forEach((card, index) => {
      //Check if Special or Not
      
    })
    const displayCards = props.cards.map((card, index) => <li data-index={index} value={card.value} key={card.code}>{card.code}</li>);

    //const listCards = props.cards.map((card, index) => <Card data-index={index} key={card.code} value={card.value} code={card.code} />);


    return(
        <a value={props.value} onClick={props.onClick} id={props.name}>
          <h2>{props.name}</h2>
          <p>{props.value}</p>
          <p>{props.total}</p>
          <ul>{displayCards}</ul>
        </a>
    )
  }