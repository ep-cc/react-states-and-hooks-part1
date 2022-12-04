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

export default App;
