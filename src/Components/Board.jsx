import React, { useState } from 'react';

export default function Board({playerTurn, setPlayerTurn, board, setBoard, gameOver}) {
    // const [squareVal, setSquareVal] = useState();
    function checkGameOver() {
        console.log('Run check win function')
    }
    function handleClick(e) {
        alert('clicked!')
        console.log(e.target.id);
        const newBoard = board;
        newBoard[e.target.id] = playerTurn
        console.log(newBoard);
        // Change the value of the clicked square
        setBoard(newBoard);
        checkGameOver();
        // Change the playerTurn
        setPlayerTurn(playerTurn * -1);       
    }
    const squareVal = board.map((s, idx) => <button className="square" onClick={handleClick} id={idx} key={idx}>{s}</button>)
    return (
        <body className= 'board'>
            {squareVal}
        </body>
    )
}