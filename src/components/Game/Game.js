import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([
    { guess: undefined, key: crypto.randomUUID() },
    { guess: undefined, key: crypto.randomUUID() },
    { guess: undefined, key: crypto.randomUUID() },
    { guess: undefined, key: crypto.randomUUID() },
    { guess: undefined, key: crypto.randomUUID() },
    { guess: undefined, key: crypto.randomUUID() },
  ]);
  const [guessCount, setGuessCount] = React.useState(0);
  const [gameState, setGameState] = React.useState({ over: false, win: false })

  function addGuess(newGuess) {
    const totalGuesses = guessCount + 1
    if (totalGuesses <= NUM_OF_GUESSES_ALLOWED) {
      const guesses = [...guessHistory]
      guesses[guessCount] = { guess: checkGuess(newGuess, answer), key: crypto.randomUUID() }
      setGuessHistory(guesses);
      setGuessCount(totalGuesses);
      if (newGuess == answer) {
        setGameState({ over: true, win: true })
      } else if (totalGuesses == NUM_OF_GUESSES_ALLOWED) {
        setGameState({ over: true, win: false })
      }
    }
  }

  return (
    <>
      <GuessResults guessHistory={guessHistory} />
      { !gameState.over && <GuessInput
        addGuess={addGuess}
        disabled={gameState.over}
      /> }
      { gameState.over && gameState.win && <div className="banner happy">You win!</div>}
      { gameState.over && !gameState.win && <div className="banner sad">You lose!</div>}
    </>
  );
}

export default Game;
