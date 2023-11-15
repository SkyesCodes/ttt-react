import './App.css';
import Board from './Components/Board';
import React, {useState} from 'react';
import Message from './Components/Message';

export default function App() {
  const [playerTurn, setPlayerTurn] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe
      </header>
      <Message playerTurn={playerTurn}/>
      <Board playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
      <button className='play-button'>Play again</button>
    </div>
  );
}
