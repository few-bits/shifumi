export const PARTICIPANT_USER = 'user';
export const PARTICIPANT_COMPUTER = 'computer';
export const MODE_AWAITING = 'awaiting';
export const MODE_RESULTS = 'results';
export const MODE_FINISHED = 'finished';

export const VALUE_ROCK = 'rock';
export const VALUE_PAPER = 'paper';
export const VALUE_SCISSOR = 'scissors';

export const VALUES = [VALUE_ROCK, VALUE_PAPER, VALUE_SCISSOR];

export const WEIGHT = {
    [VALUE_ROCK]: 0,
    [VALUE_PAPER]: 1,
    [VALUE_SCISSOR]: 2,
};

export const LAYERS = ['Cosmos', 'Sky', 'Earth'];
export const BASE_LEVEL = LAYERS.length - 1;
export const MAX_SCORE = 2 