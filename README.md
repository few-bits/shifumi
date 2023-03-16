# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Shi-Fu-Mi game.

### Run:

`npm start`

### Rules:

You have to get 2 of 2 points to win.

### Solve strategy:

Here is a matrix solutions for Player1 (rows) and Player2 (colums). Let's consider solution for Player1:

#### Matrix 1

|     |          | x0   | x1    | x2       |
| --- | -------- | ---- | ----- | -------- |
|     |          | Rock | Paper | Scissors |
| y0  | Rock     | 0    | -1    | 1        |
| y1  | Paper    | 1    | 0     | -1       |
| y2  | Scissors | -1   | 1     | 0        |

We need to get ceils with '1':

- (x2,y0)
- (x0,y1)
- (x1,y2)

If we substruct X-coordinates from Y-coordinates for each ceils we will get next matrix:

#### Matrix 2

|     |          | x0   | x1    | x2       |
| --- | -------- | ---- | ----- | -------- |
|     |          | Rock | Paper | Scissors |
| y0  | Rock     | 0    | -1    | -2       |
| y1  | Paper    | 1    | 0     | -1       |
| y2  | Scissors | 2    | 1     | 0        |

Now all ceils from Matrix 1 have uniq values:

- (x2,y0) : -2
- (x0,y1) : 1
- (x1,y2) : 1

So, solution will be:
`Y-X=1 OR Y-X=-1`
