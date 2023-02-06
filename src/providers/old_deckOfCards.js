import axios from "axios";

export const retest = () => {
  var String = "Test";
  return String;
}
export const genDecks = (count) => {
    //console.log("newDeck ran")
    var deckID = ""
    axios({
      method: 'get',
      url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count='+count,
      responseType: 'json',
    })
      .then(function (response) {
        //console.log(response.data.deck_id);
        return response.data.deck_id
        
      })
      .catch(function(error){
        if(error.response){
          return error.response;
        }
      })
      return deckID;
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