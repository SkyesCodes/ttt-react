export default function Message({ playerTurn }) {
    return (
        <div className='message'>
            <h3>`It's ${playerTurn}'s turn'`</h3>
            <h3>It's a draw</h3>
            <h3>`Player ${playerTurn} won!`</h3>
        </div>
    )
}