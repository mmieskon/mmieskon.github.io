import { useState } from "react";


export default function MainPage() {
    const [password, setPassword] = useState("");
    const [showPrize, setShowPrize] = useState(false);
    function handleOnClaim() {
        if (password['input'].toLowerCase() === "joulu-puki123") {
            setShowPrize(true);
        }
    }
    function handleEnter(event) {
        if (event.key === 'Enter') {
            handleOnClaim(event);
        }
    }
    function handleInputChange(e) {
        setPassword({input: e.target.value});
    }
    return <>
        <div className="title">
            <h1>Terve tuloa joulu-pukkin pajaan!</h1>
        </div>
        <Claim onEnter={handleEnter} onClaim={handleOnClaim} handleInputChange={handleInputChange}/>
        <Prize showPrize={showPrize}/>
    </>
}

function Claim({onEnter, onClaim, handleInputChange}) {
    return <>
        <div className="claim">
            <p>Lunasta lahja extra-salaisella koodilla!</p>
            <input type="text" onChange={handleInputChange} onKeyDown={onEnter}></input>
            <button onClick={onClaim}>Lunasta</button>
        </div>
    </>
}

function Prize({showPrize}) {
    if (!showPrize) {
        return <></>
    }
    return <>
        <div className="prize">
            <h1>Onneksi olkoon!</h1>
            <p>Tämä kuponki sisältää koko perheen matkan pakohuoneeseen!</p>
            <p>Pakohuoneen paikka ja aika ovat vapaasti valittavissa.</p>
            <p>Tässä esimerkkinä vaihtoehtoja</p>
            <a href="https://www.trapfactory.fi">www.trapfactory.fi</a> <br/>
            <a href="https://www.truescape.fi">www.truescape.fi</a> <br/>
            <a href="https://www.exite.fi">www.exite.fi</a> <br/>
        </div>
    </>
}

// export default function Board() {
//     const [squares, setSquares] = useState(Array(9).fill(null))
//     const [xIsNext, setXIsNext] = useState(true);
// 
//     function handleClick(i) {
//         if ((squares[i] != null) || (gameWinner(squares) != null)) {
//             return
//         }
//         const nextSquares = squares.slice();
//         if (xIsNext) {
//             nextSquares[i] = "X";
//         } else {
//             nextSquares[i] = "O";
//         }
// 
//         setXIsNext(!xIsNext);
//         setSquares(nextSquares);
//     }
// 
//     const winner = gameWinner(squares);
//     let status;
//     if (winner) {
//         status = `Winner: ${winner}`;
//     } else {
//         if (xIsNext) {
//             status = `Next player: X`
//         } else {
//             status = `Next player: O`
//         }
//     }
// 
//     return <>
//         <div className="status">{status}</div>
//         <div className="board-row">
//             <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
//             <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
//             <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
//         </div>
//         <div className="board-row">
//             <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
//             <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
//             <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
//         </div>
//         <div className="board-row">
//             <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
//             <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
//             <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
//         </div>
//     </>
// }
// 
// 
// function Square({value, onSquareClick}) {
//     return (
//         <button className="square" onClick={onSquareClick}>{value}</button>
//     );
// }
// 
// function gameWinner(squares) {
//     var arr = Array(3);
//     // Check rows
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//             arr[j] = squares[3 * i + j];
//         }
//         if ((arr[0] != null) && (arr[0] == arr[1]) && (arr[0] == arr[2])) {
//             return arr[0];
//         }
//     }
//     // Check columns
//     for (var j = 0; j < 3; j++) {
//         for (var i = 0; i < 3; i++) {
//             arr[i] = squares[3 * i + j];
//         }
//         if ((arr[0] != null) && (arr[0] == arr[1]) && (arr[0] == arr[2])) {
//             return arr[0];
//         }
//     }
// 
//     // Check diagonal 1
//     for (var i = 0; i < 3; i++) {
//         arr[i] = squares[3 * i + i]
//     }
//     if ((arr[0] != null) && (arr[0] == arr[1]) && (arr[0] == arr[2])) {
//         return arr[0];
//     }
// 
//     // Check diagonal 2
//     for (var i = 0; i < 3; i++) {
//         arr[i] = squares[3 * i + ((3-1) - i)]
//     }
//     if ((arr[0] != null) && (arr[0] == arr[1]) && (arr[0] == arr[2])) {
//         return arr[0];
//     }
//     return null;
// }


