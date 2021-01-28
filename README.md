# Optima Frontend Test - Ignacio Ortega

## Scoreboard Library

Project created with NPM

It includes the following stack:

- [Jest](https://jestjs.io/)
- [Typescript](https://www.typescriptlang.org/)
- [TS-Jest](https://github.com/kulshekhar/ts-jest)

<hr />

## Getting Started

Install project dependencies with:

```sh
npm install
```
<hr />

## Developing

### Run project

This project is a TDD development, so to see if something it's working we should write a test for it.

<b>Run Tests once:</b>
```
npm run test
```

<b>Run Tests watching changes:</b>
```
npm run test:watch
```

<hr />

## Building

In order to compile all the TS files, we should compile it with:

```
npm run build
```
This will result in two files at /build directory:
1. scoreboard.js   // Compiled Typescript file into Javascript
2. scoreboard.d.ts // Typescript typing definitions

<hr>

Also we would like to use this library in another npm project, for example, a React project.

To make this possible we should pack the library into a npm package with this command:

```
npm run pack
```
This will result in generate a <b>"scoreboard.tar.gz"</b> file at the root of our project.

This file can be added to our project's package.json to be installed and used.

<hr />

## Usage


Basic import
```javascript
import ScoreBoard from 'scoreboard'
const scoreboard = new ScoreBoard();
```

Start new match, it will return the new match Id
```javascript
scoreboard.startGame(
  'homeTeamName'
  'awayTeamName'
);
```

Finish match by Id
```javascript
scoreboard.finishGame(matchId);
```

Update match score by Id
```javascript
scoreboard.updateScore(matchId, {
    localScore,
    awayScore
});
```

Get matches summary
```javascript
const summary = scoreboard.getSummary();
```