import React from "react";
import {range} from "../../utils";
import Guess from "../Guess";

function GuessResults({guessHistory}) {
  return (
    <div className="guess-results">
      {range(0,6).map(i => (
        <Guess word={guessHistory[i].guess} key={guessHistory[i].key}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
