import './App.css';


const SIDES = {
  UNSET: '?',
  HEADS: 'H',
  TAILS: 'T',
};

function App() {
  return (
    <div className="App">
      <h1>Coin flipping game</h1>
      <div>
        <Coin what={SIDES.HEADS}/>
        <Coin what={SIDES.TAILS}/>
      </div>
    </div>
  );
}

function Coin(props) {

  return <div className='coin'>{props.what}</div>
}

export default App;
