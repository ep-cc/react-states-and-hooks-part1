import { useState } from 'react';
import './App.css';


const SIDES = {
  UNSET: '?',
  HEADS: 'H',
  TAILS: 'T',
};

function App() {
  const [guesses, setGuesses] = useState([]);
  const [outcomes, setOutcomes] = useState([]);
  const [nextGuess, setNextGuess] = useState(SIDES.UNSET);

  function play() {
    console.log('play...');
  }

  return (
    <div className="App">
      <h1>Coin flipping game</h1>
      <div className='coin-container'>
        <Label text='Next guess:'/>
        <Flipper what={nextGuess} setWhat={setNextGuess}/>
        <button
          onClick={play}
          disabled={nextGuess===SIDES.UNSET}>
          PLAY
        </button>
      </div>
      <div className='coin-container'>
        <Label text='Guesses:'/>
        {
          guesses.map(g => <Coin what={g}/>)
        }
      </div>
      <div className='coin-container'>
        <Label text='Outcomes:'/>
        
      </div>
    </div>
  );
}

function Coin(props) {
  return <div className='coin'>{props.what}</div>
}

function Flipper(props) {
  const what = props.what;
  const setWhat = props.setWhat;

  function flip() {
    if (what === SIDES.UNSET) {
      setWhat(SIDES.HEADS);
    } else if (what === SIDES.HEADS) {
      setWhat(SIDES.TAILS);
    } else {
      setWhat(SIDES.HEADS);
    }
  } 

  return <div className='coin flipper' onClick={flip}>{what}</div>
}

function Label(props) {
  return <div className='label'>{props.text}</div>;
}

export default App;
