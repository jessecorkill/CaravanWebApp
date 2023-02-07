//Face Cards are not read in line by the Evaluate Track function, but are executed in the placement / move of the card.

//Played against Ace, 2-10. Removes that card, along with any face cards attached to it.
export const jackPlaced = (player, card, track, index) => {
    //Save the current track object to a variable
    //Start a while loop for while  
    //if the card in the index + 1 is a face card, (queen, king, ) 
}

//Played against Ace, 2-10. Reverses the current direction of the hand, changes the current suit of the hand.
//Multiple queens may be played on the same card.
export const queenPlaced = (player, card, track, index) => {
    //Save the current track object to a variable
    //if the track's direction is still null..
        //return a new track object with null direction & the queen's suit
    //return a new track object with opposite direction & the queen's suit
}

//Played against Ace, 2-10. Adds the value of that card again. E.g. a king played on a 9 adds 9 to that hand.
//Multiple kings may be played on the same card for multiplicative effects. 
//E.g. 4 + king = 8. 4 + two kings = 16.
export const kingPlaced = (player, card, track, index) => {
    //Save the target card's value to a variable
    //return a new track object with the King card's value set to twice the previous card's value & the previous card's value set to 0
    
}

//When played against Ace:
//Jokers played on aces remove all other non-face cards of the ace's suit from the table. 
//E.g. a joker played on an A♠ removes all spades (except face cards and that card, specifically) from the table.

//When played against number card (2-10):
//Jokers played on these remove all other cards of this value from the table. 
//E.g. a joker player on a 4♥ removes all 4s (other than that card, specifically) from the table.
//Multiple Jokers may be played on the same card.
export const jokerPlaced = (player, card, track, index) => {
    //If it was placed on a non-face card..
        //while there are tracks to loop through..
            //filter through each card of the current track. track[index] = cards.filter(card.value == target.value) 
        //return the new track objects
    //It was placed on a face card..
        //while there are tracks to loop through..
            //filter through each card of the current track. track[index] = cards.filter(card.suit == target.suit) 
        //return the new track objects
}