import { useState } from 'react';
import './App.css';


const SIDES = {
  UNSET: '?',
  HEADS: 'H',
  TAILS: 'T',
};

function App() {
  const guesses = [
    SIDES.HEADS,
    SIDES.HEADS,
    SIDES.TAILS,
    SIDES.HEADS,
  ];

  return (
    <div className="App">
      <h1>Coin flipping game</h1>
      <Flipper />
      <div className='coin-container'>
        {
          guesses.map(g => <Coin what={g}/>)
        }
      </div>
    </div>
  );
}

function Coin(props) {
  return <div className='coin'>{props.what}</div>
}

function Flipper() {
  const [what, setWhat] = useState(SIDES.UNSET);

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

export default App;
