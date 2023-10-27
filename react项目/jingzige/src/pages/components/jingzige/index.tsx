import React, { useState } from 'react'
import styles from './index.less'

const squares =
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

const isWinner = (lines: string[]) => {
    for (let i = 0; i < squares.length; i++) {
        const [a, b, c] = squares[i]
        if (lines[a] === lines[b] && lines[a] === lines[c] && lines[a]) {
            return lines[a]
        }
    }
    return ''
}

const Square = ({ value, onSquareClick }: { value: string | null, onSquareClick: any }) => {
    return <button onClick={onSquareClick}>{value}</button>
}

export default function index() {
    const [isNextX, setIsNextX] = useState(true)
    const [lines, setLines] = useState(Array(9).fill(null));

    // game 
    const onSquareClick = (num: number) => {
        if (isWinner(lines) || lines[num]) {
            return
        }
        setLines(prevLine => {
            const newLines = [...prevLine]
            newLines[num] = isNextX ? 'X' : 'O'
            return newLines
        })
        setIsNextX(!isNextX)
    }
    // reset
    const resetGame = () => {
        setIsNextX(true)
        setLines(Array(9).fill(null))
    }
    return (
        <div className={styles.square_container}>
            <h3>Next Player is : {isNextX ? 'X' : 'O'}</h3>
            <h3> {isWinner(lines) ? 'Winner is: ' + isWinner(lines) + '!!!' : ''}</h3>
            <div className={styles.square_row} >
                <Square value={lines[0]} onSquareClick={() => onSquareClick(0)}></Square>
                <Square value={lines[1]} onSquareClick={() => onSquareClick(1)}></Square>
                <Square value={lines[2]} onSquareClick={() => onSquareClick(2)}></Square>
            </div>
            <div className={styles.square_row}>
                <Square value={lines[3]} onSquareClick={() => onSquareClick(3)}></Square>
                <Square value={lines[4]} onSquareClick={() => onSquareClick(4)}></Square>
                <Square value={lines[5]} onSquareClick={() => onSquareClick(5)}></Square>
            </div>
            <div className={styles.square_row}>
                <Square value={lines[6]} onSquareClick={() => onSquareClick(6)}></Square>
                <Square value={lines[7]} onSquareClick={() => onSquareClick(7)}></Square>
                <Square value={lines[8]} onSquareClick={() => onSquareClick(8)}></Square>
            </div>
            <button style={{ marginTop: '10px' }} onClick={resetGame}>reset</button>
        </div>
    )
}
