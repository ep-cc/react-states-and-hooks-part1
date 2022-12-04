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
      <div className='coin-container'>
        <Label text='Next guess:'/>
        <Flipper />
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

function Label(props) {
  return <div className='label'>{props.text}</div>;
}

export default App;
