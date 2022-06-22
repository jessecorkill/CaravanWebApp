import React from "react";

//Child Component for individual card functionality
export class Card extends React.Component{
  constructor(props){
    this.super(props)
    this.state = {

    }
  }
  handleCardClick = () => {
    console.log("Card Clicked")
  }
  render(){
    return(
      <li value={props.value} onClick={this.handleCardClick}>{props.code}</li>
    )
  }  
}