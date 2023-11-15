import './App.css';
import Board from './Components/Board';
import React, {useState} from 'react';
import Message from './Components/Message';

export default function App() {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [board, setBoard] = useState([0,0,0,0,0,0,0,0,0]);
  // When gameOver is not null, display the Play Again button
  const [gameOver, setGameOver] = useState(true);
  // Check for gameOver
  function checkGameOver() {
    console.log("game over")
  }
  // Update board state & playerTurn state when square is clicked
  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe
      </header>
      <Message playerTurn={playerTurn} gameOver={gameOver} />
      <Board playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} board={board} setBoard={setBoard} gameOver={gameOver}/>
      {/* When the game ends, display play again */}
      {gameOver ? 
        <button className='play-button'>Play again</button>
        : ""
      }
    </div>
  );
}
