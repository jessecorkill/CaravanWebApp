import axios from "axios";

export const genDecks = (count) => {
    //console.log("newDeck ran")
    let deckIDs = []
    axios({
      method: 'get',
      url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count='+count,
      responseType: 'json',
    })

      .then(function (response) {
        //console.log(response.data.deck_id);
        genDecks.push(response.data.deck_id)
      })
      .catch(function(error){
        if(error.response){
        //   console.log(error.response.data);
        //   console.log(error.response.status);
        //   console.log(error.response.headers);
        }
      })

      return deckIDs;
  }

  export const drawFromDeck = (playersDeckID, count) => {
    let cards = null;
    axios({
      method: 'get',
      url: 'https://deckofcardsapi.com/api/deck/'+ playersDeckID +'/draw/?count=' + count,
      responseType: 'json'
    })

    .then(function (response){    
      //console.log(response.data);
      const res = response.data;
      let cards = res.cards      
    })

    .catch(function(error){
      if(error.response){
        //console.log(error.response.data);
        //console.log(error.response.status);
        //console.log(error.response.headers);
      }
    })
    
    return cards
}