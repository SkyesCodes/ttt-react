import React, { useState } from 'react';
import Square from './Square';

export default function Board({playerTurn, setPlayerTurn}) {
    const [squareVal, setSquareVal] = useState();
    function checkGameOver() {
        console.log('Run check win function')
    }
    function handleClick() {
        alert('clicked!')
        checkGameOver();
    }
    return (
        <>
        <body className= 'board'>
            <div className="board-row">
                <button className="square" onClick={handleClick}>1</button>
                <button className="square" onClick={handleClick}>2</button>
                <button className="square" onClick={handleClick}>3</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={handleClick}>4</button>
                <button className="square" onClick={handleClick}>5</button>
                <button className="square" onClick={handleClick}>6</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={handleClick}>7</button>
                <button className="square" onClick={handleClick}>8</button>
                <button className="square" onClick={handleClick}>9</button>
            </div>
            </body>
        </>
    )
}