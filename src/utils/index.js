import { VALUES, WEIGHT } from '../constants';

export const isTheLastMove = (playerMove, computerMove) => playerMove !== null && computerMove !== null;

export const isPlayerMoved = (playerMove, computerMove) => playerMove !== null && computerMove === null;

export const getRandomValue = () => {
    const index = Math.floor(Math.random() * VALUES.length);
    return VALUES[index];

}

// Please check the readme file with solution describe
export const findWinner = (playerMove, computerMove) => {
    if (playerMove === computerMove) return 'Tie';
    const p1 = WEIGHT[playerMove];
    const p2 = WEIGHT[computerMove];

    if (p1 - p2 === 1 || p1 - p2 === -2) {
        return 'Player';
    }

    return 'Computer';
}