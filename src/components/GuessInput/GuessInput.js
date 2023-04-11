import React from 'react';

function GuessInput({addGuess, disabled}) {
    const [guess, setGuess] = React.useState("");
    function handleGuess(event){
        event.preventDefault();
        addGuess(guess);
        setGuess("");
    }
  return (
    <form className="guess-input-wrapper"
    onSubmit={handleGuess}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
        id="guess-input" 
        type="text" 
        value={guess}
        onChange={event => {setGuess(event.target.value.toUpperCase())}}
        pattern="\w{5}"
        minLength={5}
        maxLength={5}
        disabled={disabled}
        />
    </form>
  );
}

export default GuessInput;
