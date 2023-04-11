import React from "react";
import {range} from "../../utils";

function Guess({word}) {
  return (
  <p className="guess"> 
    { word ? 
    word.map((c, i) => (
      <span className={'cell ' + c.status} key={i}>{c.letter}</span>
      )) : range(0,5).map(i => (
        <span className="cell" key={i}>{' '}</span>
    ))
  }
  </p>
  );
}

export default Guess;
