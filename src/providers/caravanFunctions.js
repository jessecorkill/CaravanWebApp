import { genDecks, drawFromDeck } from "./deckOfCards";
import { jokerPlaced, jackPlaced, queenPlaced, kingPlaced } from "./faceCardFuncitons";
export var CaravanGame = (debug, testMove, testState) => {
    var tracks = 'test';
    var history = [];
    var turn;
    var players;
    //check if the game has started
    if(typeof(turn) === 'undefined'){
        //setup game with defaults
        setUpGame();
    }

    //Handle Debug Args
    //debug array is 
    switch(debug){
        case 'getState':
            return gameState();
            break
        case 'tryMove':
            load(testState)
            moveCard(testMove.player, testMove.card, testMove.track, testMove.index)
            return gameState()
            break
    }
  

    //function to retrieve current game state
    function getGameState(){
        let game = [
            tracks,
            players,
            turn,
        ]
        return game
    }

    //function to load any point in history or customized card placements
    function load(tracksToLoad){
        //Set up board with new setup
        tracks = tracksToLoad
        //Re-Score each track
        evaluateTrack(0)
        evaluateTrack(1)
        evaluateTrack(2)
        evaluateTrack(3)
        evaluateTrack(4)
        evaluateTrack(5)
        //Check if tracks have a winner
        checkForWin()
    }

    //Clear score, set tracks to default values, clear history, draw new decks for each player, and draw 5 cards
    function setUpGame(){
        //Set tracks to default values
        tracks = [
            {
                name: "Boneyard",
                score: 0,
                cards: [],
                direction: null,
            },
            {
                name: "Redding",
                score: 0,
                cards: [],
                direction: null,
            },
            {
                name: "Shadey Sands",
                score: 0,
                cards: [],
                direction: null,
            },
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
              },]

        //Clear History
        history = [];
        //Generate new deck for player 1
        players = [{'winner' : false, 'deck': [], 'hand' : []},{'winner' : false, 'deck': [], 'hand' : []}]
        players[0].deck = genDecks()
        //Draw 8 cards
        players[0].deck = players[0].deck.slice(8)
        players[0].hand = players[0].deck.slice(0,8);
        //Generate new deck for player 2
        players[1].deck = genDecks()
        //Draw 8 cards
        players[1].deck = players[1].deck.slice(8)
        players[1].hand = players[1].deck.slice(0,8);
        //Set it to player 1's turn
        var turn = 0;
        

    }

    function trackSold(track){
        if(track.score > 21 && track.score < 27){
            return true
        }else{
            return false
        }
    }

    //Function to check each track for winning conditions
    function checkForWin(player){        
        //Check Player 2 has 2 tracks either (0,1, or 2) to be over 21 and under 27
        if(trackSold(tracks[0]) && trackSold(tracks[1]) || trackSold(tracks[1]) && trackSold(tracks[2]) || trackSold(2) && trackSold(tracks[0])){
            //If there are ties (0-3, 1-4, 2,5), then end the function without a win state change.
            if(tracks[0].score == tracks[3].score || tracks[1].score == tracks[4].score || tracks[2].score == tracks[5].score){
                return false
            }
            //Else Player 2 wins
            else{
                return true
            }            
        }

        //Check Player 1 has 2 tracks either (3,4, or 5) to be over 21 and under 27
        if(trackSold(tracks[3]) && trackSold(tracks[4]) || trackSold(tracks[4]) && trackSold(tracks[5]) || trackSold(5) && trackSold(tracks[3])){
            //If there are ties (0-3, 1-4, 2,5), then end the function without a win state change.
            if(tracks[0].score == tracks[3].score || tracks[1].score == tracks[4].score || tracks[2].score == tracks[5].score){
                return false
            }
            //Else Player 1 wins
            else{
                return true
            }            
        }
    }    

    //Function to place card
    function moveCard(player, card, track, index){
        //if it is a valid move
        if(validateMove(player, card, track, index)){
            //add the card's value to the track's cards array
            tracks[track].cards[index+1] = card;
            //if the card is a face card
            switch(card.type){
                case 'joker':
                    // Do special effect
                    jokerPlaced(player, card, track, index)
                break;
                case 'jack':
                    // Do special effect
                    jackPlaced(player, card, track, index)
                break;
                case 'queen':
                    // Do special effect
                    queenPlaced(player, card, track, index)
                break;
                case 'king':
                    // Do special effect
                    kingPlaced(player, card, track, index)
                break;
                default:
                //Card is a non-face card

            }
            //evaluate the new score of the track
            evaluateTrack(track)
            //check if tracks are winning
            checkForWin()
            //determine track direction
            tracks[track].direction = scaleTrack(track)
            //change to next player's turn
            turn = ( turn == 0 ? 1: 0)
        }else{
        //else return false
        return false
        }
    }


    //Function to determine a placement's validity. Illegal moves are:
    //Cards places out of the track's decending / accending order.
    //Non-Face cards can only be placed on the 
    //Kings can only be placed on number cards, aces, or other kings
    //All friendly tracks must be placed on at least once, before moving elsewhere.
    function validateMove(player, card, track, index){

        return true
    }

    //Function to determine a track's score
    function evaluateTrack(track){
        //Loop through each of the cards of the track
        //if the card is not a face card..
            //add the value to the score
        //else if it is a face card..

    }

    //Prove card is face card
    function isFaceCard(card){
        if(card.type != 'joker' ||  card.type != 'jack' || card.type != 'queen' || card.type != 'king'){
            return false
        }else{
            return true
        }
    }

    //Function to determine direction of a track
    function scaleTrack(track){
        //if the track has more than one cards on it..
        if(tracks[track].cards.length >= 2){
            //iterate through array backwards until we have two cards to compare or have run out of comparable cards
            let itr = tracks[track].cards.length - 1;
            while(itr >= 0 ){
                //check if the last card is a face card or not
                if(!isFaceCard(tracks[track].cards.slice(itr))){
                    var subjectCard = tracks[track].cards.slice(itr)
                    //check if the next card upwards is also not a face card
                    if(!isFaceCard(tracks[track].cards.slice(itr - 1))){
                        //compare the two values..
                        if(subjectCard > tracks[track].cards.slice(itr - 1)){
                            return "ascending"
                        }else{
                            return "descending"
                        }
                    }
                    //The next card upwards was a face card so move up to another card
                    else{
                        subItr = itr - 2
                        //Sub-loop to continue search for card to compare to
                        while(subItr >= 0){
                            if(!isFaceCard(tracks[track].cards.slice(subItr))){
                                if(subjectCard > tracks[track].cards.slice(itr - 1)){
                                    return "ascending"
                                }else{
                                    return "descending"
                                }
                            }
                            subItr --
                        }
                    }
                }
                //The card was a face card, so we move up to the next.
                else{
                    //move on to the next card until we find another card to compare

                }

                //Move up from bottom to find another card to compare.
                itr--
            }

        }
    }
}
<<<<<<< Updated upstream
=======
//Function to check each track for 
export const gameWin = () => {
    //Check Player 1's tracks (0,1,2) to be over 21 and under 27
        //If there are ties (0-3, 1-4, 2,5), then end the function without a win state change.
        //Else Player 1 wins
    //Check Player 2's tracks (3,4,5) to be over 21 and under 27
        //If there are ties (0-3, 1-4, 2,5), then end the function without a win state change.
        //Else Player 2 wins


}

//Function to place card
export const moveCard = (player, card, track, index) => {
    //if it is a valid move
        //add the card's value to the track's cards array
        //if the card is a face card
            //do special effect
        //evaluate the new score of the track
        //check if tracks are winning
        //change to next player's turn
    //else return false
}


//Function to determine a placement's validity. Illegal moves are:
//Cards places out of the track's decending / accending order.
//Non-Face cards can only be placed on the 
export const validateMove = (player, card, track, index) => {

    return true
}

//Function to determine a track's score
export const evaluateTrack = (track) => {
    //Loop through each of the cards on a track's card array
    //if the card is a face card..
        

}
>>>>>>> Stashed changes
