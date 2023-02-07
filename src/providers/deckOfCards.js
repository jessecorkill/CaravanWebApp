import {combinedDeck} from './cards'

export const genDecks = () => {
    let deck = combinedDeck;
    let shuffledDeck = deck.sort((a, b) => 0.5 - Math.random())
    return shuffledDeck
}




