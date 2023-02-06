import {expect, jest, test} from '@jest/globals';
import {genDecks, drawFromDeck, retest} from '../providers/deckOfCards.js'
import { render, screen } from '@testing-library/react';

import Game from '../App';

// test('renders learn react link', () => {
//   render(<Game />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


//playerStart, newDeck, newCard

//newDeck should return something
test('genDecks gives ID', () =>{
    expect(genDecks(1)).toBe(true)
})


