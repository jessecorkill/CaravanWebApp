import {combinedDeck} from './cards'

export const genDecks = () => {
    let deck = combinedDeck;
    shuffledDeck = deck.sort((a, b) => 0.5 - Math.random())
    return shuffledDeck
}

//Draw any amount of cards for the indicated player's deck
export const drawFromDeck = (player, count) => {

}



