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
  const [waiting, setWaiting] = useState(false);

  function play() {
    const newGuesses = [...guesses, nextGuess];
    const newCoin = Math.random() < 0.5 ? SIDES.HEADS : SIDES.TAILS;
    const newOutcomes = [...outcomes, newCoin];
    setGuesses(newGuesses);
    setWaiting(true);
    setTimeout(
      () => {
        setOutcomes(newOutcomes);
        setNextGuess(SIDES.UNSET);
        setWaiting(false);
      }, 1000);
  }

  return (
    <div className="App">
      <h1>Coin flipping game</h1>
      <div className='coin-container'>
        <Label text='Next guess:'/>
        <Flipper what={nextGuess} setWhat={setNextGuess}/>
        <button
          onClick={play}
          disabled={nextGuess === SIDES.UNSET || waiting}>
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
        {
          outcomes.map(g => <Coin what={g}/>)
        }
        { waiting && <WaitAnim /> }
      </div>
    </div>
  );
}

function WaitAnim() {
  return <div className='waiting'><Coin what={SIDES.UNSET}/></div>;
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
