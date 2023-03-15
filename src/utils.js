import { VALUES, WEIGHT } from './constants.js';

export const isTheLastMove = (playerMove, computerMove) => playerMove !== null && computerMove !== null;

export const isPlayerMoved = (playerMove, computerMove) => playerMove !== null && computerMove === null;

export const getRandomValue = () => {
    const index = Math.floor(Math.random() * VALUES.length);
    return VALUES[index];

}

export const findWinner = (playerMove, computerMove) => {

    if (playerMove === computerMove) return 'Tie';

    const p1 = WEIGHT[playerMove];
    const p2 = WEIGHT[computerMove];

    if (p1 > p2 && (p1 - p2 === 1)) {
        return 'Player';
    }

    return 'Computer';
}