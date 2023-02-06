//Played against Ace, 2-10. Removes that card, along with any face cards attached to it.
const jackPlaced = (track, index) => {

}

//Played against Ace, 2-10. Reverses the current direction of the hand, changes the current suit of the hand.
//Multiple queens may be played on the same card.
const queenEffect = (track, index) => {

}

//Played against Ace, 2-10. Adds the value of that card again. E.g. a king played on a 9 adds 9 to that hand.
//Multiple kings may be played on the same card for multiplicative effects. 
//E.g. 4 + king = 8. 4 + two kings = 16.
const kingEffect = (track, index) => {

}


//Value of 1. Jokers played on aces remove all other non-face cards of the ace's suit from the table. 
//E.g. a joker played on an A♠ removes all spades (except face cards and that card, specifically) from the table.
const aceEffect = (track, index) => {

}

//When played against Ace:
//Jokers played on aces remove all other non-face cards of the ace's suit from the table. 
//E.g. a joker played on an A♠ removes all spades (except face cards and that card, specifically) from the table.

//When played against number card (2-10):
//Jokers played on these remove all other cards of this value from the table. 
//E.g. a joker player on a 4♥ removes all 4s (other than that card, specifically) from the table.
//Multiple Jokers may be played on the same card.
const jokerEffect = (track, index) => {
    //If it was placed on a non-face card..

    //It was placed on a face card..
        //

}