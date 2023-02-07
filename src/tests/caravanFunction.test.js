import {expect, jest, test} from '@jest/globals';
import { CaravanGame} from '../providers/caravanFunctions';


test('Game should start with default values', () =>{
    var expectedTracks = [
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
    expect(CaravanGame('getState')[0]).toStrictEqual(expectedTracks);
})
test('Player hands should hold 8 cards', () => {
    expect(CaravanGame('getState')[1][0].hand.length).toBe(8);
})
test('Player deck should have more than or equal to 30 cards', () => {
    expect(CaravanGame('getState')[1][0].deck.length >= 30).toBe(true)
})

//Test a move
test('Player 1 should be able to place an Ace on their track on open', () => {
    let testTracks  = [
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
    let testMove = {
        player : 0, 
        card : {
            'parentDeck' : "Sierra Madre",
            'type' : "eight",
            'suit' : "hearts",
            'shorthand' : "8H", 
            'value' : 8,
        },
        track : 0,
        index : 0
    }
    expect(CaravanGame('tryMove', testMove, testTracks)).toBe(true)
})

