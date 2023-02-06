//Clear score, set tracks to default values, clear history, draw new decks for each player, and draw 5 cards
export const setUpGame = () => {
    //Clear score

    //Set tracks to default values

    //Clear History

    //Generate new deck for player 1

    //Draw 5 cards

    //Generate new deck for player 2

    //Draw 5 cards

    //Set it to player 1's turn

}
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
    //Loop through each of the 

}